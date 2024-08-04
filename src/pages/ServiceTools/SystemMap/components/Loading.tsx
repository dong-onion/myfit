import { HoldOn, Skeleton } from '@/components';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypeInfoLoading from '../../components/TypeInfoLoading';
import Retry from '@/components/Retry/Retry';
import {
  skeletonCurvedImg1,
  skeletonCurvedImg2,
  skeletonCurvedImg3,
  skeletonCurvedImg4,
} from '@/assets';

export const Container = styled.div`
  width: 100%;
  height: 1364px;
  display: flex;
`;

export const ContentContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: 0 4%;
`;

export const MapContainer = styled.div`
  height: 988px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 63px;
`;

export const MapWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  gap: 3%;
`;

export const MapWrapper2 = styled(MapWrapper1)`
  gap: 1.2%;
`;

export const MapWrapper3 = styled(MapWrapper1)`
  align-items: flex-start;
`;

export const ContentBox1 = styled(Skeleton)`
  width: 36%;
  height: 280px;
  border-radius: 12px;
`;
export const ContentBox2 = styled(ContentBox1)`
  height: 400px;
  width: 30%;
`;
export const ContentBox3 = styled(ContentBox1)`
  height: 400px;
  width: 36%;
`;

export const CurveImage = styled.img`
  width: 17%;
  max-height: 190px;
`;

const Loading = ({ refetch }: { refetch?: any }) => {
  const [showRetryButtton, setShowRetryButton] = useState<boolean>(false);
  useEffect(() => {
    const timer: NodeJS.Timeout | undefined = setTimeout(() => {
      setShowRetryButton(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Container>
      {!showRetryButtton ? (
        <HoldOn top={167} />
      ) : (
        <Retry
          top={167}
          refetch={refetch}
          setShowRetryButton={setShowRetryButton}
        />
      )}
      <TypeInfoLoading height={1364} />
      <ContentContainer>
        <Skeleton width={600} height={44} style={{ marginTop: 60 }} />
        <MapContainer>
          <MapWrapper1>
            <CurveImage src={skeletonCurvedImg1} />
            <ContentBox1 width={'36%'} height={280} />
            <CurveImage src={skeletonCurvedImg2} />
          </MapWrapper1>
          <MapWrapper2>
            <ContentBox2 width={'30%'} height={400} />
            <ContentBox3 width={'36%'} height={400} />
            <ContentBox2 width={'30%'} height={400} />
          </MapWrapper2>
          <MapWrapper3>
            <CurveImage src={skeletonCurvedImg3} />
            <ContentBox1 width={'36%'} height={280} />
            <CurveImage src={skeletonCurvedImg4} />
          </MapWrapper3>
        </MapContainer>
      </ContentContainer>
    </Container>
  );
};

export default Loading;
