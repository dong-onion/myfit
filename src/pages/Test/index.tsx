import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import RatingCheckbox from './components/RatingCheckbox';
import ProgressBar from './components/ProgressBar';
import { Button } from '@/componenets';

export const Container = styled.div`
  height: 100%;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  position: relative;
  z-index: 1;
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 123px);
  position: absolute;
  align-items: center;
  top: 68px;
  gap: 10%;
`;

export const QuestionContainer = styled.div<{ $isFocused: boolean }>`
  width: 100%;
  max-width: 1015px;
  height: 214px;
  position: relative;
  display: flex;
  justify-content: center;
  opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0.4)};
  // blur 처리
  filter: ${({ $isFocused }) => ($isFocused ? 'none' : 'blur(2px)')};
`;

export const BlankContainer = styled(QuestionContainer)<{
  $isVisible: boolean;
}>`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
`;

export const QuestionMainText = styled.div`
  font-size: 32px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  letter-spacing: -0.012em;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const QuestionSubText = styled.span`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Pretendard-Medium';
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.color.gray[0]};
  top: 48px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 144px;
  right: 0;
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
`;

export const CheckInfoText = styled.span`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  line-height: 24px;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const SubmittButton = styled(Button)<{ $isVisible: boolean }>`
  width: 282px;
  height: 78px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.primary[0]};
  position: absolute;
  bottom: 10%;
  left: calc(50% + 16%);
  transform: translate(-50%, -50%);
  right: 0;
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};

  &:hover {
    transition: 0.25s;
    transform: translate(-50%, -50%) scale(1.05);
  }

  &:active {
    transition: none;
  }

  &:disabled,
  &:disabled:hover {
    transition: none;
    transform: scale(1);
    box-shadow: none;
  }
`;

export const SubmittButtonText = styled.span`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  letter-spacing: -0.002em;
  text-align: center;
  color: ${({ theme }) => theme.color.white[0]};
`;

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
  const [totalScores, setTotalScores] = useState<(number | null)[]>(
    Array.from({ length: Object.keys(questions).length }, () => null),
  );

  const handleClickQuestionContainer = (index: number) => {
    // 여기는 이전 질문으로 만 이동 할수 있게하는것, 점수 추가 및 다음 질문으로 보내기는 다른 함수로 분리해야함, 1번에서 마지막번호 안가게 해야함
    // 근데 total score에 값이 있으면 (이전에 점수 체크한 기록이 있으면) 다음 질문으로 이동 가능
    if (index === currentIndex - 1) {
      setCurrentIndex((prev) => prev - 1);
    } else if (totalScores[index] !== null && index - 1 === currentIndex) {
      // 점수 체크하고 이전으로 돌아갔다가 다시 체크한 컨테이너를 누른 경우
      setCurrentIndex((prev) => prev + 1);
    } else if (
      totalScores[index] === null &&
      totalScores[currentIndex] !== null
    ) {
      // 이전 컨테이너에서 점수 체크한 컨테이너로 다시 왔는데, 다음 컨테이너 점수가 체크되지 않은 경우, 한번더 점수를 체크해야 해서 만든 케이스

      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleNextFocus = () => {
    // 마지막 질문이면 실행되지 않기
    if (currentIndex === Object.keys(questions).length - 1) {
      return;
    }

    setCurrentIndex(currentIndex + 1);
  };

  const handleClickScore = (score: number, index: number) => {
    // 점수 추가 및 다음으로 이동, score는 session storage에 저장
    const newTotalScores = [...totalScores];
    newTotalScores[index] = score;
    setTotalScores(newTotalScores);

    handleNextFocus();
  };

  const handleSubmitt = () => {
    // 세션 스토리지로 totalScores 저장
    sessionStorage.setItem('totalScores', JSON.stringify(totalScores));
  };

  const submmitButtonVisible =
    currentIndex === Object.keys(questions).length - 1;

  const items = Array.from(
    { length: Object.keys(questions).length },
    (_, i) => (
      <QuestionContainer
        key={i}
        ref={(el: HTMLDivElement) => (questionRefs.current[i] = el)}
        $isFocused={currentIndex === i}
        onClick={() => handleClickQuestionContainer(i)}
      >
        <QuestionMainText>
          {questions[i][0]}
          {questions[i].length > 1 && (
            <QuestionSubText>{questions[i][1]}</QuestionSubText>
          )}
          <CheckboxContainer>
            <CheckInfoText>매우 그렇지 않다</CheckInfoText>
            <RatingCheckbox
              currentScore={totalScores[i]}
              myIndex={i}
              currentIndex={currentIndex}
              handleClickScore={handleClickScore}
            />
            <CheckInfoText>매우 그렇다</CheckInfoText>
          </CheckboxContainer>
        </QuestionMainText>
      </QuestionContainer>
    ),
  );

  const getVisibleItems = () => {
    // 처음 단계에서는 첫번째 두개의 아이템 보여줌
    if (currentIndex === 0) {
      return items.slice(0, 2);
    }

    // 중간 단계에서는 현재 인덱스를 기준으로 앞뒤로 아이템 두개씩 보여줌
    if (currentIndex > 0 && currentIndex < items.length - 1) {
      return items.slice(currentIndex - 1, currentIndex + 2);
    }

    // 마지막 단계에서는 마지막 두개의 아이템 보여줌
    return items.slice(-2);
  };

  const getMaximumProgress = useCallback(() => {
    // totalScores 를 순회하면서 null 나올때 까지의 개수를 반환
    return totalScores.filter((score) => score !== null).length;
  }, [totalScores]);

  const maximumProgress = getMaximumProgress();

  const visibleItems = getVisibleItems();

  const submittButtonDisabled = totalScores.includes(null);

  return (
    <Container>
      <ProgressBar progress={maximumProgress} />
      <QuestionsWrapper>
        <BlankContainer $isFocused={false} $isVisible={currentIndex === 0} />
        {visibleItems}
        <BlankContainer
          $isFocused={false}
          $isVisible={currentIndex === items.length - 1}
        />
        <SubmittButton
          type="button"
          onClick={handleSubmitt}
          $isVisible={submmitButtonVisible}
          disabled={submittButtonDisabled}
        >
          <SubmittButtonText>제출</SubmittButtonText>
        </SubmittButton>
      </QuestionsWrapper>
    </Container>
  );
};

export default Test;
