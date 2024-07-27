import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  background-color: #f5f6fa;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

export const TypeInfoImg = styled.img<{ src: string }>`
  max-width: 480px;
`;

const TypeInfoSection = ({ src }: { src: string }) => {
  return (
    <Container>
      <TypeInfoImg src={src}></TypeInfoImg>
    </Container>
  );
};

export default TypeInfoSection;
