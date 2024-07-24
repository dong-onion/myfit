import React from 'react';
import { backArrow, logo } from '@/assets';
import * as S from './HeaderLayout.style';
import { Outlet } from 'react-router-dom';

const HeaderLayout = () => {
  return (
    <>
      <S.Container>
        <S.Logo src={logo} alt="logo" />
        <S.BackArrow src={backArrow} alt="backArrow" />
      </S.Container>
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
    </>
  );
};

export default HeaderLayout;
