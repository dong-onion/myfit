import React from 'react';
import { BounceLoader, FadeLoader, PulseLoader } from 'react-spinners';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

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
      <BounceLoader size={50} color="#4865FF" />
    </SpinnerContainer>
  );
};

export default Spinner;
