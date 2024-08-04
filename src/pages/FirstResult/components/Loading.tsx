import React, { useEffect, useState } from 'react';
import * as S from '../FirstResult.style';
import { HoldOn, Skeleton, SkeletonWrapper } from '@/components';
import Retry from '@/components/Retry/Retry';

const Loading = ({ refetch }: { refetch?: any }) => {
  const [showRetryButtton, setShowRetryButton] = useState<boolean>(false);
  useEffect(() => {
    const timer: NodeJS.Timeout | undefined = setTimeout(() => {
      setShowRetryButton(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 225,
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200 }}>
        {!showRetryButtton ? (
          <HoldOn top={203} />
        ) : (
          <Retry
            top={203}
            refetch={refetch}
            setShowRetryButton={setShowRetryButton}
          />
        )}
        <S.HeaderWrapper>
          <Skeleton width={612} height={28} style={{ marginBottom: 20 }} />
          <Skeleton width={605} height={40} />
        </S.HeaderWrapper>
        <SkeletonWrapper
          width={1200}
          height={176}
          style={{ padding: 32.5 }}
          $isGray
        >
          <Skeleton width={996} height={24} $isGray={false} />
          <Skeleton width={1077} height={24} $isGray={false} />
        </SkeletonWrapper>
        <Skeleton
          width={155}
          height={32}
          style={{ marginTop: 32, marginBottom: 30 }}
        />
        <S.AnalysisInfoContainer>
          {[1, 2, 3, 4].map((item, index) => (
            <SkeletonWrapper
              key={index}
              width={588}
              height={344}
              style={{ padding: '41px 31px' }}
              $isGray
            >
              <Skeleton width={82} height={35} $isGray={false} />
              <Skeleton
                width={467}
                height={22}
                style={{ marginTop: 19, marginBottom: 12 }}
                $isGray={false}
              />
              <Skeleton width={379} height={22} $isGray={false} />
            </SkeletonWrapper>
          ))}
          <Skeleton
            width={368}
            height={32}
            style={{ marginTop: 80, marginBottom: 40 }}
          />
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonWrapper
              key={index}
              width={1200}
              height={100}
              style={{
                padding: '32px 40px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
              }}
              $isGray
            >
              <Skeleton width={82} height={36} $isGray={false} />
              <Skeleton width={751} height={20} $isGray={false} />
            </SkeletonWrapper>
          ))}
        </S.AnalysisInfoContainer>
      </div>
    </div>
  );
};

export default Loading;
