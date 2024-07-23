import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100dvw;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[4]};
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

export const OutletWrapper = styled.div`
  height: calc(100dvh - 60px);
`;
