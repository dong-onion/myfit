import React from 'react';
import * as S from './Skeleton.style';

interface Props {
  width: string | number;
  height: string | number;
  $isGray?: boolean;
  style?: React.CSSProperties;
}

const Skeleton = ({ width, height, $isGray = true, style }: Props) => {
  return (
    <S.SkeletonContainer
      $isGray={$isGray}
      width={width}
      height={height}
      style={style}
    />
  );
};

export default Skeleton;
