import styled from 'styled-components';

interface SkeletonWrapperProps {
  $isGray: boolean;
  width: string | number;
  height: string | number;
  style: React.CSSProperties;
}
export const SkeletonWrapper = styled.div<SkeletonWrapperProps>`
  background-color: ${({ $isGray }) => ($isGray ? '#E4E4E4' : '#FFFFFF')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
`;
