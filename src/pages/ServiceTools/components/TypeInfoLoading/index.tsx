import { Skeleton, SkeletonWrapper } from '@/components';
import React from 'react';

interface Props {
  height?: number;
}

const TypeInfoLoading = ({ height = 1300 }: Props) => {
  return (
    <SkeletonWrapper
      width="480px"
      height={`${height}px`}
      $isGray
      style={{ padding: '60px 30px' }}
    >
      <Skeleton width={420} height={253} $isGray={false} />
      <Skeleton
        width={62}
        height={24}
        $isGray={false}
        style={{ marginTop: 20 }}
      />
      <Skeleton width={305} height={24} $isGray={false} />
      <Skeleton width={305} height={24} $isGray={false} />
      <Skeleton
        width={38}
        height={24}
        $isGray={false}
        style={{ marginTop: 20 }}
      />
      <Skeleton width={403} height={24} $isGray={false} />
      <Skeleton width={378} height={24} $isGray={false} />
      <Skeleton
        width={38}
        height={24}
        $isGray={false}
        style={{ marginTop: 20 }}
      />
      <Skeleton width={403} height={24} $isGray={false} />
      <Skeleton width={378} height={24} $isGray={false} />
    </SkeletonWrapper>
  );
};

export default TypeInfoLoading;
