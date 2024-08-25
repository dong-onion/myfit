import { Button } from '@/components';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1920px;
`;

export const DownloadWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 450px;
  position: relative;
`;

export const Footer = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: ${({ src }) => (src === 'weakneesTypeFooter1' ? '1105px' : '1115px')};
  position: relative;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChartContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(63.5px);
  display: flex;
  gap: 24px;
`;
export const ChartLabelContainer = styled.div`
  width: 42px;
  height: 30px;
  text-align: center;
  position: relative;
  top: 232px;
  left: 53.3%;
`;

export const ChartLabel = styled.span<{ $bold: boolean }>`
  font-family: ${({ $bold }) =>
    $bold ? 'Pretendard-Bold' : 'Pretendard-Light'};
  font-size: 15px;
  font-weight: ${({ $bold }) => ($bold ? 700 : 300)};
  line-height: 19.5px;
  letter-spacing: -0.002em;
  text-align: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const TestResultSection = styled.div`
  width: 100%;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
`;
export const TestResultImg = styled.img`
  align-self: flex-start;
  width: 164px;
  height: 46px;
`;
export const TestResultTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const TestResultTitle = styled.p`
  margin-top: 10px;
  font-family: Pretendard-SemiBold;
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.012em;
  text-align: left;
  color: ${({ theme }) => theme.color.gray[0]};
  align-self: flex-start;
`;

export const TestResultContentContainer = styled.div`
  width: 100%;
  padding: 32.5px;
  margin-top: 30px;
  max-width: 1200px;
  flex-grow: 1;
  height: 250px;
  background-color: ${({ theme }) => theme.color.bg[1]};
  border-radius: 12px;
  overflow: hidden;
`;
export const TestResultContentWrapper = styled.div`
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

export const TypeInfoSection = styled(TestResultSection)`
  margin-top: 110px;
`;
export const TypeInfoImg = styled(TestResultImg)``;
export const TypeInfoTitle = styled(TestResultTitle)`
  & .emphasis {
    color: ${({ theme }) => theme.color.primary[0]};
  }
`;
export const TypeInfoSubTitle = styled.p`
  margin-top: 30px;
  font-family: Pretendard-SemiBold;
  font-size: 22px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.005em;
  align-self: flex-start;
`;
export const TypeInfoContentImg = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  flex-grow: 1;
  height: 384px;
  object-fit: contain;
`;

export const RefreshButton = styled.div`
  display: flex;
  gap: 10px;
  width: 141px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white[0]};
  border-radius: 9px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.primary[1]};

  &:hover {
    background-color: ${({ theme }) => theme.color.bg[1]};
  }

  & img {
    width: 24px;
    height: 24px;
  }

  & span {
    font-family: Pretendard-SemiBold;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.002em;
    text-align: left;

    color: ${({ theme }) => theme.color.primary[0]};
  }
`;

export const ServiceToolSection = styled(TestResultSection)`
  margin-top: 130px;
`;
export const ServiceToolImg = styled(TestResultImg)`
  width: 245px;
  height: 46px;
`;
export const ServiceToolTitle = styled(TestResultTitle)``;
export const ServiceToolContentImgWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 469px;
  display: flex;
  flex-grow: 1;
  gap: 24px;
`;
export const ServiceToolContentImg = styled.img`
  margin-top: 30px;
  height: 469px;
  width: 100%;
  object-fit: contain;
  flex-grow: 1;

  &:hover {
    transition: 0.25s;
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.color.gray[3]};
    transform: translateY(-0.25em);
    cursor: pointer;
  }
  &:active {
    transition: all 0.2s;
    transform: scale(0.95);
  }
`;

export const BuutonWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 798px;
  position: relative;
  right: 1%;
`;

export const RetryButton = styled(Button)`
  width: 377px;
  height: 78px;
  background-color: ${({ theme }) => theme.color.bg[1]};
  border: 1px solid ${({ theme }) => theme.color.primary[1]};
  border-radius: 12px;
`;

export const DownloadButton = styled(RetryButton)`
  width: 397px;
  background-color: ${({ theme }) => theme.color.primary[0]};
`;

export const RetryButtonText = styled.span`
  font-family: Pretendard-SemiBold;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.002em;
  text-align: center;
  color: ${({ theme }) => theme.color.primary[1]};
`;

export const DownloadButtonText = styled(RetryButtonText)`
  color: ${({ theme }) => theme.color.white[0]};
`;
