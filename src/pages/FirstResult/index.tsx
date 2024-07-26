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
import * as S from './FirstResult.style';
import { useSWOTAnalysis } from '@/hooks/useSwotAnalysis';
import { useNavigate } from 'react-router-dom';
import Loading from './components/Loading';
import { parseSWOTAnalysis } from '@/utility/utils';

const FirstResult = () => {
  const level = Number(JSON.parse(sessionStorage.getItem('level') || '0'));

  const serviceDescription = JSON.parse(
    sessionStorage.getItem('serviceDescription') || '',
  );

  const navigate = useNavigate();

  const { data, isLoading, isError } = useSWOTAnalysis(
    serviceDescription,
    level,
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const { strength, weakness, opportunity, threat, result, strategy } =
    data || {};
  // const dummy =
  //   '1. 강점\n- 저렴한 가격: 학생들의 주머니 사정을 고려하여 저렴한 가격으로 판매할 수 있습니다.\n- 빠른 조리 시간: 간단한 조리법으로 빠르게 핫도그를 제공할 수 있어 학생들의 대기 시간을 줄일 수 있습니다.\n- 다양한 메뉴: 기본적인 핫도그 외에도 다양한 토핑을 추가하여 선택의 폭을 넓힐 수 있습니다.\n\n2. 약점\n- 경쟁 업체 존재: 학교 앞에는 이미 많은 음식점이 존재하며, 이들과의 경쟁에서 우위를 점해야 합니다.\n- 위생 문제: 학생들이 주로 이용하는 만큼 위생 문제에 민감하므로 철저한 관리가 필요합니다.\n- 인력 부족: 혼자서 운영하기에는 어려움이 있을 수 있으므로 인력 확보가 필요합니다.\n\n3. 기회\n- 학생 수요 증가: 학교 주변 상권은 학생들의 수요가 많아 안정적인 매출을 기대할 수 있습니다.\n- SNS 마케팅 활용: SNS를 통해 홍보를 하면 더 많은 고객을 유치할 수 있습니다.\n- 배달 서비스 도입: 배달 서비스를 도입하면 매장 방문이 어려운 학생들도 쉽게 핫도그를 즐길 수 있습니다.\n\n4. 위협\n- 경기 침체: 경기가 침체되면 소비자들의 지출이 감소하여 매출에 영향을 미칠 수 있습니다.\n- 식재료 가격 상승: 식재료 가격이 상승하면 수익성이 악화될 수 있습니다.\n- 날씨 영향: 날씨가 좋지 않으면 학생들의 외출이 줄어 매출이 감소할 수 있습니다.\n\n5. 분석 결과 요약 :학생들을 대상으로 하는 핫도그 장사는 저렴한 가격과 빠른 조리 시간, 다양한 메뉴 등의 강점을 가지고 있지만, 경쟁 업체와의 경쟁, 위생 문제, 인력 부족 등의 약점이 존재한다. 또한, 학생 수요 증가, SNS 마케팅 활용, 배달 서비스 도입 등의 기회가 있으나 경기 침체, 식재료 가격 상승, 날씨 영향 등의 위협 요인도 존재한다.\n\n6. 성장을 위한 전략과 진행 방향\n- 차별화된 메뉴 개발: 경쟁 업체와는 차별화된 메뉴를 개발하여 학생들의 입맛을 사로잡아야 한다.\n- 위생 관리 강화: 정기적인 청소와 소독을 실시하고, 식재료의 신선도를 유지하여 위생 문제를 예방해야 한다.\n- 인력 확보: 아르바이트생을 고용하거나 가족의 도움을 받아 인력 부족 문제를 해결해야 한다.\n- 적극적인 마케팅: SNS를 활용하여 적극적으로 마케팅을 하고, 쿠폰이나 이벤트 등을 통해 고객 유치에 힘써야 한다.\n- 배달 서비스 도입: 배달 서비스를 도입하여 매장 방문이 어려운 학생들도 쉽게 핫도그를 즐길 수 있도록 해야 한다.';
  // const { strength, weakness, opportunity, threat, result, strategy } =
  //   parseSWOTAnalysis(dummy) || {};
  // console.log(dummy);
  // console.log(parseSWOTAnalysis(dummy));

  const swotData = [
    { imgSrc: swotStrength, alt: 'swotStrength', data: strength },
    { imgSrc: swotWeakness, alt: 'swotWeakness', data: weakness },
    { imgSrc: swotOpportunity, alt: 'swotOpportunity', data: opportunity },
    { imgSrc: swotThreat, alt: 'swotThreat', data: threat },
  ];

  const handleClickTestNavButton = () => {
    navigate('/type');
  };

  return (
    <S.Container>
      <S.InnerContainer>
        <S.HeaderWrapper>
          <h2>서비스 SWOT 분석과 성장 전략을 제안해드려요!</h2>
          <span className="title">{serviceDescription}&nbsp;</span>
          <span>분석 결과</span>
        </S.HeaderWrapper>
        <S.SummaryContainer>
          <S.SummaryWrapper>{result}</S.SummaryWrapper>
        </S.SummaryContainer>
        <S.AnalysisTitle>SWOT 분석</S.AnalysisTitle>
        <S.AnalysisInfoContainer>
          {swotData.map((item, index) => (
            <S.AnalysisInfoBox key={index}>
              <img src={item.imgSrc} alt={item.alt} />
              <ul>
                {item.data &&
                  item.data.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </S.AnalysisInfoBox>
          ))}
        </S.AnalysisInfoContainer>
        <S.ServiceGrowthstrategyTitle>
          서비스 성장 전략 제안
        </S.ServiceGrowthstrategyTitle>
        <S.StrategyWrapper>
          <S.Strategy>
            <img src={strategy1} alt="strategy1" />
            <span>{strategy?.[0]}</span>
          </S.Strategy>
          <S.Strategy>
            <img src={strategy2} alt="strategy2" />
            <span>{strategy?.[1]}</span>
          </S.Strategy>
          <S.Strategy>
            <img src={strategy3} alt="strategy3" />
            <span>{strategy?.[2]}</span>
          </S.Strategy>
        </S.StrategyWrapper>
      </S.InnerContainer>
      <S.TestNavBar>
        <S.TestNavTitle>
          내 서비스의 <span className="bold">부족한 점</span>은 뭘까?
        </S.TestNavTitle>
        <S.TestNavButton type="button" onClick={handleClickTestNavButton}>
          취약점 파악하기 <S.ButtonIcon src={readingGlasses} />{' '}
        </S.TestNavButton>
      </S.TestNavBar>
    </S.Container>
  );
};

export default FirstResult;
