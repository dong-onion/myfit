import type { VercelRequest, VercelResponse } from '@vercel/node';

import axios from 'axios';

export const API_URL =
  'https://clovastudio.stream.ntruss.com/testapp/v1/chat-completions/HCX-003';
export const HEADERS = {
  'X-NCP-CLOVASTUDIO-API-KEY':
    'NTA0MjU2MWZlZTcxNDJiY8fwswjOopDqr75p2g5JJCDKUgw0DjuqdI/p3XyI+x4T',
  'X-NCP-APIGW-API-KEY': 'WqDLRGl7mz79mruN8azOuq4UWxpdT6SP6FAuv4RT',
  'X-NCP-CLOVASTUDIO-REQUEST-ID': '943f9d7f-0dd2-44fe-a5a0-9d2bbc416e73',
  'Content-Type': 'application/json',
};

export const getCustomerJourneyMapResponse = async (
  serviceDescription: string,
) => {
  const requestData = {
    messages: [
      {
        role: 'system',
        content: `
제시된 서비스로 고객여정맵을 작성할거야.
서비스의 주 고객이라고 생각하고 서비스를 이용하기 전부터 이용한 이후 행동까지 세세하게 고객여정지도를 5단계로 작성해줘. 간결하게 작성해줘.
다음 항목을 포함해줘: 여정 단계, 목적, 감정, 행동, 니즈, 솔루션.

아래 예시와 같은 형태로 생성해줘.

1. 서비스 인지
- 목적 : 20대에게 맞는 전통주 구독 서비스 발견
- 감정 : 호기심
- 행동 : SNS, 인터넷 검색 등을 통해 서비스 존재 확인
- 니즈 : 나에게 맞는 전통주 추천
- 솔루션 : SNS 광고, 블로그 후기 등을 통한 홍보

2. 서비스 탐색
- 목적 : 서비스 특징 파악 및 구독 여부 결정
- 감정 : 흥미로움
- 행동 : 홈페이지 방문하여 서비스 설명, 가격, 배송 주기 등 확인
- 니즈 : 내 취향에 맞는 전통주 찾기
- 솔루션 : 큐레이션 시스템으로 개인 맞춤형 전통주 추천

3. 구독 신청
- 목적 : 원하는 기간 동안 전통주 구독 시작
- 감정 : 만족스러움
- 행동 : 구독 페이지에서 결제 수단 선택 후 구독 신청 완료
- 니즈 : 합리적인 가격 
- 솔루션 : 할인 이벤트나 정기구독 프로모션 실시

4. 제품 수령
- 목적 : 집에서 편하게 전통주 즐기기
- 감정 : 즐거움
- 행동 : 택배 상자 개봉 후 제품 상태 확인
- 니즈 : 신선한 술
- 솔루션 : 냉장배송이나 당일배송 도입

5. 서비스 재이용
- 목적 : 새로운 전통주 경험하고자 함
- 감정 : 기대감
- 행동 : 구독 연장 또는 다음 회차 주문
- 니즈 : 다양한 종류의 전통주
- 솔루션 : 시즌별 한정 상품 출시 혹은 테마별 기획전 개최
        `,
      },
      {
        role: 'user',
        content: `지금 구상하고 있는 사업은 ${serviceDescription}이야.`,
      },
    ],
    topP: 0.1,
    topK: 0,
    maxTokens: 500,
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

  const res = await getCustomerJourneyMapResponse(serviceDescription);

  // allow cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  // has been blocked by CORS policy: Request header field priority is not allowed by Access-Control-Allow-Headers in preflight response.
  response.send(res);
}
