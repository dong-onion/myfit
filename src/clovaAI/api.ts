import axios from 'axios';

const API_URL =
  'https://clovastudio.stream.ntruss.com/testapp/v1/chat-completions/HCX-003';
const HEADERS = {
  'X-NCP-CLOVASTUDIO-API-KEY':
    'NTA0MjU2MWZlZTcxNDJiY8fwswjOopDqr75p2g5JJCDKUgw0DjuqdI/p3XyI+x4T',
  'X-NCP-APIGW-API-KEY': 'WqDLRGl7mz79mruN8azOuq4UWxpdT6SP6FAuv4RT',
  'X-NCP-CLOVASTUDIO-REQUEST-ID': '943f9d7f-0dd2-44fe-a5a0-9d2bbc416e73',
  'Content-Type': 'application/json',
};

// SWOT 분석 요청을 처리하는 함수
export const fetchSWOTAnalysis = async (serviceDescription: string) => {
  const requestData = {
    messages: [
      {
        role: 'user',
        content: `지금 구상하고 있는 사업은 ${serviceDescription}이야. 지금은 창업 초기 단계야. 문제 이해와 시장 조사가 필요해. \n
        제시된 서비스를 주제로 SWOT 분석을 진행해줘.\n
        그리고 결과 내용을 바탕으로 분석 결과 요약을 200자 이내로 작성하고 , 마지막에는 서비스가 성장하기 위해 필요한 전략와 진행 방향에 대해 간결히 제안해줘.\n
        다음과 같은 형식으로 작성해줘.\n
        1. 강점\n
        -----
        2. 약점\n
        -----
        3. 기회\n
        -----
        4. 위협\n
        -----
        5. 분석 결과 요약\n
        -----
        6. 성장을 위한 전략과 진행 방향\n
        ----- 
        `,
      },
    ],
    topP: 0.8,
    topK: 0,
    maxTokens: 3000,
    temperature: 0.5,
    repeatPenalty: 5.0,
    stopBefore: [],
    includeAiFilters: true,
    seed: 0,
  };

  try {
    const response = await axios.post(API_URL, requestData, {
      headers: HEADERS,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get SWOT Analysis: ' + (error as Error).message);
  }
};
