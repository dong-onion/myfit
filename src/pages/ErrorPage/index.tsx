import { errorImg } from '@/assets';
import React from 'react';
import * as S from './ErrorPage.style';

const ErrorPage = () => {
  return (
    <>
      <S.Container>
        <img src={errorImg} alt="error" />
        <h1>정보를 불러오지 못했어요</h1>
        <h2>
          이 웹페이지를 표시하는 도중 문제가 발생했습니다. <br />
          일시적인 문제라면 <span>새로고침</span>을 해보세요.
        </h2>
      </S.Container>
    </>
  );
};

export default ErrorPage;
