import React, { useState } from 'react';
import styled from 'styled-components';
import {
  levelSeed,
  levelSprout,
  levelTree,
  serviceRegistrationBackground,
} from '@/assets';
import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';
import { HEADER_HEIGHT, SESSION_KEYS } from '@/utility/constants';

export const Container = styled.div`
  background-image: url(${serviceRegistrationBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-bottom: 10%;
  min-height: calc(100dvh - ${HEADER_HEIGHT});
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 940px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-family: 'Pretendard-SemiBold';
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.012em;
  margin-top: 167px;

  color: ${({ theme }) => theme.color.gray[0]};
`;

export const SubTitle = styled.h2`
  font-family: 'Pretendard-Medium';
  font-size: 22px;
  font-weight: 500;
  line-height: 35.2px;
  letter-spacing: -0.005em;
  margin-top: 20px;

  color: ${({ theme }) => theme.color.gray[0]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  position: relative;
`;

export const InputTitle = styled.h3`
  font-family: 'Pretendard-SemiBold';
  font-size: 22px;
  font-weight: 600;
  line-height: 35.2px;
  letter-spacing: -0.005em;
  margin-right: 20px;

  color: ${({ theme }) => theme.color.gray[0]};
`;

export const Input = styled.input<{ $focus: boolean }>`
  max-width: 792px;
  height: 84px;
  flex-grow: 1;
  border: ${({ theme, $focus }) =>
    $focus
      ? `1px solid ${theme.color.primary[0]}`
      : '1px solid rgba(255, 255, 255, 0.6)'};
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 30px 32px;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  line-height: 24px;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.color.primary[0]};
  &::placeholder {
    font-family: 'Pretendard-SemiBold';
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.005em;
    text-align: left;
    color: ${({ theme }) => theme.color.gray[2]};
  }
`;

export const ExampleConainer = styled.div`
  width: 605px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 120px;
  justify-content: space-between;
`;

export const ExampleWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Example = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  background-color: #ffffff66;
  border: 1px solid #ffffff99;
  font-family: 'Pretendard-Medium';
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  line-height: 16px;
  letter-spacing: -0.002em;
  color: ${({ theme }) => theme.color.gray[1]};

  &:hover {
    background-color: #ffffff66;
    border: 1px solid #ffffff99;

    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const LevelWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  & > :not(:first-child):not(:last-child) {
    margin-right: 10px;
  }
`;

export const LevelTitle = styled.h3`
  margin-right: 39px;
  font-family: 'Pretendard-SemiBold';
  font-size: 22px;
  font-weight: 600;
  line-height: 35.2px;
  letter-spacing: -0.005em;

  color: ${({ theme }) => theme.color.gray[0]};
`;

interface LimitMessageProp {
  disabled: boolean;
}

export const CharacterLimitMessage = styled.span<LimitMessageProp>`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Pretendard-Medium';
  line-height: 14px;
  letter-spacing: -0.002em;
  color: ${({ theme }) => theme.color.state[3]};
  position: absolute;
  top: 94px;
  left: 138px;
  display: ${({ disabled }) => (disabled ? 'block' : 'none')};
`;

interface LevelBoxProp {
  selected: boolean;
}

export const LevelBox = styled.div<LevelBoxProp>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.color.primary[0]};
  border-radius: 10px;
  padding: 20px 30px;
  display: flex;
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.primary[0] : theme.color.white[0]};

  &:hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.color.primary[0] : theme.color.bg[1]};
  }
`;

export const LevelIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`;

export const LevelBoxText = styled.span<LevelBoxProp>`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  letter-spacing: -0.4px;
  color: ${({ theme, selected }) =>
    selected ? theme.color.white[0] : theme.color.primary[0]};
`;

export const LeveInfoText = styled.span`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Pretendard-Medium';
  line-height: 24px;
  letter-spacing: -0.005em;
  left: 120px;
  position: relative;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.primary[0]};
  width: 490px;
`;

export const CompleteButton = styled(Button)`
  width: 300px;
  height: 78px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary[0]};
  margin-top: 93px;

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.color.primary[4]};
  }
`;

export const CompleteButtonText = styled.span`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  line-height: 24px;

  color: ${({ theme }) => theme.color.white[0]};
`;

const ServiceRegistration = () => {
  const [level, setLevel] = useState<number | null>(null);
  const [serviceDescription, setServiceDescription] = useState<string>('');
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCompleteButtonClick = () => {
    sessionStorage.setItem(SESSION_KEYS.level, JSON.stringify(level) || '');
    sessionStorage.setItem(
      SESSION_KEYS.serviceDescription,
      JSON.stringify(serviceDescription),
    );
    navigate('/main');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceDescription(e.target.value);
  };

  const levelInfoText = [
    '창업 초기 단계로 문제 이해를 위한 시장 조사, 고객 조사가 필요해요.',
    '무럭무럭 성장하는 단계로 아이템 점검과 구체화가 필요해요.',
    '수확을 거두는 단계로 사업을 확장하거나 방향을 전환하는 시기에요.',
  ];

  const handleClickLevelBox = (level: number) => {
    setLevel(level);
  };

  const handleClickExample1 = () => {
    setServiceDescription('사회초년생을 위한 소액 투자 관리 앱');
    setInputFocus(true);
  };

  const handleClickExample2 = () => {
    setServiceDescription('4050대를 위한 영양제 추천 서비스');
    setInputFocus(true);
  };

  const handleClickExample3 = () => {
    setServiceDescription('대학교 앞 핫도그 가게');
    setInputFocus(true);
  };

  const handleClickExample4 = () => {
    setServiceDescription('30대 직장인을 위한 디지털 운동 기기');
    setInputFocus(true);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>나의 창업 정보를 입력해 주세요</Title>
          <SubTitle>
            제품 또는 서비스를 설명할 수 있는 간단한 설명 하나면 충분해요
          </SubTitle>
          <ContentWrapper>
            <InputWrapper>
              <InputTitle>창업 아이템</InputTitle>
              <Input
                placeholder="20대 여성을 위한 와인 구독 서비스"
                maxLength={30}
                onChange={handleInputChange}
                value={serviceDescription}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                $focus={inputFocus}
              />
              <CharacterLimitMessage disabled={serviceDescription.length >= 30}>
                최대 30자까지 입력 가능합니다
              </CharacterLimitMessage>
            </InputWrapper>
            <ExampleConainer>
              <ExampleWrapper>
                <Example onClick={handleClickExample1}>
                  사회초년생을 위한 소액 투자 관리 앱
                </Example>
                <Example onClick={handleClickExample2}>
                  4050대를 위한 영양제 추천 서비스
                </Example>
              </ExampleWrapper>
              <ExampleWrapper>
                <Example onClick={handleClickExample3}>
                  대학교 앞 핫도그 가게
                </Example>
                <Example onClick={handleClickExample4}>
                  30대 직장인을 위한 디지털 운동 기기
                </Example>
              </ExampleWrapper>
            </ExampleConainer>

            <LevelWrapper>
              <LevelTitle>창업 단계</LevelTitle>
              <LevelBox
                onClick={() => handleClickLevelBox(0)}
                selected={0 === level}
              >
                <LevelIcon src={levelSeed} />
                <LevelBoxText selected={0 === level}>씨앗단계</LevelBoxText>
              </LevelBox>
              <LevelBox
                onClick={() => handleClickLevelBox(1)}
                selected={1 === level}
              >
                <LevelIcon src={levelSprout} />
                <LevelBoxText selected={1 === level}>새싹단계</LevelBoxText>
              </LevelBox>
              <LevelBox
                onClick={() => handleClickLevelBox(2)}
                selected={2 === level}
              >
                <LevelIcon src={levelTree} />
                <LevelBoxText selected={2 === level}>나무단계</LevelBoxText>
              </LevelBox>
            </LevelWrapper>
            <LeveInfoText>
              {level !== null ? levelInfoText[level] : <br />}
            </LeveInfoText>
          </ContentWrapper>
          <CompleteButton
            type="button"
            disabled={serviceDescription.length === 0 || level === null}
            onClick={handleCompleteButtonClick}
          >
            <CompleteButtonText>확인</CompleteButtonText>
          </CompleteButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default ServiceRegistration;
