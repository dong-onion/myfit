import React from 'react';
import { backArrow, logo } from '@/assets';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100dvw;
  border-bottom: 1px solid #e5e5e5;
`;

export const Logo = styled.img`
  width: 73px;
  height: 24px;
`;

export const BackArrow = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 51px;
  top: 19px;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <BackArrow src={backArrow} alt="backArrow" />
    </Container>
  );
};

export default Header;
