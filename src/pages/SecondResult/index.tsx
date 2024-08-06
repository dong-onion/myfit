import React from 'react';
import styled from 'styled-components';
import BarChart from './components/BarChart';
import { calculateScore } from '@/utility/utils';
import {
  ROUTES_PATH,
  SESSION_KEYS,
  SUBCATEGORIES,
  WEAKNESS_TYPE,
  WEAKNESS_TYPE_INFO,
  WeaknessType,
} from '@/utility/constants';
import {
  hyperClova,
  recommendServiceTool,
  refreshIcon,
  testResult,
  typeInfo,
} from '@/assets';
import { Button } from '@/components';
import { useOverallAnalysis } from '@/hooks/useOverallAnalysis';
import { useNavigate } from 'react-router-dom';
import Loading from './components/Loading';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  align-self: flex-end;
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

const SecondResult = () => {
  const navigate = useNavigate();
  const serviceDescription = JSON.parse(
    sessionStorage.getItem(SESSION_KEYS.serviceDescription) || '',
  );
  const totalScores = JSON.parse(
    sessionStorage.getItem(SESSION_KEYS.totalScores) ?? '',
  );
  const chartData = calculateScore(totalScores);

  const getWeaknessType = (): WeaknessType => {
    const minIndex = chartData.indexOf(Math.min(...chartData));

    return WEAKNESS_TYPE[minIndex];
  };

  const findThreeSmallestIndices = (scores: number[]) => {
    const arrWithIndices = scores.map((value, index) => ({ index, value }));
    const sortedScores = arrWithIndices.sort((a, b) => a.value - b.value);
    const indices = sortedScores.slice(0, 3).map((item) => item.index);

    return indices;
  };
  const categories = findThreeSmallestIndices(totalScores).map(
    (index) => SUBCATEGORIES[index],
  );

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

  const {
    data: result,
    isLoading,
    isError,
    refetch,
  } = useOverallAnalysis(serviceDescription, categories, title);

  const handleServicToolImgClick = (tool: string) => {
    if (tool === '/static/media/business_model_canvas.dc3bea32c4b53d3dcc7e.png')
      return navigate(ROUTES_PATH.busineesModelCanvas);
    if (tool === '/static/media/persona.e02c39fba4c7c55734ff.png')
      return navigate(ROUTES_PATH.persona);
    if (tool === '/static/media/customer_journey_map.e1efe6a2c919ef83d0d9.png')
      return navigate(ROUTES_PATH.customerJourneyMap);
    if (tool === '/static/media/benchmarking.c493336ab4b3f7fad3b4.png')
      return navigate(ROUTES_PATH.benchmarking);
    if (tool === '/static/media/service_blueprint.ee75cd205568887a725a.png')
      return navigate(ROUTES_PATH.bluePrint);
    if (tool === '/static/media/system_map.1cb0a035920306ea42eb.png')
      return navigate(ROUTES_PATH.systemMap);
  };

  if (isLoading) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const handleRetryButtonClick = () => {
    navigate('/type/test');
  };

  return (
    <Container>
      <Header src={headerBackground}>
        <ChartContainer>
          {labelArray.map((label, index) => (
            <ChartLabelContainer key={index}>
              <ChartLabel $bold={labelArray[index] + ' ' + '부족' === title}>
                {label}
              </ChartLabel>
            </ChartLabelContainer>
          ))}
          <BarChart series={[{ data: chartData }]} />
        </ChartContainer>
      </Header>
      <TestResultSection>
        <TestResultImg src={testResult} />
        <TestResultTitleWrapper>
          <TestResultTitle>AI가 서비스와 취약점을 분석했어요</TestResultTitle>
          <RefreshButton onClick={() => refetch()}>
            <img src={refreshIcon} />
            <span>재생성</span>
          </RefreshButton>
        </TestResultTitleWrapper>

        <TestResultContentContainer>
          <TestResultContentWrapper>{result}</TestResultContentWrapper>
        </TestResultContentContainer>
        <img
          src={hyperClova}
          width={200}
          height={15}
          style={{ alignSelf: 'flex-end', marginTop: 20 }}
        />
      </TestResultSection>

      <TypeInfoSection>
        <TypeInfoImg src={typeInfo} />
        <TypeInfoTitle>
          <span className="emphasis">{title}</span> 유형은 무엇인가요?
        </TypeInfoTitle>
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
                onClick={() => handleServicToolImgClick(tool)}
                key={index}
                src={tool}
              />
            ))}
          </ServiceToolContentImgWrapper>
        </ServiceToolSection>
        <BuutonWrapper>
          <RetryButton onClick={handleRetryButtonClick} type="button">
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
