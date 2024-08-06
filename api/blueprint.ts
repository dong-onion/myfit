import type { VercelRequest, VercelResponse } from '@vercel/node';

import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;
export const HEADERS = {
  'X-NCP-CLOVASTUDIO-API-KEY': process.env.REACT_APP_CLOVA_STUDIO_API_KEY,
  'X-NCP-APIGW-API-KEY': process.env.REACT_APP_APIGW_API_KEY,
  'X-NCP-CLOVASTUDIO-REQUEST-ID': process.env.REACT_APP_CLOVASTUDIO_REQUEST_ID,
  'Content-Type': 'application/json',
};

export const getBlueprintResponse = async (serviceDescription: string) => {
  const requestData = {
    messages: [
      {
        role: 'system',
        content: `
제시된 서비스를 주제로 서비스 블루프린트를 작성해줘.  
서비스 제공 5단계별로 관련된 모든 행위자와 필요한 작업을 상세히 설명하고, 이를 표로 제시해줘. 
이 때 가시선 위와 아래 상호작용은 직원, 공급자를 중심으로 작성해줘. 
다음 항목을 포함해줘: 서비스 단계(5단계), 터치포인트, 사용자 행동, 가시선 위 상호작용, 가시선 아래 상호작용, 지원 프로세스.

다른 추가설명 없이, 아래 예시와 같은 형태로 응답을 줘.

{
  "서비스_단계": [
    {
      "단계": "회원가입 및 로그인",
      "터치포인트": "웹사이트 또는 모바일 앱에서 회원가입 양식 작성 후 제출",
      "사용자_행동": "이메일 주소, 비밀번호 등 개인 정보 입력",
      "가시선_위_상호작용": "시스템에 회원정보 저장, 이메일 인증 발송",
      "가시선_아래_상호작용": "데이터 베이스에 회원 정보 저장, 이메일 발송 서버 설정",
      "지원_프로세스": "가입 확인 이메일 발송 및 인증 링크 제공"
    },
    {
      "단계": "관심 콘텐츠 선택",
      "터치포인트": "메인 화면에서 관심 콘텐츠 선택",
      "사용자_행동": "관심 있는 카테고리 및 주제 선택",
      "가시선_위_상호작용": "추천 콘텐츠 제공, 관심사 기반 맞춤형 콘텐츠 제안",
      "가시선_아래_상호작용": "데이터 분석을 통해 사용자 관심사 파악, 콘텐츠 데이터베이스에서 관련 콘텐츠 필터링",
      "지원_프로세스": "관심사에 맞춘 콘텐츠 큐레이션 알고리즘 적용"
    },
    {
      "단계": "맞춤형 콘텐츠 제공",
      "터치포인트": "맞춤형 콘텐츠 피드",
      "사용자_행동": "콘텐츠 열람 및 시청",
      "가시선_위_상호작용": "콘텐츠 제공, 시청 이력 및 피드백 수집",
      "가시선_아래_상호작용": "사용자 행동 데이터 수집 및 분석, 콘텐츠 업데이트 및 관리",
      "지원_프로세스": "맞춤형 콘텐츠 추천 엔진 운영 및 유지보수"
    },
    {
      "단계": "사용자 피드백 수집",
      "터치포인트": "피드백 및 리뷰 작성",
      "사용자_행동": "콘텐츠에 대한 평가 및 의견 제출",
      "가시선_위_상호작용": "피드백 요청, 사용자 참여 독려",
      "가시선_아래_상호작용": "피드백 데이터 수집 및 분석, 개선점 도출",
      "지원_프로세스": "사용자 만족도 조사 및 결과 반영"
    },
    {
      "단계": "혜택 및 보상 제공",
      "터치포인트": "혜택 및 보상 알림",
      "사용자_행동": "이벤트 참여 및 보상 수령",
      "가시선_위_상호작용": "혜택 제공 안내, 보상 지급",
      "가시선_아래_상호작용": "이벤트 기획 및 실행, 보상 관리 시스템 운영",
      "지원_프로세스": "사용자 참여 유도 및 장기 고객 유치 전략 실행"
    }
  ]
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
    maxTokens: 1000,
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

  const res = await getBlueprintResponse(serviceDescription);

  // allow cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  // has been blocked by CORS policy: Request header field priority is not allowed by Access-Control-Allow-Headers in preflight response.
  response.send(res);
}
