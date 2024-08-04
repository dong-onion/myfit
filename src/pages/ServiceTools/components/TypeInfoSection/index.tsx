import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 480px;
  background-color: #f5f6fa;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* height: 100%; */
`;

export const TypeInfoImg = styled.img<{ src: string }>`
  max-width: 480px;
  height: 100%;
`;

interface Props {
  src: string;
  height?: number;
}

const TypeInfoSection = ({ src, height = 1301 }: Props) => {
  return (
    <Container>
      <TypeInfoImg height={height} src={src}></TypeInfoImg>
    </Container>
  );
};

export default TypeInfoSection;
