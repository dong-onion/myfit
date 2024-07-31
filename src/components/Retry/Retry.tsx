import React from 'react';
import styled from 'styled-components';
import { RetryBox, RetryButton } from '@/assets';

export const Container = styled.div<{ top: number }>`
  background-image: url(${RetryBox});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  top: ${({ top }) => `${top}px`};
  width: 330px;
  height: 300px;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

export const Btn = styled.div`
  width: 128px;
  height: 50px;
  position: absolute;
  left: 50%;
  bottom: 42px;
  transform: translateX(-50%);
  background-image: url(${RetryButton});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateX(-50%) scale(0.95);
  }
`;

const Retry = ({
  top,
  refetch,
  setShowRetryButton,
}: {
  top: number;
  refetch: any;
  setShowRetryButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleButtonClick = () => {
    refetch();
    setShowRetryButton(false);
  };
  return (
    <>
      <Container top={top}>
        <Btn onClick={handleButtonClick} />
      </Container>
    </>
  );
};

export default Retry;
