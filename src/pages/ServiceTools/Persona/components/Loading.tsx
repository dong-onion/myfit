import React, { useEffect, useState } from 'react';
import TypeInfoLoading from '../../components/TypeInfoLoading';
import styled from 'styled-components';
import { HoldOn, Skeleton } from '@/components';
import Retry from '@/components/Retry/Retry';

export const Container = styled.div`
  width: 100%;
  height: 1301px;
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding-left: 8%;
  padding-right: 8%;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
        <Skeleton width="100%" height={116} style={{ marginTop: 72 }} />
        <Skeleton width="100%" height={171} style={{ marginTop: 14 }} />
        <div style={{ display: 'flex', gap: 14, marginTop: 14, width: '100%' }}>
          <Skeleton width="50%" height={173} />
          <Skeleton width="50%" height={173} />
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 14, width: '100%' }}>
          <Skeleton width="50%" height={173} />
          <Skeleton width="50%" height={173} />
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 14, width: '100%' }}>
          <Skeleton width="50%" height={173} />
          <Skeleton width="50%" height={173} />
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Loading;
