import styled from 'styled-components';

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
