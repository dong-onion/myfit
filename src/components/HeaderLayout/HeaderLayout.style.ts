import { backArrow, backArrowHover } from '@/assets';
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
  width: 145px;
  height: 43px;
  object-fit: contain;
  padding: 10px 20px;
`;

export const BackArrow = styled.div`
  background-image: url(${backArrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 43px;
  height: 43px;
  left: 30px;
  top: 8.5px;
  cursor: pointer;

  &:hover {
    background-image: url(${backArrowHover});
  }
`;

export const OutletWrapper = styled.div`
  height: calc(100dvh - ${HEADER_HEIGHT});
`;
