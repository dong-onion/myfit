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
};

export const HEADER_HEIGHT = '60px';

export const QUESTIONS: { [key: number]: string[] } = {
  0: ['현재 창업 아이템은 초기 아이디어에서 많이 변경되었다.'],
  1: ['창업하는 사업에 대해 충분한 경험 또는 지식이 있다.'],
  2: ['위험부담이 있더라도 사업 기회를 쟁취하는 것이 중요하다.'],
  3: [
    '내 사업에 대해 아래 비즈니스 구성 요소가 무엇인지 명확히 대답할 수 있다.',
    '(문제, 솔루션, 가치 제안, 고객 세그먼트, 채널, 경쟁우위, 핵심지표, 비용구조, 수익 흐름)',
  ],
  4: ['내부 핵심 역량이 무엇인지 파악하고 있다.'],
  5: ['진입하는 시장의 최근 동향을 파악하고 있다.'],
  6: [
    '고객이 어떤 불편함을 가지고 있는지 명확히 알고 있다.',
    '(또는 이에 대해 조사를 통해 확인하였다.)',
  ],
  7: [
    '창업 아이템의 핵심 고객이 명확히 정해져 있다.',
    '(또는 이에 대해 조사를 통해 확인하였다.)',
  ],
  8: ['타겟 시장이 어떤 시장인지 알고 규모와 경쟁강도를 파악하고 있다.'],
  9: [
    '사업에 필요한 이해관계자와 관계자 간 상호작용에 대해 명확히 파악하고 있다.',
  ],
  10: ['남들보다 경쟁사의 동향을 빠르게 파악하고 있는 편이다.'],
  11: [
    '사용자 또는 외부 전문가에게 자문을 구하고 그에 따라 방향을 수정 보완하고 있다.',
  ],
  12: ['경쟁사와 비교했을 때 자사만의 차별화되는 기술이 있다.'],
  13: ['창업 아이템을 구현하기 위한 자금이 충분히 확보되어 있다.'],
  14: [
    '사업체 운영에 분명한 비전이 있으며 모두가 동일한 비전을 공감하고 있다.',
  ],
  15: ['업무 분업이 명확하고 관리 하에 체계적으로 진행되고 있다.'],
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
    serviceTool: [businessModelCanvas, systemMap],
  },
  TECHNOLOGICALCOMPETITIVENESS: {
    title: '기술 경쟁력 부족',
    contentInfo: technologicalCompetitivenessInfo,
    headerBackground: technologicalCompetitivenessHeader,
    footerBackground: weakneesTypeFooter2,
    serviceTool: [businessModelCanvas, serviceBlueprint],
  },
  MANAGEMENT: {
    title: '경영 관리 부족',
    contentInfo: managementInfo,
    headerBackground: managementHeader,
    footerBackground: weakneesTypeFooter2,
    serviceTool: [businessModelCanvas, serviceBlueprint],
  },
};
