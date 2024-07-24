export interface SWOTAnalysis {
  strength: string[];
  weakness: string[];
  opportunity: string[];
  threat: string[];
  result: string[];
  strategy: string[];
}

// SWOT 분석 결과를 파싱하는 함수
export const parseSWOTAnalysis = (content: string): SWOTAnalysis | null => {
  const contentArray = content.split('\n\n');
  if (contentArray.length !== 6) {
    console.error('SWOT Analysis content is not in the right format');
    return null;
  }

  return {
    strength: contentArray[0]
      .split('\n')
      .slice(1)
      .join('\n')
      .split('\n')
      .map((item) =>
        item.startsWith('- ') ? item.slice(2).trim() : item.trim(),
      ),
    weakness: contentArray[1]
      .split('\n')
      .slice(1)
      .join('\n')
      .split('\n')
      .map((item) =>
        item.startsWith('- ') ? item.slice(2).trim() : item.trim(),
      ),
    opportunity: contentArray[2]
      .split('\n')
      .slice(1)
      .join('\n')
      .split('\n')
      .map((item) =>
        item.startsWith('- ') ? item.slice(2).trim() : item.trim(),
      ),
    threat: contentArray[3]
      .split('\n')
      .slice(1)
      .join('\n')
      .split('\n')
      .map((item) =>
        item.startsWith('- ') ? item.slice(2).trim() : item.trim(),
      ),
    result: contentArray[4]
      .split('\n')
      .slice(1)
      .join('\n')
      .split('\n')
      .map((item) =>
        item.startsWith('- ') ? item.slice(2).trim() : item.trim(),
      ),
    strategy: contentArray[5]
      .split('\n')
      .slice(1)
      .join('\n')
      .split('\n')
      .map((item) =>
        item.startsWith('- ') ? item.slice(2).trim() : item.trim(),
      ),
  };
};
