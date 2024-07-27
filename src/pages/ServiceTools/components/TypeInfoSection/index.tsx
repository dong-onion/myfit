import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  background-color: #f5f6fa;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 1px solid #b8c3ff;
  height: 100%;
`;

export const TypeInfoImg = styled.img<{ src: string }>`
  object-fit: contain;
  width: 100%;
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
