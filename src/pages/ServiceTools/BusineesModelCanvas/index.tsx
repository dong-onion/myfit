import React, { useRef } from 'react';
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
import ContentHeader from '../components/ContentHeader/indext';
import { useBusinessModelCanvas } from '@/hooks/useBusineesModelCanvas';
import Loading from './components/Loading';
import usePreloadImage from '@/hooks/usePreloadImage';
import ErrorPage from '@/pages/ErrorPage';
import { useAccessControl } from '@/hooks/useAccessControl';
import * as S from './BusineesModelCanvas.style';

const BusineesModelCanvas = () => {
  const { level, serviceDescription } = useAccessControl();
  if (level === null || serviceDescription === null) {
    return <Loading />;
  }

  const downloadRef = useRef<HTMLDivElement>(null);

  const { imagesLoaded } = usePreloadImage([businessCanvasInfo]);

  const { data, isError, isLoading, refetch, isRefetching } =
    useBusinessModelCanvas(serviceDescription);
  const {
    problems = [''],
    customerSegments = [''],
    valuePropositions = [''],
    solution = [''],
    channels = [''],
    revenueStreams = [''],
    costStructure = [''],
    keyMetrics = [''],
    competitiveAdvantage = [''],
  } = data || {};

  if (isLoading || isRefetching) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return !imagesLoaded ? null : (
    <S.DownloadWrapper ref={downloadRef}>
      <Frame type="bcm" src={businessCanvasInfo}>
        <ContentHeader
          downloadRef={downloadRef}
          title="마이핏_비즈니스_모델_캔버스"
          refetch={refetch}
        />
        <S.GridContainer>
          <S.A className="grid">
            <img src={problemImg} />
            <ul>
              {problems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </S.A>
          <S.B className="grid">
            <img src={solutionImg} />
            <ul>
              {solution.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </S.B>
          <S.C className="grid">
            <img src={valuePropositionImg} />
            <ul>
              {valuePropositions.map((valueProposition, index) => (
                <li key={index}>{valueProposition}</li>
              ))}
            </ul>
          </S.C>
          <S.D className="grid">
            <img src={competitiveAdvantageImg} />
            <ul>
              {competitiveAdvantage.map((competitiveAdvantage, index) => (
                <li key={index}>{competitiveAdvantage}</li>
              ))}
            </ul>
          </S.D>
          <S.E className="grid">
            <img src={customerGroupImg} />
            <ul>
              {customerSegments.map((customerSegment, index) => (
                <li key={index}>{customerSegment}</li>
              ))}
            </ul>
          </S.E>
          <S.F className="grid">
            <img src={kpiImg} />
            <ul>
              {keyMetrics.map((keyMetric, index) => (
                <li key={index}>{keyMetric}</li>
              ))}
            </ul>
          </S.F>
          <S.G className="grid">
            <img src={channelImg} />
            <ul>
              {channels.map((channel, index) => (
                <li key={index}>{channel}</li>
              ))}
            </ul>
          </S.G>
        </S.GridContainer>
        <S.FlexContainer>
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
        </S.FlexContainer>
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
    </S.DownloadWrapper>
  );
};

export default BusineesModelCanvas;
