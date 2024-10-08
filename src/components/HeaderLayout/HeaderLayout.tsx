import React from 'react';
import { logo } from '@/assets';
import * as S from './HeaderLayout.style';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '@/utility/constants';
import ScrollToTop from '../ScrollToTop';

const HeaderLayout = ({ children }: { children?: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isServiceTools = pathname.startsWith('/tools/');
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate(ROUTES_PATH.home);
  };
  const handleBackArrow = () => {
    navigate(-1);
  };
  return (
    <>
      <S.Container>
        <S.Logo src={logo} alt="logo" onClick={handleClickLogo} />
        {isServiceTools && <S.BackArrow onClick={handleBackArrow} />}
      </S.Container>
      <S.OutletWrapper>
        <Outlet />
        {children}
        <ScrollToTop />
      </S.OutletWrapper>
    </>
  );
};

export default HeaderLayout;
