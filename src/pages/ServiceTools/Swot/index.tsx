import React from 'react';
import { useAccessControl } from '@/hooks/useAccessControl';
import { useNavigate } from 'react-router-dom';
import { useSWOTAnalysis } from '@/hooks/useSwotAnalysis';
import {
  swotInfo,
  swotOpportunity,
  swotStrength,
  swotSuggestion,
  swotThreat,
  swotWeakness,
} from '@/assets';
import Frame from '../components/Frame';
import ContentHeader from '../components/ContentHeader/indext';
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

export const AnalysisInfoContainer = styled.div`
  display: grid;
  margin-top: 60px;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const AnalysisInfoBoxWrapper = styled.div`
  width: 100%;
  height: 333px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white[0]};
  padding: 40px 30px;
  overflow: hidden;
  border: 1px solid #b8c3ff;
  & img {
    width: 83px;
    height: 36px;
    margin-bottom: 20px;
  }
`;

export const AnalysisInfoBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  word-break: keep-all;
  white-space: pre-wrap;
  overflow: hidden;
  & ul {
    padding-left: 28px;
  }

  & li {
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: left;
  }
`;

export const DirectionSuggestionsWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  padding: 40px 36px;
  height: 257px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white[0]};
  border: 1px solid #b8c3ff;

  & img {
    width: 120px;
    height: 36px;
  }

  & ul {
    padding-left: 28px;
  }

  & li {
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
  }
`;

const Swot = () => {
  const { level, serviceDescription } = useAccessControl();

  if (level === null || serviceDescription === null) {
    return <Loading />;
  }

  const { data, isLoading, isError, refetch, isRefetching } = useSWOTAnalysis(
    serviceDescription,
    level,
  );

  if (isLoading || isRefetching) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    refetch();
  }

  const {
    strength = [],
    weakness = [],
    opportunity = [],
    threat = [],
    strategy = [],
  } = data || {};

  const swotData = [
    { imgSrc: swotStrength, alt: 'swotStrength', data: strength },
    { imgSrc: swotWeakness, alt: 'swotWeakness', data: weakness },
    { imgSrc: swotOpportunity, alt: 'swotOpportunity', data: opportunity },
    { imgSrc: swotThreat, alt: 'swotThreat', data: threat },
  ];

  return (
    <Frame src={swotInfo}>
      <ContentHeader refetch={refetch} />
      <Container>
        <AnalysisInfoContainer>
          {swotData.map((item, index) => (
            <AnalysisInfoBoxWrapper key={index}>
              <img src={item.imgSrc} alt={item.alt} />
              <AnalysisInfoBox>
                <ul>
                  {item.data &&
                    item.data.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </AnalysisInfoBox>
            </AnalysisInfoBoxWrapper>
          ))}
        </AnalysisInfoContainer>
        <DirectionSuggestionsWrapper>
          <img src={swotSuggestion} />
          <ul>
            {strategy.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </DirectionSuggestionsWrapper>
      </Container>
    </Frame>
  );
};

export default Swot;
