import React from 'react';
import Frame from '../components/Frame';
import { businessCanvasInfo, costStructure, problem } from '@/assets';
import styled from 'styled-components';
import ContentHeader from '../components/ContentHeader/indext';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    'a b c d e'
    'a f c g e';
  gap: 14px;
  width: 1200px;
  height: 724px;
  margin-top: 60px;

  & .grid {
    padding: 31px 21px;
    border: 1px solid #b8c3ff;
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 12px;
    padding: 31px 21px;
  }

  & ul {
    padding-left: 27px;
    margin-top: 10px;
  }

  & li {
    word-break: keep-all;
    white-space: pre-wrap;
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

const A = styled.div`
  grid-area: a;

  & img {
    width: 84px;
    height: 36px;
  }
`;

const B = styled.div`
  grid-area: b;

  & img {
    width: 105px;
    height: 36px;
  }
`;

const C = styled(A)`
  grid-area: c;
  & img {
    height: 36px;
    width: 125px;
  }
`;

const D = styled(A)`
  grid-area: d;
  & img {
    height: 36px;
    width: 125px;
  }
`;

const E = styled(A)`
  grid-area: e;
  & img {
    height: 36px;
    width: 104px;
  }
`;

const F = styled(A)`
  grid-area: f;
  & img {
    height: 36px;
    width: 125px;
  }
`;

const G = styled(A)`
  grid-area: g;
  & img {
    height: 36px;
    width: 84px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 1200px;
  height: 180px;
  margin-top: 14px;

  & div {
    padding: 25px 30px;
    border: 1px solid #b8c3ff;
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 12px;
    width: 593px;
  }

  & ul {
    margin-top: 10px;
    padding-left: 26px;
  }

  & li {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
  }

  & :nth-child(1) {
    > img {
      width: 125px;
      height: 36px;
    }
  }

  & :nth-child(2) {
    & img {
      width: 104px;
      height: 36px;
    }
  }
`;

const BusineesModelCanvas = () => {
  return (
    <Frame src={businessCanvasInfo}>
      <ContentHeader />
      <GridContainer>
        <A className="grid">
          <img src={problem} />
          <ul>
            <li>
              현대인들은 바쁜 일상으로 인해 건강한 식습관을 유지하기 어렵습니다.
            </li>
            <li>
              건강한 식습관을 유지하고 싶지만, 시간과 노력이 많이 필요합니다.
            </li>
          </ul>
        </A>
        <B className="grid">B</B>
        <C className="grid">C</C>
        <D className="grid">D</D>
        <E className="grid">E</E>
        <F className="grid">F</F>
        <G className="grid">G</G>
      </GridContainer>
      <FlexContainer>
        <div>
          <img src={costStructure} />
          <ul>
            <li>식재료 구매 비용</li>
            <li>인건비</li>
            <li>마케팅 비용</li>
          </ul>
        </div>
        <div></div>
      </FlexContainer>
    </Frame>
  );
};

export default BusineesModelCanvas;
