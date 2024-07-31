import styled, { keyframes } from 'styled-components';

interface Container {
  width: string | number;
  height: string | number;
  $isGray?: boolean;
}

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonContainer = styled.div<Container>`
  background: ${({ $isGray }) => ($isGray ? '#e4e4e4' : '#f6f7f8')};
  background-image: ${({ $isGray }) =>
    $isGray
      ? 'linear-gradient(to right, #e4e4e4 0%, #cfcfcf 20%, #e4e4e4 40%, #e4e4e4 100%)'
      : 'linear-gradient(to right, #f6f7f8 0%, #eaeaea 20%, #f6f7f8 40%, #f6f7f8 100%)'};
  background-repeat: no-repeat;
  background-size: 800px 800;
  display: inline-block;
  position: relative;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 8px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
`;
