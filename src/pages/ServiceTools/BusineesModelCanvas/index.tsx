import React from 'react';
import Frame from '../components/Frame';
import {
  businessCanvasInfo,
  costStructureImg,
  problemImg,
  solutionImg,
  valuePropositionImg,
  competitiveAdvantageImg,
  customerGroupImg,
  kpiImg,
  revenueSource,
  channelImg,
  hyperClova,
} from '@/assets';
import styled from 'styled-components';
import ContentHeader from '../components/ContentHeader/indext';
import { useBusinessModelCanvas } from '@/hooks/useBusineesModelCanvas';
import Loading from './components/Loading';
import { SESSION_KEYS } from '@/utility/constants';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    'a b c d e'
    'a f c g e';
  gap: 14px;
  width: 100%;
  height: 724px;
  margin-top: 60px;

  & .grid {
    padding: 31px 21px;
    border: 1px solid #b8c3ff;
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 12px;
    padding: 31px 21px;
  }

  & ul {
    padding-left: 27px;
    margin-top: 10px;
  }

  & li {
    word-break: keep-all;
    white-space: pre-wrap;
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

const A = styled.div`
  grid-area: a;

  & img {
    width: 84px;
    height: 36px;
  }
`;

const B = styled.div`
  grid-area: b;

  & img {
    width: 105px;
    height: 36px;
  }
`;

const C = styled(A)`
  grid-area: c;
  & img {
    height: 36px;
    width: 125px;
  }
`;

const D = styled(A)`
  grid-area: d;
  & img {
    height: 36px;
    width: 125px;
  }
`;

const E = styled(A)`
  grid-area: e;
  & img {
    height: 36px;
    width: 104px;
  }
`;

const F = styled(A)`
  grid-area: f;
  & img {
    height: 36px;
    width: 125px;
  }
`;

const G = styled(A)`
  grid-area: g;
  & img {
    height: 36px;
    width: 84px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  height: 180px;
  margin-top: 14px;

  & div {
    padding: 25px 30px;
    border: 1px solid #b8c3ff;
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 12px;
    width: 100%;
  }

  & ul {
    margin-top: 10px;
    padding-left: 26px;
  }

  & li {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
  }

  & :nth-child(1) {
    > img {
      width: 125px;
      height: 36px;
    }
  }

  & :nth-child(2) {
    & img {
      width: 104px;
      height: 36px;
    }
  }
`;

const BusineesModelCanvas = () => {
  const serviceDescription = JSON.parse(
    sessionStorage.getItem(SESSION_KEYS.serviceDescription) || '',
  );
  const { data, isError, isLoading, refetch } =
    useBusinessModelCanvas(serviceDescription);
  const {
    problems = [''],
    alternatives = [''],
    customerSegments = [''],
    earlyAdopters = [''],
    valuePropositions = [''],
    highConcept = [''],
    solution = [''],
    channels = [''],
    revenueStreams = [''],
    costStructure = [''],
    keyMetrics = [''],
    competitiveAdvantage = [''],
  } = data || {};

  if (isLoading) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Frame src={businessCanvasInfo}>
      <ContentHeader />
      <GridContainer>
        <A className="grid">
          <img src={problemImg} />
          <ul>
            {problems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </A>
        <B className="grid">
          <img src={solutionImg} />
          <ul>
            {solution.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </B>
        <C className="grid">
          <img src={valuePropositionImg} />
          <ul>
            {valuePropositions.map((valueProposition, index) => (
              <li key={index}>{valueProposition}</li>
            ))}
          </ul>
        </C>
        <D className="grid">
          <img src={competitiveAdvantageImg} />
          <ul>
            {competitiveAdvantage.map((competitiveAdvantage, index) => (
              <li key={index}>{competitiveAdvantage}</li>
            ))}
          </ul>
        </D>
        <E className="grid">
          <img src={customerGroupImg} />
          <ul>
            {customerSegments.map((customerSegment, index) => (
              <li key={index}>{customerSegment}</li>
            ))}
          </ul>
        </E>
        <F className="grid">
          <img src={kpiImg} />
          <ul>
            {keyMetrics.map((keyMetric, index) => (
              <li key={index}>{keyMetric}</li>
            ))}
          </ul>
        </F>
        <G className="grid">
          <img src={channelImg} />
          <ul>
            {channels.map((channel, index) => (
              <li key={index}>{channel}</li>
            ))}
          </ul>
        </G>
      </GridContainer>
      <FlexContainer>
        <div>
          <img src={costStructureImg} />
          <ul>
            {costStructure.map((costStructure, index) => (
              <li key={index}>{costStructure}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={revenueSource} />
          <ul>
            {revenueStreams.map((revenueStream, index) => (
              <li key={index}>{revenueStream}</li>
            ))}
          </ul>
        </div>
      </FlexContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 20,
          width: '100%',
        }}
      >
        <img src={hyperClova} width={200} height={15} />
      </div>
    </Frame>
  );
};

export default BusineesModelCanvas;
