import React from 'react';
import { useNavigate } from 'react-router-dom';
import { arrowRight, mainBg } from '@/assets';
import * as S from './Home.style';
import { ROUTES_PATH } from '@/utility/constants';
import usePreloadImage from '@/hooks/usePreloadImage';

const Home = () => {
  const navigate = useNavigate();
  const { imagesLoaded } = usePreloadImage([mainBg]);
  const handleButtonClick = () => {
    navigate(ROUTES_PATH.serviceRegistration);
  };
  return !imagesLoaded ? null : (
    <S.Container>
      <S.NavigateButton type="button" onClick={handleButtonClick}>
        <S.ButtonText>마켓핏 찾으러가기</S.ButtonText>
        <S.ButtonIcon src={arrowRight} alt="arrowRight" />
      </S.NavigateButton>
    </S.Container>
  );
};

export default Home;
