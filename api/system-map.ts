import type { VercelRequest, VercelResponse } from '@vercel/node';

import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;
export const HEADERS = {
  'X-NCP-CLOVASTUDIO-API-KEY': process.env.REACT_APP_CLOVA_STUDIO_API_KEY,
  'X-NCP-APIGW-API-KEY': process.env.REACT_APP_APIGW_API_KEY,
  'X-NCP-CLOVASTUDIO-REQUEST-ID': process.env.REACT_APP_CLOVASTUDIO_REQUEST_ID,
  'Content-Type': 'application/json',
};

export const getSystemMapResponse = async (serviceDescription: string) => {
  const requestData = {
    messages: [
      {
        role: 'system',
        content: `
제시된 서비스를 주제로 시스템 맵을 작성할거야. 
서비스를 이루는 구성 요소를 구체적으로 간결하게 작성해줘. 
다음 항목을 포함해줘 : 중심 조직 및 제품, 이해관계자, 주요 이벤트 및 활동, 핵심 자원 및 인프라. 
이해관계자에는 다음 항목을 포함해줘 : 고객, 재정적 기관, 컨설턴트, 관리자, 공급자, 판매자.  
핵심 내용만 간결하게 항목화해서 작성해줘. 

도출된 중심 조직 및 제품, 이해관계자, 주요 이벤트 및 활동, 핵심 자원 및 인프라간 관계 및 영향력을 250자 이내로 간결하게 요약 정리해줘. 다른 추가설명 없이, 아래 예시와 같은 형태의 json으로 응답을 줘.

###예시###
{
  "중심 조직 및 제품": "- 중심 조직: 핫도그 판매점\\n- 제품: 핫도그, 음료수",
  "이해관계자": "- 고객: 학교 학생 및 교직원, 지역 주민\\n- 재정적 기관: 은행, 신용카드 회사\\n- 컨설턴트: 마케팅 전문가, 메뉴 개발자\\n- 관리자: 핫도그 장사 조직의 경영자\\n- 공급자: 핫도그 재료 납품 업체, 음료 납품 업체\\n- 판매자: 핫도그 장사 조직의 직원",
  "주요 이벤트 및 활동": "- 제품 준비: 재료 구매 및 핫도그 제작\\n- 판매 활동: 학교 앞에서 핫도그 판매\\n- 홍보 활동: 학교 주변에서 홍보 및 판촉 행사\\n- 고객 서비스: 고객 응대 및 피드백 수집",
  "핵심 자원 및 인프라": "- 핫도그 제조 장비 및 조리 도구\\n- 판매 공간 및 시설\\n- 재료 및 재고 관리 시스템\\n- 결제 수단(현금, 카드 등)",
  "요약": "- 고객의 구매는 핫도그 장사 조직의 매출과 수익에 직접적인 영향을 미침\\n- 재정적 기관의 자금 지원은 핫도그 장사 조직의 운영에 필수적임\\n- 컨설턴트의 경영 전략은 핫도그 장사 조직의 성과를 향상시키는 데 중요한 역할을 함\\n- 공급자의 핫도그 재료 품질은 핫도그 제품의 맛과 품질에 영향을 미침\\n- 판매자의 고객 서비스는 고객 만족도에 영향을 미침"
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

  const res = await getSystemMapResponse(serviceDescription);

  // allow cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  // has been blocked by CORS policy: Request header field priority is not allowed by Access-Control-Allow-Headers in preflight response.
  response.send(res);
}
