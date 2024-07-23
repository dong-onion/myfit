import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '@/utility/constants';
import { lessThan1Minute } from '@/assets';
import { Button } from '@/componenets';
import { useNavigate } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.primary[0]};
  margin-top: calc((100dvh - ${HEADER_HEIGHT}) * 0.24);
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: -0.005em;
`;

export const MainDescripiton = styled.h1`
  color: ${({ theme }) => theme.color.primary[0]};
  margin-top: 32px;
  line-height: 24px;
  font-size: 65px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const SubDescripiton1 = styled.h2`
  margin-top: 60px;
  color: ${({ theme }) => theme.color.gray[0]};
  font-size: 32px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.005em;
`;
export const SubDescripiton2 = styled.img`
  margin-top: 14px;
  width: 175px;
  height: 49px;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const StartButton = styled(Button)`
  margin-top: 100px;
  width: 323px;
  height: 78px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.primary[0]};
`;

export const ButtonText = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.color.white[0]};
  letter-spacing: -0.002em;
`;

const SurveyStart = () => {
  const navigate = useNavigate();
  const handleClickStartButton = () => {
    navigate('/test');
  };
  return (
    <Container>
      <Title>창업 유형 테스트</Title>
      <MainDescripiton>나는 어떤 창업가일까?</MainDescripiton>
      <SubDescripiton1>
        유형 점검을 위한 몇가지 질문을 시작할게요
      </SubDescripiton1>
      <SubDescripiton2 src={lessThan1Minute} />
      <StartButton type="button" onClick={handleClickStartButton}>
        <ButtonText>시작하기</ButtonText>
      </StartButton>
    </Container>
  );
};

export default SurveyStart;
