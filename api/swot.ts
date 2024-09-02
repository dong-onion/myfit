import type { VercelRequest, VercelResponse } from '@vercel/node';

import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;
export const HEADERS = {
  'X-NCP-CLOVASTUDIO-API-KEY': process.env.REACT_APP_CLOVA_STUDIO_API_KEY,
  'X-NCP-APIGW-API-KEY': process.env.REACT_APP_APIGW_API_KEY,
  'X-NCP-CLOVASTUDIO-REQUEST-ID': process.env.REACT_APP_CLOVASTUDIO_REQUEST_ID,
  'Content-Type': 'application/json',
};

const levelDescriptions = [
  '지금은 창업 초기 단계야. 문제 이해와 시장 조사가 필요해.',
  '창업 성장 단계야. 사업 구체화와 아이디어 검증이 필요해.',
  '창업 성숙 단계야. 사업 확장 또는 방향 전환을 위한 전략이 필요해.',
];

export const fetchSWOTAnalysis = async (
  serviceDescription: string,
  level: number,
) => {
  const requestData = {
    messages: [
      {
        role: 'user',
        content: `지금 구상하고 있는 사업은 "${serviceDescription}"이야.${levelDescriptions[level]} 
        시된 사업 아이템과 창업 단계를 토대로 SWOT 분석을 진행해줘.
        그리고 결과 내용을 바탕으로 분석 결과 요약을 작성해줘. 서비스가 성장하기 위해 필요한 전략와 진행 방향에 대해 간결히 제안해줘.  답변해줘. 그리고 '5. 분석 결과 요약' 의 글자수는 190자 이상 250자 이하로 작성해줘
        
        다른 추가설명 없이, 아래 예시와 같은 형태로 응답을 줘.
        
        1. 강점
        - {강점1}
        - {강점2}
        - {강점3}
        
        2. 약점
        - {약점1}
        - {약점2}
        - {약점3}
        
        3. 기회
        - {기회1}
        - {기회2} 
        - {기회3}
        
        4. 위협
        - {위협1}
        - {위협2}
        - {위협3}
        
        5. 분석 결과 요약
        {분석 결과 요약 내용}
        
        6. 성장을 위한 전략과 진행 방향
        - {전략1}
        - {전략2}
        - {전략3}
        `,
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

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get SWOT Analysis: ' + (error as Error).message);
  }
};

export default async function (
  request: VercelRequest,
  response: VercelResponse,
) {
  const { serviceDescription, level } = request.query;
  if (!serviceDescription || !level) {
    response.status(400).send('Invalid query parameters');
    return;
  } else if (
    typeof serviceDescription !== 'string' ||
    typeof level !== 'string'
  ) {
    response.status(400).send('Invalid query parameters');
    return;
  }

  const levelNumber = parseInt(level, 10);

  const swotResult = await fetchSWOTAnalysis(serviceDescription, levelNumber);

  // allow cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  // has been blocked by CORS policy: Request header field priority is not allowed by Access-Control-Allow-Headers in preflight response.
  response.send(swotResult);
}
