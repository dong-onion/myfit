import type { VercelRequest, VercelResponse } from '@vercel/node';

import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;
export const HEADERS = {
  'X-NCP-CLOVASTUDIO-API-KEY': process.env.REACT_APP_CLOVA_STUDIO_API_KEY,
  'X-NCP-APIGW-API-KEY': process.env.REACT_APP_APIGW_API_KEY,
  'X-NCP-CLOVASTUDIO-REQUEST-ID': process.env.REACT_APP_CLOVASTUDIO_REQUEST_ID,
  'Content-Type': 'application/json',
};

export const getBenchmarkResponse = async (serviceDescription: string) => {
  const requestData = {
    messages: [
      {
        role: 'system',
        content: `
제시된 서비스로 벤치마킹을 작성할거야.
국내와 해외로 나눠서 어떤 유사, 경쟁 서비스 또는 시장이 있는지 알려줘. 
문장은 '-해요' 문체로 작성해줘.
다음 항목을 포함해줘: 경쟁사 제품 및 서비스, 가격, 마케팅 전략, 고객 서비스, 기술 및 혁신, 시장 점유율 및 성과, 비즈니스 전략, 고객 평가 및 피드백, 인력 및 조직 구조. 

다른 추가설명 없이, 아래 예시와 같은 형태로 응답을 줘.

{
  "국내": {
    "제품 및 서비스": [
      "- 명랑 핫도그: 다양한 종류의 핫도그와 사이드 메뉴를 제공하며, 저렴한 가격으로 인기가 높음"
    ],
    "시장 점유율 및 성과": [
      "- 명랑 핫도그: 국내 1위 핫도그 프랜차이즈 브랜드이며, 2023년 기준 매장 수가 1,500개 이상"
    ],
    "가격": [
      "- 명랑 핫도그: 1,000원 - 2,500원"
    ],
    "마케팅 전략": [
      "- 명랑 핫도그: SNS를 활용한 마케팅과 매장 내 이벤트를 진행"
    ],
    "고객 서비스": [
      "- 명랑 핫도그: 빠른 주문 처리와 친절한 서비스 제공"
    ],
    "비즈니스 전략": [
      "- 명랑 핫도그: 가맹점 확대를 통한 시장 점유율 확대와 신메뉴 개발을 통한 고객 유치"
    ],
    "기술 및 혁신": [
      "- 명랑 핫도그: 자동화된 핫도그 제조 시스템과 모바일 앱을 통한 주문 및 결제"
    ],
    "고객 평가 및 피드백": [
      "- 명랑 핫도그: 맛과 가격에 대한 만족도가 높고, 매장이 청결하다는 평가가 많음"
    ],
    "인력 및 조직 구조": [
      "- 명랑 핫도그: 본사와 가맹점으로 구성된 조직 구조로, 본사에서는 메뉴 개발, 마케팅, 고객 서비스를 담당"
    ]
  },
  "해외": {
    "제품 및 서비스": [
      "- MyFitnessPal: 칼로리 추적 및 운동 기록을 제공하며, 사용자가 식단과 운동을 쉽게 관리할 수 있도록 도와줌"
    ],
    "시장 점유율 및 성과": [
      "- MyFitnessPal: 글로벌 헬스케어 앱 중 가장 높은 시장 점유율을 보유하고 있으며, 2023년 기준 2억 명 이상의 사용자 보유"
    ],
    "가격": [
      "- MyFitnessPal: 기본 서비스는 무료, 프리미엄 서비스는 월 $9.99"
    ],
    "마케팅 전략": [
      "- MyFitnessPal: 글로벌 광고 캠페인과 유명 인플루언서 협업을 통해 사용자층을 넓힘"
    ],
    "고객 서비스": [
      "- MyFitnessPal: 24시간 고객 지원과 다양한 언어로 서비스 제공"
    ],
    "기술 및 혁신": [
      "- MyFitnessPal: AI 기반의 식단 및 운동 추천 시스템과 다양한 웨어러블 디바이스와의 호환성 제공"
    ],
    "비즈니스 전략": [
      "- MyFitnessPal: 다양한 기업과의 파트너십을 통해 서비스 범위 확장, 새로운 기능 지속적 추가"
    ],
    "고객 평가 및 피드백": [
      "- MyFitnessPal: 다양한 음식 데이터베이스와 사용 편의성에 대한 만족도가 높고, 사용자 지원 서비스가 빠르고 정확하다는 평가"
    ],
    "인력 및 조직 구조": [
      "- MyFitnessPal: 전문 영양사, 트레이너, 데이터 과학자, 개발자로 구성된 글로벌 팀 보유, 본사와 각 지역 사무소에서 다양한 역할 수행"
    ]
  }
}
        `,
      },
      {
        role: 'user',
        content: `지금 구상하고 있는 사업은 ${serviceDescription}이야.`,
      },
    ],
    topP: 0.1,
    topK: 0,
    maxTokens: 2000,
    temperature: 0.1,
    repeatPenalty: 5.0,
    stopBefore: [],
    seed: 0,
  };

  try {
    const response = await axios.post(API_URL as string, requestData, {
      headers: HEADERS,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to get SWOT Analysis: ' + (error as Error).message);
  }
};

export default async function (
  request: VercelRequest,
  response: VercelResponse,
) {
  const { serviceDescription } = request.query;
  if (!serviceDescription) {
    response.status(400).send('Invalid query parameters');
    return;
  } else if (typeof serviceDescription !== 'string') {
    response.status(400).send('Invalid query parameters');
    return;
  }

  const res = await getBenchmarkResponse(serviceDescription);

  // allow cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  // has been blocked by CORS policy: Request header field priority is not allowed by Access-Control-Allow-Headers in preflight response.
  response.send(res);
}
