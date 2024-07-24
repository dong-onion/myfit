import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 123px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const ProgressBar = styled.div`
  width: 60%;
  max-width: 1120px;
  height: 16px;
  border-radius: 500px;
  background-color: green;
`;

export const QuestionContainer = styled.div<{ isFocused: boolean }>`
  width: 100%;
  max-width: 1015px;
  height: 214px;
  flex-grow: 1;
  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.color.primary[0] : theme.color.bg[1]};
  margin: 30px auto;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const QuestionMainText = styled.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.012em;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const QuestionSubText = styled.span`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.color.gray[0]};
  //todo 여기 디스플레이 none할지 position absolute로 할지 고민
`;

export const QuestionCheckBox = styled.input``;

const questions: { [key: number]: string[] } = {
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

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClickQuestion = (index: number) => {
    // 원래는 체크 돼있는 경우만 다음 질문으로 넘어가도록 해야함
    //todo isFocused 저거 왜 난리인지 확인
    // checkbox 저거 styled-componet로 변경
    // sessiong storage에 객체로 값 저장하고 나중에 꺼내서 합산
    setCurrentIndex(index);
  };

  const handleNextFocus = () => {
    const nextIndex = (currentIndex + 1) % Object.keys(questions).length;
    if (questionRefs.current[nextIndex]) {
      questionRefs.current[nextIndex]?.focus();
    }

    setCurrentIndex(nextIndex);
  };

  const items = Array.from(
    // { length: Object.keys(questions).length },
    { length: 7 },
    (_, i) => (
      <QuestionContainer
        key={i}
        ref={(el: HTMLDivElement) => (questionRefs.current[i] = el)}
        isFocused={currentIndex === i}
        onClick={() => handleClickQuestion(i)}
      >
        <QuestionMainText>
          {questions[i][0]}
          <QuestionCheckBox type="checkbox" />
        </QuestionMainText>
      </QuestionContainer>
    ),
  );

  const getVisibleItems = () => {
    // Show two items at the start
    if (currentIndex === 0) {
      return items.slice(0, 2);
    }
    // Show three items in the middle
    if (currentIndex > 0 && currentIndex < items.length - 1) {
      return items.slice(currentIndex - 1, currentIndex + 2);
    }

    // show two items at the end
    return items.slice(-2);
  };

  const visibleItems = getVisibleItems();

  return (
    <Container>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
      {visibleItems}
      <button onClick={handleNextFocus}>Next</button>
    </Container>
  );
};

export default Test;
