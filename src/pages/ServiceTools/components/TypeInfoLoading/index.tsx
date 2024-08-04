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
    </SkeletonWrapper>
  );
};

export default TypeInfoLoading;
