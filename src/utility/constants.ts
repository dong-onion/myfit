import {
  benchmarking,
  businessModelCanvas,
  customerDefinitionHeader,
  customerDefinitionInfo,
  customerJourneyMap,
  entrepreneurshipHeader,
  entrepreneurshipInfo,
  managementHeader,
  managementInfo,
  marketFeasibilityHeader,
  marketFeasibilityInfo,
  objectiveInformationHeader,
  objectiveInformationInfo,
  persona,
  serviceBlueprint,
  systemMap,
  technologicalCompetitivenessHeader,
  technologicalCompetitivenessInfo,
  weakneesTypeFooter1,
  weakneesTypeFooter2,
} from '@/assets';

export const queryKeys = {
  SWOT_ANALYSIS: 'swotAnalysis',
  OVERALL_ANALYSIS: 'overallAnalysis',
  PERSONA: 'persona',
  BUSINESS_MODEL_CANVAS: 'businessModelCanvas',
  CUSTOMER_JOURNEY_MAP: 'customerJourneyMap',
  BLUEPRINT: 'blueprint',
  SYSTEM_MAP: 'systemMap',
  BENCHMARK: 'benchmark',
};

export const HEADER_HEIGHT = '60px';

export const QUESTIONS: { [key: number]: string[] } = {
  0: ['창업 아이템은 초기 아이디어에서 많이 변경되었어요.'],
  1: ['창업하는 사업에 대해 충분한 경험 또는 지식이 있어요.'],
  2: ['위험부담이 있더라도 사업 기회를 쟁취하는 것이 중요해요'],
  3: ['내 사업의 컨셉과 수익구조가 무엇인지 명확히 대답할 수 있어요.'],
  4: ['내 사업이 가지고 있는 핵심 역량이 무엇인지 알고 있어요.'],
  5: ['진입하는 시장의 최근 동향을 알고 있어요.'],
  6: ['고객이 어떤 불편함을 가지고 있는지 명확히 알고 있어요.'],
  7: ['창업 아이템의 핵심 고객이 명확히 정해져 있어요.'],
  8: ['타겟 시장이 어떤 시장인지 알고 규모와 경쟁 강도를 이해하고 있어요.'],
  9: ['사업에 필요한 이해관계자와 상호작용에 대해 명확히 이해하고 있어요.'],
  10: ['남들보다 경쟁사의 동향을 빠르게 파악하고 있어요.'],
  11: ['사용자나 주변에 자문을 구하고 그에 따라 방향을 수정 보완하고 있어요.'],
  12: ['경쟁사와 비교했을 때 나만의 차별화되는 기술이 있어요.'],
  13: ['창업 아이템을 구현하기 위한 전문 인력이 확보되어 있어요.'],
  14: ['사업 운영에 분명한 비전이 있고 모두가 비전에 공감하고 있어요.'],
  15: ['업무 분업이 명확하고 관리하에 체계적으로 진행되고 있어요.'],
};

export type WeaknessType =
  | 'ENTREPRENEURSHIP'
  | 'MARKETFEASIBILITY'
  | 'CUSTOMERDEFINITION'
  | 'OBJECTIVEINFORMATION'
  | 'TECHNOLOGICALCOMPETITIVENESS'
  | 'MANAGEMENT';

export const WEAKNESS_TYPE: WeaknessType[] = [
  'ENTREPRENEURSHIP',
  'MARKETFEASIBILITY',
  'CUSTOMERDEFINITION',
  'OBJECTIVEINFORMATION',
  'TECHNOLOGICALCOMPETITIVENESS',
  'MANAGEMENT',
];

export const WEAKNESS_TYPE_INFO: {
  [key in WeaknessType]: {
    title: string;
    contentInfo: string;
    headerBackground: string;
    footerBackground: string;
    serviceTool: string[];
  };
} = {
  ENTREPRENEURSHIP: {
    title: '창업 경험 부족',
    contentInfo: entrepreneurshipInfo,
    headerBackground: entrepreneurshipHeader,
    footerBackground: weakneesTypeFooter1,
    serviceTool: [persona, systemMap],
  },
  MARKETFEASIBILITY: {
    title: '시장 타당성 부족',
    contentInfo: marketFeasibilityInfo,
    headerBackground: marketFeasibilityHeader,
    footerBackground: weakneesTypeFooter1,
    serviceTool: [customerJourneyMap, businessModelCanvas],
  },
  CUSTOMERDEFINITION: {
    title: '고객 정의 부족',
    contentInfo: customerDefinitionInfo,
    headerBackground: customerDefinitionHeader,
    footerBackground: weakneesTypeFooter1,
    serviceTool: [persona, customerJourneyMap],
  },
  OBJECTIVEINFORMATION: {
    title: '객관적 정보 부족',
    contentInfo: objectiveInformationInfo,
    headerBackground: objectiveInformationHeader,
    footerBackground: weakneesTypeFooter1,
    serviceTool: [benchmarking, systemMap],
  },
  TECHNOLOGICALCOMPETITIVENESS: {
    title: '기술 경쟁력 부족',
    contentInfo: technologicalCompetitivenessInfo,
    headerBackground: technologicalCompetitivenessHeader,
    footerBackground: weakneesTypeFooter2,
    serviceTool: [benchmarking, serviceBlueprint],
  },
  MANAGEMENT: {
    title: '경영 관리 부족',
    contentInfo: managementInfo,
    headerBackground: managementHeader,
    footerBackground: weakneesTypeFooter2,
    serviceTool: [businessModelCanvas, serviceBlueprint],
  },
};

export const SUBCATEGORIES = [
  '기존 아이디어 기술 고집',
  '관련 지식 및 경험 부족',
  '소극적 태도',
  '사업 타당성 평가 부족',
  '내부 환경 파악 부족',
  '외부 환경 파악 부족',
  '고객 니즈 파악 어려움',
  '핵심 고객 정의 어려움',
  '시장 세분화 어려움',
  '사업 파악 부족',
  '시장 정보 습득 부족',
  '피드백 및 학습 부족',
  '기술 개발 부족',
  '전문인력 확보 부족',
  '기업 운영의 어려움',
  '관리 시스템 부족',
];

export const ROUTES_PATH = {
  home: '/',
  serviceRegistration: '/search',
  firstResult: '/swot/result',
  testStart: '/type',
  test: '/type/test',
  secondResult: '/type/result',
  persona: '/tools/psn',
  busineesModelCanvas: '/tools/bmc',
  customerJourneyMap: '/tools/cjm',
  bluePrint: '/tools/blp',
  systemMap: '/tools/stm',
  benchmarking: '/tools/bcm',
  swot: '/tools/swot',
  main: '/main',
};

export const SESSION_KEYS = {
  serviceDescription: 'serviceDescription',
  level: 'level',
  totalScores: 'totalScores',
};
