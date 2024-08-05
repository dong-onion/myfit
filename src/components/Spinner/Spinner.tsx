import React from 'react';
import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <BeatLoader size={20} color="#4FC0FE" />
    </SpinnerContainer>
  );
};

export default Spinner;
