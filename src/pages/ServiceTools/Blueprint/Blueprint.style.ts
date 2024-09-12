import styled from 'styled-components';

export const DownloadWrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  * {
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const InteractionLineContainer = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  align-items: center;

  & span {
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 23.4px;
    letter-spacing: -0.005em;
    text-align: center;
    color: ${({ theme }) => theme.color.primary[1]};
  }

  & .box {
    width: 9%;
    margin-right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .line {
    width: 90%;
    border-top: 2px dotted ${({ theme }) => theme.color.primary[1]};
  }
`;

export const SightLine = styled(InteractionLineContainer)`
  & .line {
    border-top: 2px solid ${({ theme }) => theme.color.primary[1]};
  }
`;

export const InnerInteractionLine = styled(InteractionLineContainer)`
  & .line {
    border-top: 2px dotted ${({ theme }) => theme.color.primary[1]};
  }
`;

export const LevelContainer = styled.div`
  display: flex;
  margin-top: 63px;
  width: 100%;
  min-height: 105px;
  word-break: keep-all;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.primary[4]};
  }

  & :nth-child(1) {
    width: 9%;
    margin-right: 14px;
    border-radius: 12px;

    & img {
      border-radius: 0;
      width: 36px;
      height: 61px;
      margin: 0;
      padding: 0;

      &.action {
        width: 52px;
        height: 92px;
      }

      &.f2f {
        width: 52px;
        height: 115px;
      }

      &.process {
        width: 69px;
        height: 86px;
      }
    }
  }

  & :not(:nth-child(1)) {
    width: 18%;
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: center;
    padding: 20px 21px;
  }

  & :nth-child(2) {
    background-color: #f3f5ff;
    border-radius: 12px 0 0 12px;
  }
  & :nth-child(3) {
    background-color: #e7ebff;
  }
  & :nth-child(4) {
    background-color: #dfe6ff;
  }
  & :nth-child(5) {
    background-color: #d8e0ff;
  }
  & :nth-child(6) {
    background-color: #ced7fc;
    border-radius: 0 12px 12px 0;
  }
`;
export const PurposeContainer = styled(LevelContainer)`
  margin-top: 14px;

  & :nth-child(1) {
    background-color: ${({ theme }) => theme.color.white[0]};
  }

  & :nth-child(2) {
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 12px 0 0 12px;
  }
  & :nth-child(3) {
    background-color: ${({ theme }) => theme.color.white[0]};
  }
  & :nth-child(4) {
    background-color: ${({ theme }) => theme.color.white[0]};
  }
  & :nth-child(5) {
    background-color: ${({ theme }) => theme.color.white[0]};
  }
  & :nth-child(6) {
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 0 12px 12px 0;
  }
`;
export const ActionContainer = styled(PurposeContainer)`
  min-height: 150px;
  & :nth-child(1) {
    background-color: #f3f5ff;
  }

  & :nth-child(2) {
    background-color: #f3f5ff;
    border-radius: 12px 0 0 12px;
  }
  & :nth-child(3) {
    background-color: #f3f5ff;
  }
  & :nth-child(4) {
    background-color: #f3f5ff;
  }
  & :nth-child(5) {
    background-color: #f3f5ff;
  }
  & :nth-child(6) {
    background-color: #f3f5ff;
    border-radius: 0 12px 12px 0;
  }
`;
export const EmotionContainer = styled(PurposeContainer)`
  min-height: 150px;
`;
export const NeedsContainer = styled(ActionContainer)``;
export const SolutionContainer = styled(PurposeContainer)`
  min-height: 150px;
`;
