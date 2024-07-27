export interface SWOTAnalysis {
  strength: string[];
  weakness: string[];
  opportunity: string[];
  threat: string[];
  result: string;
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
      .map((strength) => strength.trim().slice(2)),
    weakness: contentArray[1]
      .split('\n')
      .slice(1)
      .map((weakness) => weakness.trim().slice(2)),
    opportunity: contentArray[2]
      .split('\n')
      .slice(1)
      .map((opportunity) => opportunity.trim().slice(2)),
    threat: contentArray[3]
      .split('\n')
      .slice(1)
      .map((threat) => threat.trim()),
    result: contentArray[4].split('\n').slice(1).join('\n').trim(),
    strategy: contentArray[5]
      .split('\n')
      .slice(1)
      .map((strategy) => strategy.trim().slice(2)),
  };
};

interface Persona {
  introduction: string; // 소개
  background: string; // 배경
  goal: string; // 목표
  motivation: string; // 동기
  consumptionHabit: string; // 소비 습관
  personality: string; // 성격 정보
  painPoint: string; // 페인 포인트
  reason: string; // 페르소나 선정 이유
}

// parsePersona
export const parsePersona = (content: string) => {
  // - 소개 : 다이어트를 결심한 20대 여성
  // - 배경 : 서울에 거주하는 25세 대학생 여성으로, 최근 급격한 체중 증가로 인해 다이어트를 결심함
  // - 목표 : 3개월 내에 5kg 감량 및 체지방률 감소
  // - 동기 : 외모에 대한 자신감 하락과 건강 악화로 인한 불안감
  // - 소비 습관 : 평소 식사량이 많고, 디저트나 음료 등 단 음식을 즐겨 먹음
  // - 성격 정보 : 계획적이고 꼼꼼한 성격으로, 일정이나 식단 등을 체계적으로 관리하고자 함
  // - 페인 포인트 : 혼자서 운동 계획을 세우고 실행하는 것이 어렵고, 의지가 부족하여 중도 포기하는 경우가 많음
  // - 페르소나 선정 이유 : 다이어트를 결심한 사람들 중에서 가장 일반적인 유형이며, 이들이 겪는 페인 포인트를 해결해 줄 수 있음
  const contentArray = content.split('\n');
  const persona: Persona = {
    introduction: contentArray[0].split(':')[1].trim(),
    background: contentArray[1].split(':')[1].trim(),
    goal: contentArray[2].split(':')[1].trim(),
    motivation: contentArray[3].split(':')[1].trim(),
    consumptionHabit: contentArray[4].split(':')[1].trim(),
    personality: contentArray[5].split(':')[1].trim(),
    painPoint: contentArray[6].split(':')[1].trim(),
    reason: contentArray[7].split(':')[1].trim(),
  };

  return persona;
};

interface BMCanvas {
  problems: string[]; // 문제
  alternatives: string[]; // 현재 문제를 해결하고 있는 대안
  customerSegments: string[]; // 고객 세그먼트
  earlyAdopters: string[]; // 얼리어답터
  valuePropositions: string[]; // 가치 제안
  highConcept: string[]; // 상위 개념
  solution: string[]; // 솔루션
  channels: string[]; // 채널
  revenueStreams: string[]; // 수익 흐름
  costStructure: string[]; // 비용 구조
  keyMetrics: string[]; // 핵심 지표
  competitiveAdvantage: string[]; // 경쟁 우위
}
//parseBMCanvas
export const parseBMCanvas = (content: string) => {
  const contentArray = content.split('\n\n');
  const bmCanvas: BMCanvas = {
    problems: contentArray[0]
      .split('\n')
      .slice(1)
      .map((problem) => problem.trim().slice(2)),
    alternatives: contentArray[1]
      .split('\n')
      .slice(1)
      .map((alternative) => alternative.trim().slice(2)),
    customerSegments: contentArray[2]
      .split('\n')
      .slice(1)
      .map((customerSegment) => customerSegment.trim().slice(2)),
    earlyAdopters: contentArray[3]
      .split('\n')
      .slice(1)
      .map((earlyAdopter) => earlyAdopter.trim().slice(2)),
    valuePropositions: contentArray[4]
      .split('\n')
      .slice(1)
      .map((valueProposition) => valueProposition.trim().slice(2)),
    highConcept: contentArray[5]
      .split('\n')
      .slice(1)
      .map((highConcept) => highConcept.trim().slice(2)),
    solution: contentArray[6]
      .split('\n')
      .slice(1)
      .map((solution) => solution.trim().slice(2)),
    channels: contentArray[7]
      .split('\n')
      .slice(1)
      .map((channel) => channel.trim().slice(2)),
    revenueStreams: contentArray[8]
      .split('\n')
      .slice(1)
      .map((revenueStream) => revenueStream.trim().slice(2)),
    costStructure: contentArray[9]
      .split('\n')
      .slice(1)
      .map((costStructure) => costStructure.trim().slice(2)),
    keyMetrics: contentArray[10]
      .split('\n')
      .slice(1)
      .map((keyMetric) => keyMetric.trim().slice(2)),
    competitiveAdvantage: contentArray[11]
      .split('\n')
      .slice(1)
      .map((competitiveAdvantage) => competitiveAdvantage.trim().slice(2)),
  };

  return bmCanvas;
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
