import React, { ReactNode } from 'react';
import styled from 'styled-components';
import TypeInfoSection from '../TypeInfoSection';
import { ServiceTool } from '@/utility/constants';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.bg[1]};
  width: 100%;
`;

export const ContentsSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.bg[1]};
  padding: 0 8%;
  height: 100%;
  min-height: 1301px; // 여기를 조절 하면 됨
`;

interface Prop {
  src: string;
  children: ReactNode;
  height?: number;
  type: ServiceTool;
}

const Frame = ({ src, children, height = 1301, type }: Prop) => {
  return (
    <Container>
      <TypeInfoSection type={type} height={height} src={src}></TypeInfoSection>
      <ContentsSection>{children}</ContentsSection>
    </Container>
  );
};

export default Frame;
