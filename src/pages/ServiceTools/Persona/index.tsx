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
    top: 2px;
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

const Persona = () => {
  return (
    <Frame src={personaInfo}>
      <ContentHeader />
      <Content1>
        <img src={personaContent1} alt="personaContent1"></img>
        <span>대학교 근처 원룸에 거주하는 20대 초반의 대학생</span>
      </Content1>
      <Content2>
        <div>
          <img src={redQuestionMark} alt="redQuestionMark"></img>
          <p className="title">퍼소나 선정이유</p>
        </div>
        <ContentInfo>
          <span>
            대학생들이 학교 앞에서 자주 이용하는 음식 중 하나가 핫도그이며,
            저렴한 가격에 맛있는 음식을 제공하는 핫도그 가게는 대학생들에게
            인기가 많을 것으로 예상됨
          </span>
        </ContentInfo>
      </Content2>
      <ContentWrapper>
        <Content3>
          <div>
            <img src={readingGlassesLeft} />
            <p className="title">배경</p>
          </div>
          <ContentInfo>
            <span>
              대학교 근처 원룸에 거주하는 20대 초반 대학생으로, 자취 생활로 인해
              식비를 절약하고자 함 대학교 근처 원룸에 거주하는 20대 초반
              대학생으로,
            </span>
          </ContentInfo>
        </Content3>
        <Content3>
          <div>
            <img src={bullseye} />
            <p className="title">목표</p>
          </div>
          <span>저렴한 가격에 맛있는 음식을 먹는 것</span>
        </Content3>
        <Content3>
          <div>
            <img src={thumbsUp} />
            <p className="title">동기</p>
          </div>
          <span>
            자취 생활로 인해 식비 부담이 커져 저렴한 가격에 맛있는 음식을 먹고자
            함
          </span>
        </Content3>
        <Content3>
          <div>
            <img src={wallet} />
            <p className="title">배경</p>
          </div>
          <span>
            용돈을 받아 생활하며, 식비를 절약하기 위해 할인 행사나 쿠폰을
            적극적으로 활용함
          </span>
        </Content3>
        <Content3>
          <div>
            <img src={smileFace} />
            <p className="title">성격</p>
          </div>
          <span>
            새로운 음식에 도전하는 것을 즐기며, 친구들과 함께 맛집을 찾아다니는
            것을 좋아함
          </span>
        </Content3>
        <Content3>
          <div>
            <img src={pesiveFace} />
            <p className="title">페인포인트</p>
          </div>
          <span>학교 앞 음식점들은 대체로 가격이 비싸 식비 부담이 큼</span>
        </Content3>
      </ContentWrapper>
    </Frame>
  );
};

export default Persona;
