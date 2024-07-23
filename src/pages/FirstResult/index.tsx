import React from 'react';
import {
  readingGlasses,
  strategy1,
  strategy2,
  strategy3,
  swotOpportunity,
  swotStrength,
  swotThreat,
  swotWeakness,
} from '@/assets';
import styled from 'styled-components';
import { Button } from '@/componenets';
import { useSWOTAnalysis } from '@/hooks/useSwotAnalysis';
import { parseSWOTAnalysis } from '@/utility/utils';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bg[0]};
  display: flex;
  justify-content: center;
  padding-bottom: 240px;
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 81px;
  & > h2 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.005em;
    color: ${({ theme }) => theme.color.gray[0]};
    margin-bottom: 15px;
  }
  & > span {
    font-family: Pretendard;
    font-size: 44px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.018em;
    color: ${({ theme }) => theme.color.gray[0]};
  }
  & > span.title {
    color: ${({ theme }) => theme.color.primary[0]};
  }
`;

export const SummaryContainer = styled.div`
  /* padding: 30px 30px 35px 30px;  */
  padding: 32.5px;
  max-width: 1200px;
  flex-grow: 1;
  height: 176px;
  background-color: ${({ theme }) => theme.color.primary[6]};
  border-radius: 12px;
`;

export const SummaryWrapper = styled.div`
  word-break: keep-all;
  white-space: pre-wrap;
  overflow: auto; /* 넘치는 내용 숨기기 */
  font-size: 22px;
  font-weight: 500;
  line-height: 35.2px;
  width: 100%;
  height: 100%;
  letter-spacing: -0.005em;
`;

export const AnalysisTitle = styled.h3`
  margin-top: 81px;
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.012em;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const AnalysisInfoContainer = styled.div`
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;
  gap: 24px;
`;

export const AnalysisInfoBox = styled.div`
  width: 588px;
  height: 275px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white[0]};
  overflow: auto;
  padding-top: 38px;
  padding-left: 30px;
  padding-right: 30px;

  & > img {
    width: 84px;
    height: 37px;
  }

  & > ul {
    margin-top: 20px;
    padding-left: 28px;
  }

  & li {
    font-size: 22px;
    font-weight: 500;
    line-height: 35.2px;
    letter-spacing: -0.005em;
  }
`;

export const ServiceGrowthstrategyTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.012em;
  color: ${({ theme }) => theme.color.gray[0]};
  margin-top: 80px;
  margin: 30px;
`;

export const StrategyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Strategy = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white[0]};
  padding: 32px 40px;
  align-items: center;

  & > img {
    width: 82px;
    height: 36px;
  }

  & > span {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.005em;
    color: ${({ theme }) => theme.color.gray[0]};
    margin-left: 20px;
    position: relative;
    top: 2.5px;
  }
`;

export const SurveyNavBar = styled.div`
  width: 100%;
  height: 120px;
  background: linear-gradient(270deg, #6f56ff 0%, #4865ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export const SurveyNavTitle = styled.span`
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -0.012em;
  color: ${({ theme }) => theme.color.white[0]};

  & .bold {
    font-weight: 700;
  }
  margin-right: 30px;
`;

export const SurveyNavButton = styled(Button)`
  width: 224px;
  height: 56px;
  background-color: ${({ theme }) => theme.color.white[0]};
  border-radius: 8px;
  gap: 10px;
  color: ${({ theme }) => theme.color.primary[0]};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.002em;

  &:hover {
    box-shadow: 0px 4px 10px 0px #00000066;
    border: 1px solid ${({ theme }) => theme.color.white[0]};
    color: ${({ theme }) => theme.color.white[0]};
  }
`;

export const ButtonIcon = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  bottom: 1px;
`;

const dummyData =
  '1. 강점\n- 학교 앞이라는 좋은 위치 선정\n- 저렴한 가격으로 학생들의 접근성 용이\n- 다양한 종류의 핫도그 제공 가능\n\n2. 약점\n- 경쟁 업체 대비 차별화된 맛이나 메뉴 부족\n- 조리 시간이 오래 걸려 대기 시간이 길어질 수 있음\n- 위생 문제 발생 가능성 존재\n\n3. 기회\n- 코로나19 이후 배달 음식 수요 증가\n- SNS를 활용한 마케팅 효과 기대\n- 학교 축제나 행사 등 이벤트 참여 가능\n\n4. 위협\n- 임대료 상승으로 인한 비용 부담 증가\n- 경기 침체로 인한 소비 심리 위축\n- 식품 안전 이슈 발생 시 매출 감소 우려\n\n5. 분석 결과 요약\n학교 앞 핫도그 장사는 좋은 위치 선정과 저렴한 가격으로 학생들의 접근성이 용이하지만, 경쟁 업체 대비 차별화된 맛이나 메뉴 부족, 조리 시간이 오래 걸리는 등의 약점이 존재한다. 또한, 코로나19 이후 배달 음식 수요 증가, SNS를 활용한 마케팅 효과 기대, 학교 축제나 행사 등 이벤트 참여 가능 등의 기회가 있지만, 임대료 상승으로 인한 비용 부담 증가, 경기 침체로 인한 소비 심리 위축, 식품 안전 이슈 발생 시 매출 감소 우려 등의 위협 요인도 존재한다.\n\n6. 성장을 위한 전략과 진행 방향\n경쟁 업체와의 차별화를 위해 새로운 메뉴 개발 및 기존 메뉴 개선이 필요하다. 조리 시간 단축을 위한 조리 시스템 개선과 위생 문제 예방을 위한 철저한 위생 관리가 필요하다. 그리고 SNS를 활용한 마케팅 강화와 학교 축제나 행사 등 이벤트 참여를 통해 고객 유치 노력이 필요하며, 임대료 상승에 대비하여 수익성 향상 방안 모색해야 한다. 이를 위해서는 고객 만족도 조사를 실시하여 고객의 요구사항을 파악하고, 이를 반영한 서비스 개선이 필요하다.';

const FirstResult = () => {
  const level = Number(JSON.parse(sessionStorage.getItem('level') || '0'));
  const serviceDescription = JSON.parse(
    sessionStorage.getItem('serviceDescription') || '',
  );

  const {
    strength = [],
    weakness = [],
    opportunity = [],
    threat = [],
    result = [],
    strategy = [],
  } = parseSWOTAnalysis(dummyData) ?? {};

  // const { data, isLoading, isError } = useSWOTAnalysis(
  //   '학교 앞 핫도그 장사',
  //   level,
  // );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error...</div>;
  // }

  console.log(strategy);

  const swotData = [
    { imgSrc: swotStrength, alt: 'swotStrength', data: strength },
    { imgSrc: swotWeakness, alt: 'swotWeakness', data: weakness },
    { imgSrc: swotOpportunity, alt: 'swotOpportunity', data: opportunity },
    { imgSrc: swotThreat, alt: 'swotThreat', data: threat },
  ];

  return (
    <Container>
      <InnerContainer>
        <HeaderWrapper>
          <h2>서비스 SWOT 분석과 성장 전략을 제안해드려요!</h2>
          <span className="title">{serviceDescription}&nbsp;</span>
          <span>분석 결과</span>
        </HeaderWrapper>
        <SummaryContainer>
          <SummaryWrapper>{result}</SummaryWrapper>
        </SummaryContainer>
        <AnalysisTitle>SWOT 분석</AnalysisTitle>
        <AnalysisInfoContainer>
          {swotData.map((item, index) => (
            <AnalysisInfoBox key={index}>
              <img src={item.imgSrc} alt={item.alt} />
              <ul>
                {item.data.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AnalysisInfoBox>
          ))}
        </AnalysisInfoContainer>
        <ServiceGrowthstrategyTitle>
          서비스 성장 전략 제안
        </ServiceGrowthstrategyTitle>
        <StrategyWrapper>
          <Strategy>
            <img src={strategy1} alt="strategy1" />
          </Strategy>
          <Strategy>
            <img src={strategy2} alt="strategy2" />
          </Strategy>
          <Strategy>
            <img src={strategy3} alt="strategy3" />
          </Strategy>
        </StrategyWrapper>
      </InnerContainer>
      <SurveyNavBar>
        <SurveyNavTitle>
          내 서비스의 <span className="bold">부족한 점</span>은 뭘까?
        </SurveyNavTitle>
        <SurveyNavButton type="button">
          취약점 파악하기 <ButtonIcon src={readingGlasses} />{' '}
        </SurveyNavButton>
      </SurveyNavBar>
    </Container>
  );
};

export default FirstResult;
