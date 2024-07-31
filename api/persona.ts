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

export const getPersonaResponse = async (serviceDescription: string) => {
  const requestData = {
    messages: [
      {
        role: 'system',
        content: `
제시된 서비스와 고객을 주제로 고객의 요구와 행동이 어떻게 변화하게 될지 페르소나를 하나 생성해줘. 
고객을 세분화해서 구체적으로 알려줘. 간결하게 설명해줘. 
다음 항목을 포함해줘: 페르소나 소개, 배경, 목표, 동기, 목표, 소비습관, 성격 정보, 페인포인트, 페르소나 선정이유.

다른 추가설명 없이, 아래 예시와 같은 형태로 응답을 줘.

- 소개 : 건강 관리에 관심이 많은 40대 직장인 남성
- 배경 : 서울에 거주하는 45세 직장인 남성으로, 고혈압과 당뇨병 등의 질환을 앓고 있어 건강 관리에 관심이 많음
- 목표 : 혈압과 혈당 수치를 정상 범위로 유지하고, 건강한 식습관을 형성하고자 함
- 동기 : 가족력으로 인해 건강에 대한 우려가 있으며, 건강 문제로 인해 일상생활에 지장을 받는 경우가 많아짐
- 소비 습관 : 매일 아침마다 샐러드를 섭취하며, 가격보다는 영양성분과 맛을 중요시 함
- 성격 정보 : 적극적이고 활동적인 성격으로, 건강 관련 정보를 수집하고 이를 실천하려 노력함
- 페인 포인트 : 바쁜 일상으로 인해 직접 샐러드를 준비하기 어려우며, 다양한 종류의 샐러드를 찾기 어려움
- 페르소나 선정 이유 : 건강 관리에 관심이 많은 사람들 중에서 가장 대표적인 유형이며, 샐러드 배달 앱을 통해 건강한 식습관을 유지할 수 있을 것으로 기대됨
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

  const res = await getPersonaResponse(serviceDescription);

  // allow cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  // has been blocked by CORS policy: Request header field priority is not allowed by Access-Control-Allow-Headers in preflight response.
  response.send(res);
}
