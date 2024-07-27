import React, { ReactNode } from 'react';
import styled from 'styled-components';
import TypeInfoSection from '../TypeInfoSection';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.bg[1]};
  height: 1308px;
`;

export const ContentsSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.bg[1]};
  padding: 0 8%;
`;

interface Prop {
  src: string;
  children: ReactNode;
}

const Frame = ({ src, children }: Prop) => {
  return (
    <Container>
      <TypeInfoSection src={src}></TypeInfoSection>
      <ContentsSection>{children}</ContentsSection>
    </Container>
  );
};

export default Frame;
