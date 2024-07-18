import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100dvw;
  background-color: ${({ theme }) => theme.color.white};
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DescriptionHeader1 = styled.span`
  font-size: 60px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin-bottom: 62px;
`;

export const DescriptionHeader2 = styled.span`
  font-size: 60px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.color.blue};
`;

export const NavigateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  max-width: 370px;
  margin-top: 93px;
  height: 78px;
  border-radius: 8px;
  border-width: 0;
  background-color: ${({ theme }) => theme.color.blue};

  //todo : hover시 색깔 변경, style 파일 분리
  &:hover {
    background-color: black;
  }
`;

export const ButtonText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.color.white};
  position: relative;
  left: 7px;
`;

export const Test = styled.button``;
const Home = () => {
  return (
    <Container>
      <DescriptionHeader1>창업 아이템이 고민이라면</DescriptionHeader1>
      <DescriptionHeader2>나만의 마켓핏을 찾는 마이핏</DescriptionHeader2>
      <NavigateButton>
        <ButtonText>마켓핏 찾으러가기&nbsp;&nbsp; {`>`}</ButtonText>
      </NavigateButton>
    </Container>
  );
};

export default Home;
