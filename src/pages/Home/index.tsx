import React from 'react';
import { useNavigate } from 'react-router-dom';
import { arrowRight } from '@/assets';
import * as S from './Home.style';
import { ROUTES_PATH } from '@/utility/constants';

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(ROUTES_PATH.serviceRegistration);
  };
  return (
    <S.Container>
      <S.NavigateButton type="button" onClick={handleButtonClick}>
        <S.ButtonText>마켓핏 찾으러가기</S.ButtonText>
        <S.ButtonIcon src={arrowRight} alt="arrowRight" />
      </S.NavigateButton>
    </S.Container>
  );
};

export default Home;
