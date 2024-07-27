import React from 'react';
import { logo } from '@/assets';
import * as S from './HeaderLayout.style';
import { Outlet, useLocation } from 'react-router-dom';

const HeaderLayout = () => {
  const { pathname } = useLocation();
  const isServiceTools = pathname.startsWith('/tools/');
  return (
    <>
      <S.Container>
        <S.Logo src={logo} alt="logo" />
        {isServiceTools && <S.BackArrow />}
      </S.Container>
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
    </>
  );
};

export default HeaderLayout;
