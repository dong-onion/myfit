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
import styled from 'styled-components';
import Loading from './components/Loading';
import { useBenchmark } from '@/hooks/useBenchmark';
import usePreloadImage from '@/hooks/usePreloadImage';
import ErrorPage from '@/pages/ErrorPage';
import { useAccessControl } from '@/hooks/useAccessControl';

export const DownloadWrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding-bottom: 40px;

  * {
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const TitleContainer = styled.div`
  margin-top: 63px;
  display: flex;
  width: 100%;
  gap: 14px;
  margin-bottom: 14px;
`;

export const DomesticTitleWrapper = styled.div`
  border: 1px solid #c9d1ff;
  width: 49.5%;
  height: 64px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard-SemiBold';
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.005em;
  background-color: #e3e8fd;
`;

export const OverseasTitleWrapper = styled(DomesticTitleWrapper)`
  background-color: #ced7fc;
  border: 1px solid #b8c3ff;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
`;

export const ContentFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 49.5%;
`;

export const ContentWrapper = styled.div`
  height: 228px;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.color.white[0]};
  border-radius: 12px;
  border: 1px solid #b8c3ff;
  & ul {
    margin: 5px;
    padding-left: 30px;
  }

  & img {
    height: 36px;
  }

  & li {
    font-family: 'Pretendard-Medium';
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: left;
  }
`;

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
    <DownloadWrapper ref={downloadRef}>
      <Frame type={'bcm'} src={benchmarkingInfo} height={1916}>
        <ContentHeader
          downloadRef={downloadRef}
          title="마이핏_벤치마킹"
          refetch={refetch}
        />
        <Container>
          <TitleContainer>
            <DomesticTitleWrapper>국내 경쟁사 분석</DomesticTitleWrapper>
            <OverseasTitleWrapper>해외 경쟁사 분석</OverseasTitleWrapper>
          </TitleContainer>
          <ContentContainer>
            <ContentFlexBox>
              {domestic.map((item, index) => (
                <ContentWrapper key={index}>
                  <img src={benchmarkingImgs[index]} alt="benchmarking" />
                  <ul>
                    {item.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ul>
                </ContentWrapper>
              ))}
            </ContentFlexBox>
            <ContentFlexBox>
              {international.map((item, index) => (
                <ContentWrapper key={index}>
                  <img src={benchmarkingImgs[index]} alt="benchmarking" />
                  <ul>
                    {item.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ul>
                </ContentWrapper>
              ))}
            </ContentFlexBox>
          </ContentContainer>
        </Container>
      </Frame>
    </DownloadWrapper>
  );
};

export default Benchmarking;
