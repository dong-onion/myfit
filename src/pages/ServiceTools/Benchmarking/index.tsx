import React from 'react';
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

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;

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
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  /* height: 1462px; */
`;

export const ContentWrapper = styled.div`
  height: 150px;
  padding: 25px 30px;
  background-color: ${({ theme }) => theme.color.white[0]};
  border-radius: 12px;
  border: 1px solid #b8c3ff;
  & ul {
    margin: 15px;
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

  return (
    <Frame src={benchmarkingInfo} height={1916}>
      <ContentHeader />
      <Container>
        <TitleContainer>
          <DomesticTitleWrapper>국내 경쟁사 분석</DomesticTitleWrapper>
          <OverseasTitleWrapper>해외 경쟁사 분석</OverseasTitleWrapper>
        </TitleContainer>
        <ContentContainer>
          {Array.from({ length: 18 }).map((_, index) => (
            <ContentWrapper key={index}>
              <img src={benchmarkingImgs[Math.floor(index / 2)]} />
              <ul>
                <li>국내 1위 핫도그 프랜차이즈 브랜드</li>
                <li>2023년 기준 매장 수 1,500개</li>
              </ul>
            </ContentWrapper>
          ))}
        </ContentContainer>
      </Container>
    </Frame>
  );
};

export default Benchmarking;
