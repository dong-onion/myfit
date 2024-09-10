import { mainBackground } from '@/assets';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 177px;
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  margin-top: 100px;
  font-family: 'Pretendard-Bold';
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.012em;

  color: ${({ theme }) => theme.color.gray[0]};
`;
export const HeaderSubTitle = styled.span`
  font-family: Pretendard-SemiBold;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.005em;
  text-align: left;
  margin-top: 30px;

  color: ${({ theme }) => theme.color.gray[0]};
`;

export const SummaryContainer = styled.div`
  margin-top: 20px;
  padding: 45px 60px;
  width: 100%;
  height: 240px;
  background-color: #ffffff66;
  border: 1px solid #ffffff99;
  border-radius: 12px;
  box-shadow: 20px 30px 60px 0px #3952ff1a;
  position: relative;
`;
export const SummaryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > .level {
    margin-left: 10px;
    width: 96px;
    height: 38px;
    border-radius: 500px;
    background-color: ${({ theme }) => theme.color.primary[0]};
    color: ${({ theme }) => theme.color.white[0]};
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Pretendard-SemiBold;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.002em;
    text-align: left;
  }

  & > span {
    font-family: Pretendard-Bold;
    font-size: 22px;
    font-weight: 700;
    line-height: 35.2px;
    letter-spacing: -0.005em;
    text-align: center;

    color: ${({ theme }) => theme.color.primary[0]};
  }
`;
export const EditWrapper = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6px;
  right: -6px;

  &:active {
    transition: all 0.1s;
    transform: scale(0.95);
  }
`;
export const EditImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const SummaryContent = styled.div`
  margin-top: 20px;
`;

export const SummaryResult = styled.p`
  font-family: 'Pretendard-Medium';
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.002em;
  text-align: left;
  word-break: keep-all;

  color: ${({ theme }) => theme.color.gray[0]};
`;

export const ContentSectionContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > h2 {
    font-family: Pretendard-SemiBold;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.005em;
    text-align: left;
    margin-bottom: 20px;

    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const ContentSectionWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
export const ContentImg = styled.img<{ src: string; hoversrc: string }>`
  src: ${({ src }) => src};
  width: 282px;
  height: 282px;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    content: url(${(props) => props.hoversrc});
    transition: 0.25s;
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.color.gray[3]};
    transform: translateY(-0.25em);
  }

  &:active {
    transition: all 0.2s;
    transform: scale(0.95);
  }
  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.color.gray[3]};
    box-shadow: none;
  }
  &:disabled:hover {
    transform: none;
  }
  &:disabled:active {
    transform: scale(1);
  }
`;
