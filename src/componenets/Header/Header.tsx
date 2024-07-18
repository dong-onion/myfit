import React from 'react';
import { backArrow, logo } from '@/assets';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.Container>
      <S.Logo src={logo} alt="logo" />
      <S.BackArrow src={backArrow} alt="backArrow" />
    </S.Container>
  );
};

export default Header;
