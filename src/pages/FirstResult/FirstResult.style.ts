import { Button } from '@/components';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bg[1]};
  display: flex;
  justify-content: center;
  padding-bottom: 225px;
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;
  & > h2 {
    font-size: 28px;
    font-weight: 600;
    font-family: 'Pretendard-SeimBold';
    letter-spacing: -0.005em;
    color: ${({ theme }) => theme.color.gray[0]};
    margin-bottom: 15px;
  }
  & > span {
    font-family: Pretendard;
    font-size: 44px;
    font-weight: 700;
    font-family: 'Pretendard-Bold';
    line-height: 44px;
    letter-spacing: -0.018em;
    color: ${({ theme }) => theme.color.gray[0]};
  }
  & > span.title {
    color: ${({ theme }) => theme.color.primary[0]};
  }
`;

export const SummaryContainer = styled.div`
  padding: 32.5px;
  max-width: 1200px;
  flex-grow: 1;
  height: 176px;
  background-color: ${({ theme }) => theme.color.primary[6]};
  border-radius: 12px;
`;

export const SummaryWrapper = styled.div`
  word-break: keep-all;
  white-space: pre-wrap;
  overflow: auto; /* 넘치는 내용 숨기기 */
  font-size: 22px;
  font-weight: 500;
  font-family: 'Pretendard-Medium';
  line-height: 35.2px;
  width: 100%;
  height: 100%;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const AnalysisTitle = styled.h3`
  margin-top: 80px;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  line-height: 32px;
  letter-spacing: -0.012em;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const AnalysisInfoContainer = styled.div`
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 24px;
`;

export const AnalysisInfoBoxWrapper = styled.div`
  width: 588px;
  height: 300px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white[0]};
  padding: 40px 30px;
  overflow: hidden;

  & img {
    width: 84px;
    height: 37px;
    margin-bottom: 20px;
  }
`;

export const AnalysisInfoBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  overflow: scroll;
  word-break: keep-all;
  white-space: pre-wrap;

  & ul {
    padding-left: 28px;
  }

  & li {
    font-size: 22px;
    font-weight: 500;
    font-family: 'Pretendard-Medium';
    line-height: 35.2px;
    letter-spacing: -0.005em;
  }
`;

export const SkeletonList = styled.li`
  list-style: none;
`;

export const ServiceGrowthstrategyTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  letter-spacing: -0.012em;
  color: ${({ theme }) => theme.color.gray[0]};
  margin-top: 80px;
  margin-bottom: 40px;
`;

export const StrategyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Strategy = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white[0]};
  padding: 32px 40px;
  align-items: center;

  & > img {
    width: 82px;
    height: 36px;
  }

  & > span {
    font-size: 22px;
    font-weight: 500;
    font-family: 'Pretendard-Medium';

    letter-spacing: -0.005em;
    color: ${({ theme }) => theme.color.gray[0]};
    margin-left: 20px;
    position: relative;
    top: 2.5px;
  }
`;

export const TestNavBar = styled.div`
  width: 100%;
  height: 85px;
  background: linear-gradient(270deg, #6f56ff 0%, #4865ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export const TestNavTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Pretendard-SemiBold';
  letter-spacing: -0.012em;
  color: ${({ theme }) => theme.color.white[0]};
  margin-right: 30px;

  & .bold {
    font-weight: 700;
    font-family: 'Pretendard-Bold';
  }
`;

export const TestNavButton = styled(Button)`
  width: 224px;
  height: 56px;
  background-color: ${({ theme }) => theme.color.white[0]};
  border-radius: 8px;
  gap: 10px;
  color: ${({ theme }) => theme.color.primary[0]};
  font-size: 20px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  letter-spacing: -0.002em;

  &:hover {
    box-shadow: 0px 4px 10px 0px #00000066;
    color: ${({ theme }) => theme.color.primary[0]};
    border: 1px solid ${({ theme }) => theme.color.white[0]};
  }
`;

export const ButtonIcon = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  bottom: 1px;
`;
