import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { SESSION_KEYS } from '@/utility/constants';
import { levelSeed, levelSprout, levelTree, modalCloseBtn } from '@/assets';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 1153px;
  height: 710px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ModalCloseButtonWrapper = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -5px;
  right: -41px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCloseButton = styled.img`
  width: 30px;
  height: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 913px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-family: 'Pretendard-SemiBold';
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.012em;

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
  /* border: ${({ theme, $focus }) =>
    $focus
      ? `1px solid ${theme.color.primary[0]}`
      : '1px solid rgba(255, 255, 255, 0.6)'}; */
  border: 1px solid #4865ff;
  border-radius: 12px;
  background-color: #f5f6fa;
  padding: 30px 32px;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  line-height: 24px;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.color.primary[0]};
  margin-bottom: 30px;
  &::placeholder {
    font-family: Pretendard-SemiBold;
    font-size: 22px;
    font-weight: 600;
    line-height: 35.2px;
    letter-spacing: -0.005em;
    text-align: left;
    color: ${({ theme }) => theme.color.primary[0]};
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

interface Props {
  onClose: () => void;
}

const Modal = ({ onClose }: Props) => {
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
    //navigate('./result');
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

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleContentClick}>
        <ModalCloseButtonWrapper onClick={onClose}>
          <ModalCloseButton src={modalCloseBtn} />
        </ModalCloseButtonWrapper>
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
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
