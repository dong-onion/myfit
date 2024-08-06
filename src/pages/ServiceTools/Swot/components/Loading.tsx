import { HoldOn, Skeleton } from '@/components';
import Retry from '@/components/Retry/Retry';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypeInfoLoading from '../../components/TypeInfoLoading';

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
        <div style={{ display: 'flex', gap: 24 }}>
          <Skeleton width="100%" height={333} style={{ marginTop: 72 }} />
          <Skeleton width="100%" height={333} style={{ marginTop: 72 }} />
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <Skeleton width="100%" height={333} style={{ marginTop: 24 }} />
          <Skeleton width="100%" height={333} style={{ marginTop: 24 }} />
        </div>
        <Skeleton width="100%" height={257} style={{ marginTop: 24 }} />
      </ContentWrapper>
    </Container>
  );
};

export default Loading;
