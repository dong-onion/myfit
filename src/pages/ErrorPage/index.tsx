import { errorImg } from '@/assets';
import React from 'react';
import styled from 'styled-components';
import { HeaderLayout } from '@/components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-80%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > img {
    width: 60px;
    height: 65px;
  }

  & > h1 {
    font-family: Pretendard-SemiBold;
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.005em;
    text-align: left;
    margin-top: 30px;

    color: ${({ theme }) => theme.color.gray[0]};
  }

  & > h2 {
    margin-top: 30px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.005em;
    text-align: center;

    color: ${({ theme }) => theme.color.gray[0]};

    & > span {
      font-family: Pretendard-Bold;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.005em;
      text-align: center;

      color: ${({ theme }) => theme.color.gray[0]};
    }
  }
`;

const ErrorPage = () => {
  return (
    <>
      <HeaderLayout />
      <Container>
        <img src={errorImg} alt="error" />
        <h1>정보를 불러오지 못했어요</h1>
        <h2>
          이 웹페이지를 표시하는 도중 문제가 발생했습니다. <br />
          일시적인 문제라면 <span>새로고침</span>을 해보세요.
        </h2>
      </Container>
    </>
  );
};

export default ErrorPage;
