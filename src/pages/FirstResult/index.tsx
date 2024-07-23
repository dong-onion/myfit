import React from 'react';
import { readingGlasses, strategy1, swotStrength } from '@/assets';
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
    top: 2px;
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

const FirstResult = () => {
  const a = [
    '학교 앞 핫도그 장사는 좋은 위치 선정과 저렴한 가격으로 학생들의 접근성이 용이하며, 다양한 종류의 핫도그를 제공할 수 있다는 장점이 있으나, 경쟁 업체와의 경쟁에서 우위를 점해야 하며, 계절에 따른 매출 변동 가능성과 인력 부족으로 인한 서비스 품질 저하 등의 문제점을 해결해야 한다.다양한 종류의 핫도그를 제공할 수 있다는 장점이 있으나, 경쟁 업체와의 경쟁에서 우위를 점해야 하며, 계절에 따른 매출 변동 가능성과 인력 부족으로 인한 서비스 품질 저하 등의 문제점을 해결해야 한다.다양한 종류의 핫도그를 제공할 수 있다는 장점이 있으나, 경쟁 업체와의 경쟁에서 우위를 점해야 하며, 계절에 따른 매출 변동 가능성과 인력 부족으로 인한 서비스 품질 저하 등의 문제점을 해결해야 한다.',
  ];

  const level = Number(JSON.parse(sessionStorage.getItem('level') || '0'));
  const serviceDescription = JSON.parse(
    sessionStorage.getItem('serviceDescription') || '',
  );

  console.log(
    parseSWOTAnalysis(
      '1. 강점\n- 학교 앞이라는 좋은 위치 선정\n- 저렴한 가격으로 학생들의 접근성 용이\n- 간단한 조리법으로 빠른 시간 내에 제공 가능\n2. 약점\n- 경쟁 업체 대비 차별화된 메뉴 부족\n- 위생 문제 발생 가능성 존재\n- 인력 부족으로 인한 서비스 품질 저하 우려\n3. 기회\n- 코로나19로 인해 배달 수요 증가 예상\n- SNS를 활용한 마케팅 효과 기대\n- 대학 축제 등 이벤트 참여 시 매출 증가 가능성\n4. 위협\n- 경기 침체로 인한 소비 심리 위축\n- 임대료 상승으로 인한 수익성 악화\n- 유사 업종의 등장으로 인한 경쟁 심화\n5. 분석 결과 요약\n학교 앞 핫도그 장사는 좋은 위치 선정과 저렴한 가격으로 학생들의 접근성이 용이하지만, 경쟁 업체 대비 차별화된 메뉴 부족과 위생 문제 발생 가능성 등이 약점으로 작용할 수 있다. \n코로나19로 인한 배달 수요 증가와 SNS를 활용한 마케팅 효과 등은 기회 요인이지만, 경기 침체와 임대료 상승, 유사 업종의 등장 등은 위협 요인으로 작용할 수 있다.\n6. 성장을 위한 전략과 진행 방향\n차별화된 메뉴 개발과 위생 관리 강화, 인력 확보 등을 통해 약점을 보완하고, 고객 만족도 향상을 통한 재구매율 증가와 SNS를 활용한 마케팅 강화, 다양한 이벤트 참여 등을 통해 기회를 적극적으로 활용해야 한다. 또한, 경기 침체와 임대료 상승 등의 위협 요인에 대한 대응책 마련과 지속적인 시장 조사를 통한 경쟁력 강화가 필요하다.',
    ),
  );

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

  return (
    <Container>
      <InnerContainer>
        <HeaderWrapper>
          <h2>서비스 SWOT 분석과 성장 전략을 제안해드려요!</h2>
          <span className="title">학교 앞 핫도그 장사&nbsp;</span>
          <span>분석 결과</span>
        </HeaderWrapper>
        <SummaryContainer>
          <SummaryWrapper>{a[0]}</SummaryWrapper>
        </SummaryContainer>
        <AnalysisTitle>SWOT 분석</AnalysisTitle>
        <AnalysisInfoContainer>
          <AnalysisInfoBox>
            <img src={swotStrength} alt="swotStrength" />
            <ul>
              <li>학교 앞이라는 위치적 이점 학교 앞이라는 위치적 이점 학교</li>
              <li>학교 앞이라는 위치적 이점 학교 앞이라는 위치적 이점 학교</li>
              <li>학교 앞이라는 위치적 이점</li>
              <li>학교 앞이라는 위치적 이점</li>
            </ul>
          </AnalysisInfoBox>
          <AnalysisInfoBox>약점</AnalysisInfoBox>
          <AnalysisInfoBox>기회</AnalysisInfoBox>
          <AnalysisInfoBox>위협</AnalysisInfoBox>
        </AnalysisInfoContainer>
        <ServiceGrowthstrategyTitle>
          서비스 성장 전략 제안
        </ServiceGrowthstrategyTitle>
        <StrategyWrapper>
          <Strategy>
            <img src={strategy1} alt="strategy1" />
            <span>
              고객의 요구사항을 파악하여 맞춤형 서비스를 제공해야 합니다.
            </span>
          </Strategy>
          <Strategy>
            <img src={strategy1} alt="strategy1" />
            <span>
              고객의 요구사항을 파악하여 맞춤형 서비스를 제공해야 합니다.
            </span>
          </Strategy>
          <Strategy>
            <img src={strategy1} alt="strategy1" />
            <span>
              고객의 요구사항을 파악하여 맞춤형 서비스를 제공해야 합니다.
            </span>
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
