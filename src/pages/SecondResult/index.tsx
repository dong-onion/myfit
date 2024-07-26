import React from 'react';
import styled from 'styled-components';
import BarChart from './components/BarChart';
import { calculateScore } from '@/utility/utils';
import {
  WEAKNESS_TYPE,
  WEAKNESS_TYPE_INFO,
  WeaknessType,
} from '@/utility/constants';
import { recommendServiceTool, testResult, typeInfo } from '@/assets';
import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100%; */
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
  right: 23%;
  transform: translate(0%, -50%);
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
  font-family: Pretendard;
  font-size: 15px;
  font-weight: ${({ $bold }) => ($bold ? 700 : 300)};
  line-height: 19.5px;
  letter-spacing: -0.002em;
  text-align: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const TestResultSection = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TestResultImg = styled.img`
  width: 164px;
  height: 46px;
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
`;
export const TestResultContentContainer = styled.div`
  padding: 32.5px;
  margin-top: 30px;
  max-width: 1200px;
  flex-grow: 1;
  height: 250px;
  background-color: ${({ theme }) => theme.color.bg[1]};
  border-radius: 12px;
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
`;

export const TypeInfoSection = styled(TestResultSection)``;
export const TypeInfoImg = styled(TestResultImg)``;
export const TypeInfoTitle = styled(TestResultTitle)``;
export const TypeInfoSubTitle = styled.p`
  margin-top: 30px;
  font-family: Pretendard-SemiBold;
  font-size: 22px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.005em;
`;
export const TypeInfoContentImg = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  flex-grow: 1;
  height: 384px;
  object-fit: contain;
`;

export const ServiceToolSection = styled(TestResultSection)`
  margin-top: 130px;
`;
export const ServiceToolImg = styled(TestResultImg)``;
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

const SecondResult = () => {
  const getTestResult = (): number[] => {
    return JSON.parse(sessionStorage.getItem('totalScores') ?? '');
  };
  const naviate = useNavigate();

  const totalScores = getTestResult();
  const chartData = calculateScore(totalScores);
  const getWeaknessType = (): WeaknessType => {
    const minIndex = chartData.indexOf(Math.min(...chartData));

    return WEAKNESS_TYPE[minIndex];
  };
  const {
    title,
    contentInfo,
    headerBackground,
    footerBackground,
    serviceTool,
  } = WEAKNESS_TYPE_INFO[getWeaknessType()];

  const labelArray = [
    '창업 경험',
    '시장 타당성',
    '고객 정의',
    '객관적 정보',
    '기술 경쟁력',
    '경영 관리',
  ];

  const servicToolNavigater = (tool: string) => {
    if (tool === '/static/media/business_model_canvas.dc3bea32c4b53d3dcc7e.png')
      return naviate('/tools/bmc');
    if (tool === '/static/media/service_blueprint.f3d73042bce1d2719d89.png')
      return naviate('/tools/blp');
    if (tool === '/static/media/customer_journey_map.e1efe6a2c919ef83d0d9.png')
      return naviate('/tools/cjm');
    if (tool === '/static/media/persona.e02c39fba4c7c55734ff.png')
      return naviate('/tools/psn');
    if (tool === '/static/media/system_map.1cb0a035920306ea42eb.png')
      return naviate('/tools/stm');
    if (tool === '/static/media/benchmarking.c493336ab4b3f7fad3b4.png')
      return naviate('/tools/bcm');
  };

  return (
    <Container>
      <Header src={headerBackground}>
        <ChartContainer>
          {labelArray.map((label, index) => (
            <ChartLabelContainer key={index}>
              <ChartLabel $bold={labelArray[index] === title}>
                {label}
              </ChartLabel>
            </ChartLabelContainer>
          ))}
          <BarChart series={[{ data: chartData }]} />
        </ChartContainer>
      </Header>
      <TestResultSection>
        <TestResultImg src={testResult} />
        <TestResultTitle>AI가 서비스와 취약점을 분석했어요</TestResultTitle>
        <TestResultContentContainer>
          <TestResultContentWrapper>
            창업을 진행하면서 어려움을 겪고 계시는군요. 제가 개선해야 할 부분과
            보완 방법을 알려드릴게요. 내부 정보를 파악하고 시장을 세분화하며
            고객 정의를 명확히 하는 것이 중요해요. 회사의 재무 상태와 직원들의
            업무량과 역량을 파악하여 전략을 수립하고, 샐러드 배달 서비스를
            이용하는 고객층을 세분화하여 각 고객층에 맞는 마케팅 전략을 수립해야
            해요. 고객의 니즈와 선호도를 파악하여 이를 반영한 제품을 개발하고,
            고객의 피드백을 적극적으로 수용하여 제품 개선에 반영하는 것도
            중요해요.이러한 방법을 시도해 보면 사용자님의 사업이 더욱 성장할 수
            있을 거예요.
            {/* 데이터 바인딩 */}
          </TestResultContentWrapper>
        </TestResultContentContainer>
      </TestResultSection>
      <TypeInfoSection>
        <TypeInfoImg src={typeInfo} />
        <TypeInfoTitle>창업 경험 부족 유형은 무엇인가요?</TypeInfoTitle>
        <TypeInfoSubTitle>
          초기 창업가의 경험부족으로 합리적 의사결정에 어려움을 겪는 경우에요.
          아래와 같은 경우가 있을 수 있어요.
        </TypeInfoSubTitle>
        <TypeInfoContentImg src={contentInfo} />
      </TypeInfoSection>
      <Footer src={footerBackground}>
        <ServiceToolSection>
          <ServiceToolImg src={recommendServiceTool} />
          <ServiceToolTitle>
            나의 서비스를 AI 툴킷에 적용해 다음 전략을 확인해 보세요
          </ServiceToolTitle>
          <ServiceToolContentImgWrapper>
            {serviceTool.map((tool, index) => (
              <ServiceToolContentImg
                onClick={() => servicToolNavigater(tool)}
                key={index}
                src={tool}
              />
            ))}
          </ServiceToolContentImgWrapper>
        </ServiceToolSection>
        <BuutonWrapper>
          <RetryButton type="button">
            <RetryButtonText>다시 테스트 하기</RetryButtonText>
          </RetryButton>
          <DownloadButton type="button">
            <DownloadButtonText>점검 결과 다운로드</DownloadButtonText>
          </DownloadButton>
        </BuutonWrapper>
      </Footer>
    </Container>
  );
};

export default SecondResult;
