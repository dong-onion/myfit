import React from 'react';
import * as S from './HoldOn.style';
import { holdOnImg } from '@/assets';

const HoldOn = ({ top }: { top: number }) => {
  return <S.HoldOnImage src={holdOnImg} top={top} />;
};

export default HoldOn;
