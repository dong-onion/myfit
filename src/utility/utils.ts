import { WeaknessType } from './constants';

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

// totalscore 배열을 받아서 타입 별로 평균 계산하는 함수
export const calculateScore = (totalScores: number[]): number[] => {
  const entrepreneurship =
    Math.round(
      (totalScores.slice(0, 3).reduce((acc, cur) => acc + cur, 0) / 3) * 10,
    ) / 10;
  const marketFeasibility =
    Math.round(
      (totalScores.slice(3, 6).reduce((acc, cur) => acc + cur, 0) / 3) * 10,
    ) / 10;
  const customerDefinition =
    Math.round(
      (totalScores.slice(6, 9).reduce((acc, cur) => acc + cur, 0) / 3) * 10,
    ) / 10;
  const objectiveInformation =
    Math.round(
      (totalScores.slice(9, 12).reduce((acc, cur) => acc + cur, 0) / 3) * 10,
    ) / 10;
  const technologicalCompetitiveness =
    Math.round(
      (totalScores.slice(12, 14).reduce((acc, cur) => acc + cur, 0) / 2) * 10,
    ) / 10;
  const management =
    Math.round(
      (totalScores.slice(14, 16).reduce((acc, cur) => acc + cur, 0) / 2) * 10,
    ) / 10;
  return [
    entrepreneurship,
    marketFeasibility,
    customerDefinition,
    objectiveInformation,
    technologicalCompetitiveness,
    management,
  ];
};

export const weaknessTypeConverter = (type: string): string => {
  if (type === 'ENTREPRENEURSHIP') return '창업 경험';
  if (type === 'MARKETFEASIBILITY') return '시장 타당성';
  if (type === 'CUSTOMERDEFINITION') return '고객 정의';
  if (type === 'OBJECTIVEINFORMATION') return '객관적 정보';
  if (type === 'TECHNOLOGICALCOMPETITIVENESS') return '기술 경쟁력';
  if (type === 'MANAGEMENT') return '경영 관리';

  return '창업 경험';
};
