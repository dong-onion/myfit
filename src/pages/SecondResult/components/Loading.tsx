import { HoldOn, Skeleton, SkeletonWrapper } from '@/components';
import Retry from '@/components/Retry/Retry';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loading = ({ refetch }: { refetch: any }) => {
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
        <HoldOn top={180} />
      ) : (
        <Retry
          top={180}
          refetch={refetch}
          setShowRetryButton={setShowRetryButton}
        />
      )}
      <SkeletonWrapper
        $isGray
        width="100%"
        height={452}
        style={{ display: 'flex' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            left: '21%',
            top: 120,
          }}
        >
          <Skeleton width={217} height={28} $isGray={false} />
          <Skeleton
            width={358}
            height={65}
            $isGray={false}
            style={{ marginTop: 10 }}
          />
          <Skeleton
            width={277}
            height={26}
            $isGray={false}
            style={{ marginTop: 51 }}
          />
          <Skeleton
            width={358}
            height={26}
            $isGray={false}
            style={{ marginTop: 10 }}
          />
        </div>
        <div style={{ position: 'absolute', right: '23%', top: 120 }}>
          <Skeleton width={452} height={325} $isGray={false} />
        </div>
      </SkeletonWrapper>
      <div
        style={{
          width: '100%',
          marginTop: 130,
          maxWidth: 1200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Skeleton width={164} height={46} />
        <Skeleton width={434} height={32} style={{ marginTop: 10 }}></Skeleton>
        <SkeletonWrapper
          width="100%"
          height={250}
          style={{ marginTop: 30, padding: 40 }}
          $isGray
        >
          <Skeleton width={996} height={24} $isGray={false} />
          <Skeleton
            width={1077}
            height={24}
            $isGray={false}
            style={{ marginTop: 13 }}
          />
          <Skeleton
            width={854}
            height={24}
            $isGray={false}
            style={{ marginTop: 13 }}
          />
        </SkeletonWrapper>
        <Skeleton width={164} height={46} style={{ marginTop: 130 }} />
        <Skeleton width={458} height={32} style={{ marginTop: 10 }} />
        <Skeleton width={910} height={22} style={{ marginTop: 30 }} />
        <div style={{ marginTop: 20, display: 'flex', gap: 24 }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <>
              <SkeletonWrapper
                $isGray
                width={384}
                height={384}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Skeleton
                  width={222}
                  height={24}
                  $isGray={false}
                  style={{ marginTop: 212 }}
                />
                <Skeleton
                  width={239}
                  height={24}
                  $isGray={false}
                  style={{ marginTop: 30 }}
                />
                <Skeleton
                  width={292}
                  height={24}
                  $isGray={false}
                  style={{ marginTop: 10 }}
                />
              </SkeletonWrapper>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Loading;
