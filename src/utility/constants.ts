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
import { title } from 'process';

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

interface ServiceToolInfo {
  title: string;
  titleContent: string;
  purposeContent: string;
  tipContent: string;
}

export type ServiceTool =
  | 'psn'
  | 'bmc'
  | 'blp'
  | 'stm'
  | 'bcm'
  | 'swot'
  | 'cjm';
type ServiceToolInfoRecord = Record<ServiceTool, ServiceToolInfo>;

export const SERVICE_TOOL_INFO: ServiceToolInfoRecord = {
  psn: {
    title: '퍼소나',
    titleContent:
      '일련의 행동과 요구 사항을 기반으로 다양한 유형의 사용자를 설명합니다.',
    purposeContent:
      '제품 또는 서비스를 제작하는 과정에서 사용자의 요구사항을 더 잘 이해하고 고려할 수 있어요.',
    tipContent:
      '내가 예상한 제품/서비스의 타겟군과 비교하며 보완할 부분이 있는지 확인해요.',
  },
  bmc: {
    title: '비즈니스 모델 캔버스',
    titleContent:
      '설계 중인 서비스의 비즈니스 모델과 제약 조건을 미리 계획하고 이해해요. 서비스를 구축하고 제공하기 위해 어떤 활동이 필요한지 이해하고 잠재적인 절충점을 파악할 수 있어요.',
    purposeContent: '비즈니스 모델을 설명하고, 설계하고, 전환할 수 있어요.',
    tipContent: '전체 비즈니스 그림을 보는 것에 집중해요.',
  },
  blp: {
    title: '서비스 블루프린트',
    titleContent:
      '서비스 블루프린트는 서비스의 제공과정을 세부적으로 설명하고, 서비스를 이용하는 고객과 관련된 경험을 파악하는 도구에요.',
    purposeContent:
      '서비스의 전체적인 구조와 각 단계에서의 참여자들의 상호작용을 시각화하고 분석할 수 있어요.',
    tipContent:
      '서비스를 구현하기 위해 각 단계에서 필요한 역할과 책임을 이해해요.',
  },
  cjm: {
    title: '고객 여정 지도',
    titleContent:
      '사용자가 제품이나 서비스를 이용하는 과정을 시각적으로 표현하는 도구입니다.',
    purposeContent:
      '사용자가 제품 또는 서비스를 어떻게 경험하는지 이해하고, 사용자 관점에서 문제점을 식별하고 해결해요.',
    tipContent:
      '내가 예상한 제품/서비스의 타겟군과 비교하며 보완할 부분이 있는지 확인해요.',
  },
  stm: {
    title: '시스템 맵',
    titleContent:
      '시스템을 개념적으로 나타내고 어떻게 시스템의 한 부분에서 발생한 이벤트가 다른 부분에 영향을 주는지를 설명하는 과정이에요.',
    purposeContent:
      '시스템 내의 각 요소 간의 관계를 파악하고, 문제를 발견하고 해결할 수 있어요.',
    tipContent:
      '시스템 내의 한 영역의 변화가 어떻게 다른 부분들에 영향을 미칠 수 있는지를 파악해요.',
  },
  bcm: {
    title: '벤치마킹',
    titleContent:
      '벤치마킹은 조직이나 기업이 자신의 제품, 서비스, 프로세스, 또는 조직 구조를 평가하고 개선하기 위해 다른 조직이나 기업의 우수한 사례나 경험을 분석하고 참고하는 과정이에요.',
    purposeContent:
      '성공적인 사례를 분석하여 자사의 경쟁력을 향상시키고, 문제점을 개선할 수 있어요.',
    tipContent:
      '외부 환경에 대한 정보를 객관적으로 파악하고 자사 경쟁력을 높이기 위해 추가로 보완해야 할 항목을 체크해요.',
  },
  swot: {
    title: 'SWOT 분석',
    titleContent:
      'Strengths(강점), Weaknesses(약점), Opportunities(기회), Threats(위협)의 머리글자를 따서 만들어진 분석 기법이에요. 특정 사업, 프로젝트, 개인 등 다양한 대상의 내외부 환경을 분석하여 강점과 약점을 파악하고, 이를 바탕으로 기회를 포착하고 위협에 대응하는 전략을 수립할 수 있어요.',
    purposeContent:
      '파악된 정보를 바탕으로 효과적인 전략을 수립하고, 목표 달성을 위한 구체적인 실행 계획을 세워요.',
    tipContent: '각 요소 간의 상호 연관성을 고려하여 분석해요.',
  },
};
