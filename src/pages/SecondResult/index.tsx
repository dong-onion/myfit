import React, { useRef } from 'react';
import BarChart from './components/BarChart';
import { calculateScore, loadPageToPdf } from '@/utility/utils';
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
import { useOverallAnalysis } from '@/hooks/useOverallAnalysis';
import { useNavigate } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorPage from '../ErrorPage';
import { useAccessControl } from '@/hooks/useAccessControl';
import * as S from './SecondResult.style';

const SecondResult = () => {
  const navigate = useNavigate();
  const downloadRef = useRef<HTMLDivElement>(null);
  const { serviceDescription } = useAccessControl();
  if (serviceDescription === null) {
    return <Loading />;
  }
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
    isRefetching,
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

  if (isLoading || isRefetching) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  const handleRetryButtonClick = () => {
    navigate('/type/test');
  };

  const handleClickDownloadButton = () => {
    if (!downloadRef.current) {
      alert('다운로드할 수 없습니다.');
      return;
    }
    loadPageToPdf(downloadRef.current, '마이핏_창업_유형_테스트_결과');
  };

  return (
    <S.Container>
      <S.DownloadWrapper ref={downloadRef}>
        <S.Header src={headerBackground}>
          <S.ChartContainer>
            {labelArray.map((label, index) => (
              <S.ChartLabelContainer key={index}>
                <S.ChartLabel
                  $bold={labelArray[index] + ' ' + '부족' === title}
                >
                  {label}
                </S.ChartLabel>
              </S.ChartLabelContainer>
            ))}
            <BarChart series={[{ data: chartData }]} />
          </S.ChartContainer>
        </S.Header>
        <S.TestResultSection>
          <S.TestResultImg src={testResult} />
          <S.TestResultTitleWrapper>
            <S.TestResultTitle>
              AI가 서비스와 취약점을 분석했어요
            </S.TestResultTitle>
            <S.RefreshButton onClick={() => refetch()}>
              <img src={refreshIcon} />
              <span>재생성</span>
            </S.RefreshButton>
          </S.TestResultTitleWrapper>

          <S.TestResultContentContainer>
            <S.TestResultContentWrapper>{result}</S.TestResultContentWrapper>
          </S.TestResultContentContainer>
          <img
            src={hyperClova}
            width={200}
            height={15}
            style={{ alignSelf: 'flex-end', marginTop: 20 }}
          />
        </S.TestResultSection>

        <S.TypeInfoSection>
          <S.TypeInfoImg src={typeInfo} />
          <S.TypeInfoTitle>
            <span className="emphasis">{title}</span> 유형은 무엇인가요?
          </S.TypeInfoTitle>
          <S.TypeInfoSubTitle>
            초기 창업가의 경험부족으로 합리적 의사결정에 어려움을 겪는 경우에요.
            아래와 같은 경우가 있을 수 있어요.
          </S.TypeInfoSubTitle>
          <S.TypeInfoContentImg src={contentInfo} />
        </S.TypeInfoSection>
        <S.Footer src={footerBackground}>
          <S.ServiceToolSection>
            <S.ServiceToolImg src={recommendServiceTool} />
            <S.ServiceToolTitle>
              나의 서비스를 AI 툴킷에 적용해 다음 전략을 확인해 보세요
            </S.ServiceToolTitle>
            <S.ServiceToolContentImgWrapper>
              {serviceTool.map((tool, index) => (
                <S.ServiceToolContentImg
                  onClick={() => handleServicToolImgClick(tool)}
                  key={index}
                  src={tool}
                />
              ))}
            </S.ServiceToolContentImgWrapper>
          </S.ServiceToolSection>
          <S.BuutonWrapper>
            <S.RetryButton onClick={handleRetryButtonClick} type="button">
              <S.RetryButtonText>다시 테스트 하기</S.RetryButtonText>
            </S.RetryButton>
            <S.DownloadButton type="button" onClick={handleClickDownloadButton}>
              <S.DownloadButtonText>점검 결과 다운로드</S.DownloadButtonText>
            </S.DownloadButton>
          </S.BuutonWrapper>
        </S.Footer>
      </S.DownloadWrapper>
    </S.Container>
  );
};

export default SecondResult;
