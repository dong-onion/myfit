import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;
export const HEADERS = {
  'X-NCP-CLOVASTUDIO-API-KEY': process.env.REACT_APP_CLOVA_STUDIO_API_KEY,
  'X-NCP-APIGW-API-KEY': process.env.REACT_APP_APIGW_API_KEY,
  'X-NCP-CLOVASTUDIO-REQUEST-ID': process.env.REACT_APP_CLOVASTUDIO_REQUEST_ID,
  'Content-Type': 'application/json',
};

export const getOverallAnalysisResponse = async (
  serviceDescription: string,
  categories: string,
  weakness: string,
) => {
  const requestData = {
    messages: [
      {
        role: 'system',
        content: `
나는 1번에 제시된 서비스로 사업을 진행하고 있는 창업가야.
그리고 2번에 제시한 3가지의 문제점을 가지고 있고, 3번에 제안한 요인이 취약한 유형이야.

나의 문제와 관련된 개선점과 앞으로 어떻게 창업 아이템을 보완해야할지 문단 구분없이 300자 이내로 구체적으로 조언해줘. 그리고 '-요'로 끝나는 친절한 말투로 말해줘. 

###예시### 
시장 세분화가 취약한 유형이군요. 우선 현재 제공되는 서비스에 대해 명확하게 파악할 필요가 있어 보여요. 어떤 사람들이 이 서비스를 이용하는지, 그들의 니즈는 무엇인지 등을 충분히 고민해 보세요. 또 경쟁 업체들은 어떤 전략을 취하고 있는지도 분석해 봐야 합니다. 이런 과정을 통해 얻은 인사이트를 바탕으로 새로운 마케팅 전략을 수립하거나 기존 서비스를 보완한다면 더욱 성장할 수 있을 거예요.  
`,
      },
      {
        role: 'user',
        content: `
1. ${serviceDescription}
2. ${categories}
3. ${weakness}
        `,
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
  const { serviceDescription, categories, weakness } = request.query;
  if (!serviceDescription || !categories || !weakness) {
    response.status(400).send('Invalid query parameters');
    return;
  } else if (
    typeof serviceDescription !== 'string' ||
    typeof categories !== 'string' ||
    typeof weakness !== 'string'
  ) {
    response.status(400).send('Invalid query parameters');
    return;
  }

  const res = await getOverallAnalysisResponse(
    serviceDescription,
    categories,
    weakness,
  );

  // allow cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  // has been blocked by CORS policy: Request header field priority is not allowed by Access-Control-Allow-Headers in preflight response.
  response.send(res);
}
