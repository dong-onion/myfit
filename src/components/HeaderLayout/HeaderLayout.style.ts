import { HEADER_HEIGHT } from '@/utility/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${HEADER_HEIGHT};
  width: 100dvw;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[4]};
  position: relative;
  z-index: 1000;
`;

export const Logo = styled.img`
  width: 105px;
  height: 23px;
  object-fit: contain;
`;

export const BackArrow = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 51px;
  top: 19px;
`;

export const OutletWrapper = styled.div`
  height: calc(100dvh - ${HEADER_HEIGHT});
`;
