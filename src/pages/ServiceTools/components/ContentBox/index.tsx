import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #c9d1ff;
  width: 100%;
  border-radius: 12px;
  height: 173px;
  background-color: ${({ theme }) => theme.color.white[0]};
  color: ${({ theme }) => theme.color.gray[0]};
`;

interface Props {
  children?: ReactNode;
}

const ContentBox = ({ children, ...styles }: Props) => {
  return <Container {...styles}>{children}</Container>;
};

export default ContentBox;
