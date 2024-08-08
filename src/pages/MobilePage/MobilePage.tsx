import { mobileBackground, mobileImg, mobileLogo } from '@/assets';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;

  & h1 {
    font-family: Pretendard-Bold;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.005em;
    text-align: center;
  }

  & h2 {
    font-family: Pretendard-Medium;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.002em;
    text-align: center;
    margin-top: 43px;
    margin-bottom: 10px;
  }
`;

export const Logo = styled.img`
  width: 86px;
  height: 19px;
  object-fit: contain;
  align-self: flex-start;
  margin-top: 64px;
  margin-bottom: 46px;
`;

export const ContentImg = styled.img`
  width: 328px;
  height: 213px;
  margin-top: 40px;
`;

export const CopyButton = styled.div`
  width: 327px;
  height: 59px;
  background-color: ${({ theme }) => theme.color.primary[0]};
  color: ${({ theme }) => theme.color.white[0]};
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.002em;
  text-align: center;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const MobilePage = () => {
  const handleLinkCopy = () => {
    navigator.clipboard.writeText(document.location.href);
    alert('링크가 복사되었습니다!');
  };
  return (
    <Container>
      <Logo src={mobileLogo} />
      <h1>더 큰 화면으로</h1>
      <h1>더 정확하게 마켓핏 점검해요!</h1>
      <ContentImg src={mobileImg} />
      <h2>PC로 접속해주세요</h2>
      <CopyButton onClick={handleLinkCopy}>URL 복사하기</CopyButton>
    </Container>
  );
};

export default MobilePage;
