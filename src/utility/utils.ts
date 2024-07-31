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
  let contentArray = content.split('\n\n');
  if (contentArray.length !== 6) {
    // 뒤에서부터 6개의 element를 가져옴
    contentArray = contentArray.slice(-6);
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
      .map((threat) => threat.trim().slice(2)),
    result: contentArray[4].split('\n')[1].trim(),
    strategy: contentArray[5]
      .split('\n')
      .slice(1)
      .map((strategy) => strategy.trim().slice(2)),
  };
};

export interface Persona {
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
  let contentArray = content.split('\n');
  if (contentArray.length !== 8) {
    // 뒤에서부터 8개의 element를 가져옴
    contentArray = contentArray.slice(-8);
  }
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

export interface BMCanvas {
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
  let contentArray = content.split('\n\n');

  if (contentArray.length !== 12) {
    // 뒤에서부터 12개의 element를 가져옴
    contentArray = contentArray.slice(-12);
  }

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

export interface CustomerJourneyMapItem {
  stepName: string;
  purpose: string;
  emotion: string;
  action: string;
  need: string;
  solution: string;
}

// parseCustomerJourneyMap
export const parseCustomerJourneyMap = (content: string) => {
  // 1. 서비스 인지
  // - 목적 : 체계적인 운동 계획 수립 필요성 인식
  // - 감정 : 막막함
  // - 행동 : 인터넷 검색, SNS 등을 통해 운동 계획 코칭 서비스 발견
  // - 니즈 : 효과적인 운동 방법 제시
  // - 솔루션 : 유튜브 채널 개설, 인스타그램 광고 등을 통한 홍보
  //
  // 2. 서비스 탐색
  // - 목적 : 서비스 특징 파악 및 이용 여부 결정
  // - 감정 : 신뢰감
  // - 행동 : 홈페이지 방문하여 서비스 소개, 요금제, 제공되는 콘텐츠 등 확인
  // - 니즈 : 전문적인 운동 지식 제공
  // - 솔루션 : 전문가와의 상담 기능 제공, 실제 회원들의 후기 공개
  //
  // 3. 가입 및 결제
  // - 목적 : 서비스 이용 시작
  // - 감정 : 기대감
  // - 행동 : 회원가입 절차 진행 후 결제 수단 선택하여 결제 완료
  // - 니즈 : 간편한 가입 절차
  // - 솔루션 : 카카오톡, 네이버 등 연동 가능한 로그인 방식 제공
  //
  // 4. 운동 계획 수립 및 실행
  // - 목적 : 건강한 몸 만들기
  // - 감정 : 뿌듯함
  // - 행동 : AI 코치가 제안한 운동 계획대로 운동 실천
  // - 니즈 : 실시간 피드백 제공
  // - 솔루션 : 운동 중 심박수, 칼로리 소모량 등 측정 가능한 스마트워치 연동
  //
  // 5. 서비스 재이용
  // - 목적 : 지속적인 운동 습관 형성
  // - 감정 : 성취감
  // - 행동 : 추가 결제하거나 갱신하여 서비스 계속 이용
  // - 니즈 : 꾸준한 동기부여
  // - 솔루션 : 목표 달성 시 보상 제공, 챌린지 프로그램 운영
  let contentArray = content.split('\n\n');

  if (contentArray.length !== 5) {
    // 뒤에서부터 5개의 element를 가져옴
    contentArray = contentArray.slice(-5);
  }

  const customerJourneyMap: CustomerJourneyMapItem[] = contentArray.map(
    (step) => {
      const stepArray = step.split('\n');
      const customerJourneyMapItem: CustomerJourneyMapItem = {
        stepName: stepArray[0].split('.')[1].trim(),
        purpose: stepArray[1].split(':')[1].trim(),
        emotion: stepArray[2].split(':')[1].trim(),
        action: stepArray[3].split(':')[1].trim(),
        need: stepArray[4].split(':')[1].trim(),
        solution: stepArray[5].split(':')[1].trim(),
      };
      return customerJourneyMapItem;
    },
  );

  return customerJourneyMap;
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
