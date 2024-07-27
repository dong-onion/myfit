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

export const getBMCanvasResponse = async (serviceDescription: string) => {
  const requestData = {
    messages: [
      {
        role: 'system',
        content: `
제시된 서비스와 고객을 주제로 비즈니스 모델 캔버스를 구체적으로 작성해줘. 간결한 문체로 작성해줘.
다음 항목을 포함해줘 : 문제, 현재 문제를 해결하고 있는 대안, 고객 세그먼트, 얼리어답터, 가치 제안, 상위 개념, 솔루션, 채널, 수익 흐름,  채널, 비용구조, 핵심지표, 경쟁우위.

아래 예시와 같은 형태로 만들어줘.

1. 문제
- 20대 젊은 층에서 전통주가 올드하다는 인식이 있어 구매가 적음
- 다양한 전통주를 경험할 기회가 적음

2. 현재 문제를 해결하고 있는 대안
- 전통주 오프라인 매장 방문
- 인터넷 검색을 통한 전통주 구매

3. 고객 세그먼트
- 20대 후반 ~ 30대 초반 

4. 얼리어답터
- 평소 술에 관심이 많으며 새로운 주류 문화를 선도하는 사람들

5. 가치 제안
- 매달 다른 종류의 전통주를 배송하여 다양한 맛과 향을 즐길 수 있도록 함
- 큐레이션 된 전통주 카드 제공: 각 전통주의 역사, 특징, 어울리는 음식 등을 설명

6. 상위 개념
- 전통주 대중화

7. 솔루션
- 자체 물류 시스템 구축 및 활용
- 생산자와 직접 계약을 통해 안정적인 수급 확보

8. 채널
- 웹사이트 운영 / SNS 홍보

9. 수익 흐름
- 구독료 수입 (월 정액)
- 전통주 판매 수수료

10. 비용 구조
- 물류비
- 인건비
- 마케팅비용

11. 핵심 지표
- 월간 활성 이용자 수(MAU)
- 재구매율

12. 경쟁 우위
- 차별화된 상품 구성 - 시중에서 구하기 어려운 전통주 제공
- 편리한 구독 서비스 제공
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

  const res = await getBMCanvasResponse(serviceDescription);

  // allow cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  // has been blocked by CORS policy: Request header field priority is not allowed by Access-Control-Allow-Headers in preflight response.
  response.send(res);
}
