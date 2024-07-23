export interface SWOTAnalysis {
  strength: string;
  weakness: string;
  opportunity: string;
  threat: string;
  result: string;
  strategy: string;
}

// SWOT 분석 결과를 파싱하는 함수
export const parseSWOTAnalysis = (content: string): SWOTAnalysis | null => {
  // console.log(content);
  const contentArray = content.split('\n');

  console.log(contentArray.length);
  if (contentArray.length !== 6) {
    console.error('SWOT Analysis content is not in the right format');
    return null;
  }

  return {
    strength: contentArray[0].split('\n').slice(1).join('\n').trim(),
    weakness: contentArray[1].split('\n').slice(1).join('\n').trim(),
    opportunity: contentArray[2].split('\n').slice(1).join('\n').trim(),
    threat: contentArray[3].split('\n').slice(1).join('\n').trim(),
    result: contentArray[4].split('\n').slice(1).join('\n').trim(),
    strategy: contentArray[5].split('\n').slice(1).join('\n').trim(),
  };
};
