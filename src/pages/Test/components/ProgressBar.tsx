import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8%;
  background-color: ${({ theme }) => theme.color.gray[5]};
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  width: 100%;
`;

const BarContainer = styled.div`
  flex-grow: 1;
  height: 16px;
  background-color: #ccc;
  border-radius: 500px;
  overflow: hidden;
`;

const Bar = styled.div<{ $progress: number }>`
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary[0]};
  transition: width 0.3s;
  width: ${({ $progress }) => ($progress / 16) * 100}%;
`;

const ProgressText = styled.span`
  margin-left: 10px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.color.gray[0]};
`;

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  return (
    <ProgressBarContainer>
      <BarWrapper>
        <BarContainer>
          <Bar $progress={progress} />
        </BarContainer>
        <ProgressText>{progress} / 16</ProgressText>
      </BarWrapper>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
