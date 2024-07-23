import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const TitleWrapper = styled.div`
  width: 180px;
  height: 40px;
  background-color: #d4e2f4;
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.08px;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const MainDescripiton = styled.h1`
  font-size: 60px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.primary[0]};
  margin-top: 36px;
  line-height: 24px;
`;

export const SubDescripiton1 = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 89px;
  color: ${({ theme }) => theme.color.gray[0]};
`;
export const SubDescripiton2 = styled.h2`
  margin-top: 24px;
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const StartButton = styled.button`
  margin-top: 91px;
  width: 282px;
  height: 78px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary[0]};
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.color.white[0]};
  border: none;
`;

const SurveyStart = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>창업 유형 테스트</Title>
      </TitleWrapper>
      <MainDescripiton>나는 어떤 창업가일까?</MainDescripiton>
      <SubDescripiton1>
        유형 점검을 위한 몇가지 질문을 시작할게요
      </SubDescripiton1>
      <SubDescripiton2>16문항 / 약 1분 소요</SubDescripiton2>
      <StartButton>시작하기</StartButton>
    </Container>
  );
};

export default SurveyStart;
