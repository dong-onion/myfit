import React from 'react';
import {
  bullseye,
  personaContent1,
  personaInfo,
  pesiveFace,
  readingGlassesLeft,
  redQuestionMark,
  smileFace,
  thumbsUp,
  wallet,
} from '@/assets';
import styled from 'styled-components';
import ContentHeader from '../components/ContentHeader/indext';
import ContentBox from '../components/ContentBox';
import Frame from '../components/Frame';
import { usePersona } from '@/hooks/usePersona';

export const Content1 = styled(ContentBox)`
  margin-top: 60px;
  height: 116px;
  display: flex;
  align-items: center;
  padding: 0 40px;

  & img {
    width: 93px;
    height: 36px;
  }

  & span {
    font-family: 'Pretendard-Medium';
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    color: ${({ theme }) => theme.color.gray[0]};
    margin-left: 25px;
    position: relative;
    top: 1px;
  }
`;

export const Content2 = styled(ContentBox)`
  margin-top: 14px;
  height: 173px;
  display: flex;
  flex-direction: column;
  padding: 35px 40px;

  & div {
    display: flex;
    align-items: center;
    height: 36px;
    margin-bottom: 20px;
  }

  & .title {
    font-family: 'Pretendard-SemiBold';
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.005em;
    margin-left: 5px;
    position: relative;
    top: 2px;
  }

  & img {
    width: 36px;
    height: 36px;
  }

  & span {
    font-family: 'Pretendard-Medium';
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
  }
`;

export const ContentInfo = styled.div`
  width: 100%;
  word-break: keep-all;
  white-space: pre-wrap;
`;

export const ContentWrapper = styled.div`
  display: grid;
  row-gap: 14px;
  column-gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 14px;
`;

export const Content3 = styled(Content2)`
  width: 100%;
  margin-top: 0;
`;

export const Footer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.bg[1]};
`;

const Persona = () => {
  const serviceDescription = JSON.parse(
    sessionStorage.getItem('serviceDescription') || '',
  );
  const { data, isError, isLoading, refetch } = usePersona(serviceDescription);
  const {
    introduction = '',
    background = '',
    goal = '',
    motivation = '',
    consumptionHabit = '',
    personality = '',
    painPoint = '',
    reason = '',
  } = data || {};

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Frame src={personaInfo}>
      <ContentHeader />
      <Content1>
        <img src={personaContent1} alt="personaContent1"></img>
        <span>{introduction}</span>
      </Content1>
      <Content2>
        <div>
          <img src={redQuestionMark} alt="redQuestionMark"></img>
          <p className="title">퍼소나 선정이유</p>
        </div>
        <ContentInfo>
          <span>{reason}</span>
        </ContentInfo>
      </Content2>
      <ContentWrapper>
        <Content3>
          <div>
            <img src={readingGlassesLeft} />
            <p className="title">배경</p>
          </div>
          <ContentInfo>
            <span>{background}</span>
          </ContentInfo>
        </Content3>
        <Content3>
          <div>
            <img src={bullseye} />
            <p className="title">목표</p>
          </div>
          <span>{goal}</span>
        </Content3>
        <Content3>
          <div>
            <img src={thumbsUp} />
            <p className="title">동기</p>
          </div>
          <span>{motivation}</span>
        </Content3>
        <Content3>
          <div>
            <img src={wallet} />
            <p className="title">소비 습관</p>
          </div>
          <span>{consumptionHabit}</span>
        </Content3>
        <Content3>
          <div>
            <img src={smileFace} />
            <p className="title">성격</p>
          </div>
          <span>{personality}</span>
        </Content3>
        <Content3>
          <div>
            <img src={pesiveFace} />
            <p className="title">페인포인트</p>
          </div>
          <span>{painPoint}</span>
        </Content3>
      </ContentWrapper>
      <Footer />
    </Frame>
  );
};

export default Persona;
