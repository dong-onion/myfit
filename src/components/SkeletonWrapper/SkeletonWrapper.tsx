import React from 'react';
import * as S from './SkeletonWrapper.style';

interface Props {
  $isGray?: boolean;
  children: React.ReactNode;
  width: string | number;
  height: string | number;
  style?: React.CSSProperties;
}

const SkeletonWrapper = ({
  width,
  height,
  $isGray = false,
  children,
  style = {},
}: Props) => {
  return (
    <S.SkeletonWrapper
      style={style}
      width={width}
      height={height}
      $isGray={$isGray}
    >
      {children}
    </S.SkeletonWrapper>
  );
};

export default SkeletonWrapper;
