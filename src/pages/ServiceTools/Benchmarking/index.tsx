import React, { useRef } from 'react';
import Frame from '../components/Frame';
import ContentHeader from '../components/ContentHeader/indext';
import {
  benchmarkingFeedback,
  benchmarkingInfo,
  benchmarkingMarketing,
  benchmarkingPrice,
  benchmarkingProduct,
  benchmarkingResult,
  benchmarkingService,
  benchmarkingSkill,
  benchmarkingStrategy,
  benchmarkingStructure,
} from '@/assets';
import Loading from './components/Loading';
import { useBenchmark } from '@/hooks/useBenchmark';
import usePreloadImage from '@/hooks/usePreloadImage';
import ErrorPage from '@/pages/ErrorPage';
import { useAccessControl } from '@/hooks/useAccessControl';
import * as S from './Benchmarking.style';

const Benchmarking = () => {
  const benchmarkingImgs = [
    benchmarkingProduct,
    benchmarkingResult,
    benchmarkingPrice,
    benchmarkingMarketing,
    benchmarkingService,
    benchmarkingStrategy,
    benchmarkingSkill,
    benchmarkingFeedback,
    benchmarkingStructure,
  ];

  const { level, serviceDescription } = useAccessControl();
  if (level === null || serviceDescription === null) {
    return <Loading />;
  }
  const downloadRef = useRef<HTMLDivElement>(null);
  const { imagesLoaded } = usePreloadImage([benchmarkingInfo]);
  const { data, isError, isLoading, refetch, isRefetching } =
    useBenchmark(serviceDescription);

  if (isLoading || isRefetching) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  const { domestic = [], international = [] } = data || {};

  return !imagesLoaded ? null : (
    <S.DownloadWrapper ref={downloadRef}>
      <Frame type={'bcm'} src={benchmarkingInfo} height={1916}>
        <ContentHeader
          downloadRef={downloadRef}
          title="마이핏_벤치마킹"
          refetch={refetch}
        />
        <S.Container>
          <S.TitleContainer>
            <S.DomesticTitleWrapper>국내 경쟁사 분석</S.DomesticTitleWrapper>
            <S.OverseasTitleWrapper>해외 경쟁사 분석</S.OverseasTitleWrapper>
          </S.TitleContainer>
          <S.ContentContainer>
            <S.ContentFlexBox>
              {domestic.map((item, index) => (
                <S.ContentWrapper key={index}>
                  <img src={benchmarkingImgs[index]} alt="benchmarking" />
                  <ul>
                    {item.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ul>
                </S.ContentWrapper>
              ))}
            </S.ContentFlexBox>
            <S.ContentFlexBox>
              {international.map((item, index) => (
                <S.ContentWrapper key={index}>
                  <img src={benchmarkingImgs[index]} alt="benchmarking" />
                  <ul>
                    {item.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ul>
                </S.ContentWrapper>
              ))}
            </S.ContentFlexBox>
          </S.ContentContainer>
        </S.Container>
      </Frame>
    </S.DownloadWrapper>
  );
};

export default Benchmarking;
