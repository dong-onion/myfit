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

  const getSectionContent = (section: string): string[] => {
    return section
      .split('\n')
      .slice(1) // 첫 번째 줄은 제목이므로 제외
      .map((line) => line.trim())
      .filter((line) =>
        line.startsWith('-') ? line.substring(1).trim() : line,
      ) // '-'가 있는 경우 제거
      .map((line) => (line.startsWith('-') ? line.substring(1).trim() : line)); // '-' 제거 후 반환
  };

  return {
    strength: getSectionContent(contentArray[0]),
    weakness: getSectionContent(contentArray[1]),
    opportunity: getSectionContent(contentArray[2]),
    threat: getSectionContent(contentArray[3]),
    result: getSectionContent(contentArray[4]),
    strategy: getSectionContent(contentArray[5]),
  };
};
