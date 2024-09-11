import { HoldOn, Skeleton } from '@/components';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypeInfoLoading from '../../components/TypeInfoLoading';
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
    }, 59999);

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
        <div style={{ display: 'flex', marginTop: 72, gap: '0.7%' }}>
          <Skeleton width="9%" height={105} style={{ marginRight: '1%' }} />
          <Skeleton width="18%" height={105} />
          <Skeleton width="18%" height={105} />
          <Skeleton width="18%" height={105} />
          <Skeleton width="18%" height={105} />
          <Skeleton width="18%" height={105} />
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            style={{ display: 'flex', marginTop: 14, gap: '0.7%' }}
          >
            <Skeleton width="9%" height={150} style={{ marginRight: '1%' }} />
            <Skeleton width="18%" height={150} />
            <Skeleton width="18%" height={150} />
            <Skeleton width="18%" height={150} />
            <Skeleton width="18%" height={150} />
            <Skeleton width="18%" height={150} />
          </div>
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default Loading;
