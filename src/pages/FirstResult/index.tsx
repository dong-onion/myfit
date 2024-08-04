import React, { useEffect, useState } from 'react';
import {
  hyperClova,
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
import { useAccessControl } from '@/hooks/useAccessControl';

const FirstResult = () => {
  const navigate = useNavigate();
  const { isValidSession } = useAccessControl();
  if (!isValidSession) {
    return null;
  }

  const serviceDescription = JSON.parse(
    sessionStorage.getItem('serviceDescription') || '',
  );
  const level = Number(JSON.parse(sessionStorage.getItem('level') || '0'));

  const { data, isLoading, isError, refetch } = useSWOTAnalysis(
    serviceDescription,
    level,
  );

  if (isLoading) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    refetch();
  }

  const { strength, weakness, opportunity, threat, result, strategy } =
    data || {};

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
      {/* <S.InnerContainer>
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
            <S.AnalysisInfoBoxWrapper key={index}>
              <img src={item.imgSrc} alt={item.alt} />
              <S.AnalysisInfoBox>
                <ul>
                  {item.data &&
                    item.data.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </S.AnalysisInfoBox>
            </S.AnalysisInfoBoxWrapper>
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
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}
        >
          <img src={hyperClova} width={200} height={15} />
        </div>
      </S.InnerContainer>
      <S.TestNavBar>
        <S.TestNavTitle>
          내 서비스의 <span className="bold">부족한 점</span>은 뭘까?
        </S.TestNavTitle>
        <S.TestNavButton type="button" onClick={handleClickTestNavButton}>
          취약점 파악하기 <S.ButtonIcon src={readingGlasses} />{' '}
        </S.TestNavButton>
      </S.TestNavBar> */}
    </S.Container>
  );
};

export default FirstResult;
