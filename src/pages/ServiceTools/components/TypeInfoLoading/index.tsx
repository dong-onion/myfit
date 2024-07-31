import { Skeleton, SkeletonWrapper } from '@/components';
import React from 'react';

const TypeInfoLoading = () => {
  return (
    <SkeletonWrapper
      width="480px"
      height="100dvh"
      $isGray
      style={{ padding: '60px 30px' }}
    >
      <Skeleton width={420} height={253} $isGray={false} />
    </SkeletonWrapper>
  );
};

export default TypeInfoLoading;
