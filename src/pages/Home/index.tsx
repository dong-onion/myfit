import React from 'react';
import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { arrowRight, mainBg } from '@/assets';
import { ROUTES_PATH } from '@/utility/constants';

export const Container = styled.div`
  width: 100%;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100dvh;
  /* justify-content: center;
  align-items: center;
  flex-direction: column; */
`;

// export const DescriptionHeader1 = styled.span`
//   font-size: 60px;
//   font-weight: 500;
//   font-family: 'Pretendard-Medium';
//   line-height: 24px;
//   letter-spacing: -0.3px;
//   margin-bottom: 62px;
// `;

// export const DescriptionHeader2 = styled.span`
//   font-size: 60px;
//   font-weight: 800;
//   font-family: 'Pretendard-ExtraBold';
//   line-height: 24px;
//   letter-spacing: -0.3px;
//   color: ${({ theme }) => theme.color.primary[0]};
// `;

export const NavigateButton = styled(Button)`
  width: 100%;
  max-width: 370px;
  height: 78px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 16.6%;
  bottom: 27%;
`;

export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ButtonText = styled.span`
  font-family: Pretendard-SemiBold;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.002em;
  text-align: center;
  color: ${({ theme }) => theme.color.white[0]};
`;

export const Test = styled.button``;
const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(ROUTES_PATH.serviceRegistration);
  };
  return (
    <Container>
      {/* <DescriptionHeader1>창업 아이템이 고민이라면</DescriptionHeader1>
      <DescriptionHeader2>나만의 마켓핏을 찾는 마이핏</DescriptionHeader2> */}
      <NavigateButton type="button" onClick={handleButtonClick}>
        <ButtonText>마켓핏 찾으러가기</ButtonText>
        <ButtonIcon src={arrowRight} alt="arrowRight" />
      </NavigateButton>
    </Container>
  );
};

export default Home;
