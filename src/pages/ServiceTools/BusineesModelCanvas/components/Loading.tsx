import React, { useEffect, useState } from 'react';
import TypeInfoLoading from '../../components/TypeInfoLoading';
import styled from 'styled-components';
import { HoldOn, Skeleton } from '@/components';
import Retry from '@/components/Retry/Retry';

const Container = styled.div`
  width: 100%;
  height: 1301px;
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 8%;
  padding-right: 8%;
  height: 100%;
  width: 100%;
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
      <TypeInfoLoading />
      <ContentWrapper>
        <Skeleton width={600} height={44} style={{ marginTop: 60 }} />
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: 724,
            marginTop: 72,
            gap: 14,
          }}
        >
          <Skeleton width="20%" height={724} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              width: '20%',
            }}
          >
            <Skeleton width="100%" height={355} />
            <Skeleton width="100%" height={355} />
          </div>
          <Skeleton width="20%" height={724} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              width: '20%',
            }}
          >
            <Skeleton width="100%" height={355} />
            <Skeleton width="100%" height={355} />
          </div>
          <Skeleton width="20%" height={724} />
        </div>
        <div style={{ display: 'flex', width: '100%', gap: 14, marginTop: 14 }}>
          <Skeleton width="50%" height={180} />
          <Skeleton width="50%" height={180} />
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Loading;
