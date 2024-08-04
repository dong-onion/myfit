import styled from 'styled-components';

export const HoldOnImage = styled.img<{ top: number }>`
  top: ${({ top }) => `${top}px`};
  width: 330px;
  height: 250px;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;
