import { useAccessControl } from '@/hooks/useAccessControl';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../FirstResult/components/Loading';
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
import styled from 'styled-components';
import { Modal, Spinner } from '@/components';
import { useQueryClient } from 'react-query';
import { queryKeys } from '@/utility/constants';
import {
  fetchBusinessModelCanvas,
  fetchCustomerJourneyMap,
  fetchPersona,
} from '@/clovaAI/api';
import {
  parseBMCanvas,
  parseCustomerJourneyMap,
  parsePersona,
} from '@/utility/utils';
import usePreloadImage from '@/hooks/usePreloadImage';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 177px;
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  margin-top: 100px;
  font-family: 'Pretendard-Bold';
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.012em;

  color: ${({ theme }) => theme.color.gray[0]};
`;
export const HeaderSubTitle = styled.span`
  font-family: Pretendard-SemiBold;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.005em;
  text-align: left;
  margin-top: 30px;

  color: ${({ theme }) => theme.color.gray[0]};
`;

export const SummaryContainer = styled.div`
  margin-top: 20px;
  padding: 45px 60px;
  width: 100%;
  height: 240px;
  background-color: #ffffff66;
  border: 1px solid #ffffff99;
  border-radius: 12px;
  box-shadow: 20px 30px 60px 0px #3952ff1a;
  position: relative;
`;
export const SummaryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > .level {
    margin-left: 10px;
    width: 96px;
    height: 38px;
    border-radius: 500px;
    background-color: ${({ theme }) => theme.color.primary[0]};
    color: ${({ theme }) => theme.color.white[0]};
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Pretendard-SemiBold;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.002em;
    text-align: left;
  }

  & > span {
    font-family: Pretendard-Bold;
    font-size: 22px;
    font-weight: 700;
    line-height: 35.2px;
    letter-spacing: -0.005em;
    text-align: center;

    color: ${({ theme }) => theme.color.primary[0]};
  }
`;
export const EditWrapper = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6px;
  right: -6px;
`;
export const EditImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const SummaryContent = styled.div`
  margin-top: 20px;

  & span {
    font-family: Pretendard-Meidum;
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -0.002em;
    text-align: left;
    word-break: keep-all;

    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const ContentSectionContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > h2 {
    font-family: Pretendard-SemiBold;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.005em;
    text-align: left;
    margin-bottom: 20px;

    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const ContentSectionWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
export const ContentImg = styled.img<{ src: string; hoversrc: string }>`
  src: ${({ src }) => src};
  width: 282px;
  height: 282px;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    content: url(${(props) => props.hoversrc});
    transition: 0.25s;
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.color.gray[3]};
    transform: translateY(-0.25em);
  }

  &:active {
    transition: all 0.2s;
    transform: scale(0.95);
  }
  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.color.gray[3]};
    box-shadow: none;
  }
  &:disabled:hover {
    transform: none;
  }
  &:disabled:active {
    transform: scale(1);
  }
`;

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
    // const fetchData = async () => {
    //   try {
    //     await Promise.all([
    //       queryClient.prefetchQuery(
    //         [queryKeys.PERSONA, serviceDescription],
    //         () =>
    //           fetchPersona(serviceDescription).then((res) =>
    //             parsePersona(res.result.message.content),
    //           ),
    //         { staleTime: 1000 * 60 * 3 },
    //       ),
    //       queryClient.prefetchQuery(
    //         [queryKeys.CUSTOMER_JOURNEY_MAP, serviceDescription],
    //         () =>
    //           fetchCustomerJourneyMap(serviceDescription).then((res) =>
    //             parseCustomerJourneyMap(res.result.message.content),
    //           ),
    //         { staleTime: 1000 * 60 * 3 },
    //       ),
    //       queryClient.prefetchQuery(
    //         [queryKeys.BUSINESS_MODEL_CANVAS, serviceDescription],
    //         () =>
    //           fetchBusinessModelCanvas(serviceDescription).then((res) =>
    //             parseBMCanvas(res.result.message.content),
    //           ),
    //         { staleTime: 1000 * 60 * 3 },
    //       ),
    //     ]);
    //     console.log('All data prefetched');
    //   } catch (error) {
    //     console.error('Error prefetching data:', error);
    //   }
    // };
    // fetchData();
  }, [queryClient]);
  const mainContentImgs = [
    {
      src: mainContentSwot,
      hoversrc: mainContentSwotHover,
      onClick: () => navigate('/tools/psn'),
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
      hoversrc: mainContentTestHover,
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
    refetch();
  }

  const { result } = data || {};

  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return !imagesLoaded ? null : (
    <Container>
      <InnerContainer>
        <HeaderTitle>창업 아이템이 고민이신가요?</HeaderTitle>
        <HeaderSubTitle>마이핏이 당신의 마켓핏을 점검해드릴게요</HeaderSubTitle>
        {modalVisible && <Modal onClose={handleModalClose} refetch={refetch} />}
        <SummaryContainer>
          <SummaryTitleWrapper>
            <span>{serviceDescription}</span>
            <div className="level">{levelData[level]}</div>
            <EditWrapper onClick={handleModalOpen}>
              <EditImg src={editImg} alt="edit" />
            </EditWrapper>
          </SummaryTitleWrapper>

          {isLoading ? (
            <Spinner />
          ) : (
            <SummaryContent>
              <span>{result}</span>
            </SummaryContent>
          )}
        </SummaryContainer>
        <ContentSectionContainer>
          <h2>마이핏이 추천해요</h2>
          <ContentSectionWrapper>
            {mainContentImgs.map((item, index) => (
              <ContentImg
                key={index}
                src={item.src}
                hoversrc={item.hoversrc}
                alt="mainContentImg"
                onClick={item.onClick}
              />
            ))}
          </ContentSectionWrapper>
        </ContentSectionContainer>
      </InnerContainer>
    </Container>
  );
};

export default Main;
