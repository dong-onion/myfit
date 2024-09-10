import { useAccessControl } from '@/hooks/useAccessControl';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../FirstResult/components/Loading';
import * as S from './Main.style';
import { useSWOTAnalysis } from '@/hooks/useSwotAnalysis';
import {
  mainBackground,
  mainContentBcm,
  mainContentBlp,
  mainContentBmc,
  mainContentCjm,
  mainContentPsn,
  mainContentStm,
  mainContentSwot,
  mainContentTest,
  mainContentSwotHover,
  mainContentBcmHover,
  mainContentBlpHover,
  mainContentPsnHover,
  mainContentCjmHover,
  mainContentStmHover,
  mainContentBmcHover,
  mainContentTestHover,
  editImg,
} from '@/assets';

import { Modal, Spinner } from '@/components';
import { useQueryClient } from 'react-query';
import { queryKeys } from '@/utility/constants';
import {
  fetchBenchmark,
  fetchBlueprint,
  fetchBusinessModelCanvas,
  fetchCustomerJourneyMap,
  fetchPersona,
  fetchSystemMap,
} from '@/clovaAI/api';
import {
  parseBenchmark,
  parseBlueprint,
  parseBMCanvas,
  parseCustomerJourneyMap,
  parsePersona,
  parseSystemMap,
} from '@/utility/utils';
import usePreloadImage from '@/hooks/usePreloadImage';
import ErrorPage from '../ErrorPage';

const Main = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const levelData = ['씨앗단계', '새싹단계', '나무단계'];
  const queryClient = useQueryClient();
  const { imagesLoaded } = usePreloadImage([
    mainBackground,
    mainContentBcm,
    mainContentBlp,
    mainContentBmc,
    mainContentCjm,
    mainContentPsn,
    mainContentStm,
    mainContentSwot,
    mainContentTest,
    mainContentSwotHover,
    mainContentPsnHover,
    mainContentCjmHover,
    mainContentBmcHover,
    mainContentBlpHover,
    mainContentStmHover,
    mainContentBcmHover,
    mainContentTestHover,
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          queryClient.prefetchQuery(
            [queryKeys.PERSONA, serviceDescription],
            () =>
              fetchPersona(serviceDescription).then((res) =>
                parsePersona(res.result.message.content),
              ),
            { staleTime: 1000 * 60 * 5 },
          ),
          queryClient.prefetchQuery(
            [queryKeys.CUSTOMER_JOURNEY_MAP, serviceDescription],
            () =>
              fetchCustomerJourneyMap(serviceDescription).then((res) =>
                parseCustomerJourneyMap(res.result.message.content),
              ),
            { staleTime: 1000 * 60 * 5 },
          ),
          queryClient.prefetchQuery(
            [queryKeys.BUSINESS_MODEL_CANVAS, serviceDescription],
            () =>
              fetchBusinessModelCanvas(serviceDescription).then((res) =>
                parseBMCanvas(res.result.message.content),
              ),
            { staleTime: 1000 * 60 * 5 },
          ),
          queryClient.prefetchQuery(
            [queryKeys.BLUEPRINT, serviceDescription],
            () =>
              fetchBlueprint(serviceDescription).then((res) =>
                parseBlueprint(res.result.message.content),
              ),
            { staleTime: 1000 * 60 * 5 },
          ),
          queryClient.prefetchQuery(
            [queryKeys.SYSTEM_MAP, serviceDescription],
            () =>
              fetchSystemMap(serviceDescription).then((res) =>
                parseSystemMap(res.result.message.content),
              ),
            { staleTime: 1000 * 60 * 5 },
          ),
          queryClient.prefetchQuery(
            [queryKeys.BENCHMARK, serviceDescription],
            () =>
              fetchBenchmark(serviceDescription).then((res) =>
                parseBenchmark(res.result.message.content),
              ),
            { staleTime: 1000 * 60 * 5 },
          ),
        ]);
      } catch (error) {
        console.error('Error prefetching data:', error);
      }
    };
    fetchData();
  }, [queryClient]);
  const mainContentImgs = [
    {
      src: mainContentSwot,
      hoversrc: mainContentSwotHover,
      onClick: () => navigate('/tools/swot'),
    },
    {
      src: mainContentPsn,
      hoversrc: mainContentPsnHover,
      onClick: () => navigate('/tools/psn'),
    },
    {
      src: mainContentCjm,
      hoversrc: mainContentCjmHover,
      onClick: () => navigate('/tools/cjm'),
    },
    {
      src: mainContentBmc,
      hoversrc: mainContentBmcHover,
      onClick: () => navigate('/tools/bmc'),
    },
    {
      src: mainContentBlp,
      hoversrc: mainContentBlpHover,
      onClick: () => navigate('/tools/blp'),
    },
    {
      src: mainContentStm,
      hoversrc: mainContentStmHover,
      onClick: () => navigate('/tools/stm'),
    },
    {
      src: mainContentBcm,
      hoversrc: mainContentBcmHover,
      onClick: () => navigate('/tools/bcm'),
    },
    {
      src: mainContentTest,
      hoversrc: mainContentTest,
      onClick: () => navigate('/type'),
    },
  ];
  const { level, serviceDescription } = useAccessControl();
  if (level === null || serviceDescription === null) {
    return <Loading />;
  }

  const { data, isLoading, isError, refetch } = useSWOTAnalysis(
    serviceDescription,
    level,
  );

  if (isError) {
    return <ErrorPage />;
  }

  const { result } = data || {};

  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return !imagesLoaded ? null : (
    <S.Container>
      <S.InnerContainer>
        <S.HeaderTitle>창업 아이템이 고민이신가요?</S.HeaderTitle>
        <S.HeaderSubTitle>
          마이핏이 당신의 마켓핏을 점검해드릴게요
        </S.HeaderSubTitle>
        {modalVisible && <Modal onClose={handleModalClose} refetch={refetch} />}
        <S.SummaryContainer>
          <S.SummaryTitleWrapper>
            <span>{serviceDescription}</span>
            <div className="level">{levelData[level]}</div>
            <S.EditWrapper onClick={handleModalOpen}>
              <S.EditImg src={editImg} alt="edit" />
            </S.EditWrapper>
          </S.SummaryTitleWrapper>

          {isLoading ? (
            <Spinner />
          ) : (
            <S.SummaryContent>
              <S.SummaryResult>{result}</S.SummaryResult>
            </S.SummaryContent>
          )}
        </S.SummaryContainer>
        <S.ContentSectionContainer>
          <h2>마이핏이 추천해요</h2>
          <S.ContentSectionWrapper>
            {mainContentImgs.map((item, index) => (
              <S.ContentImg
                key={index}
                src={item.src}
                hoversrc={item.hoversrc}
                alt="mainContentImg"
                onClick={item.onClick}
              />
            ))}
          </S.ContentSectionWrapper>
        </S.ContentSectionContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Main;
