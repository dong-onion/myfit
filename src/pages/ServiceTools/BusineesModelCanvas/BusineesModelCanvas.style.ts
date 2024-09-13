import styled from 'styled-components';

export const DownloadWrapper = styled.div`
  display: flex;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    'a b c d e'
    'a f c g e';
  gap: 14px;
  width: 100%;
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

export const A = styled.div`
  grid-area: a;

  & img {
    width: 84px;
    height: 36px;
  }
`;

export const B = styled.div`
  grid-area: b;

  & img {
    width: 105px;
    height: 36px;
  }
`;

export const C = styled(A)`
  grid-area: c;
  & img {
    height: 36px;
    width: 125px;
  }
`;

export const D = styled(A)`
  grid-area: d;
  & img {
    height: 36px;
    width: 125px;
  }
`;

export const E = styled(A)`
  grid-area: e;
  & img {
    height: 36px;
    width: 104px;
  }
`;

export const F = styled(A)`
  grid-area: f;
  & img {
    height: 36px;
    width: 125px;
  }
`;

export const G = styled(A)`
  grid-area: g;
  & img {
    height: 36px;
    width: 84px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  height: 180px;
  margin-top: 14px;

  & div {
    padding: 25px 30px;
    border: 1px solid #b8c3ff;
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 12px;
    width: 100%;
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
