import React, { useState } from 'react';
import styled from 'styled-components';
import { levelSeed, levelSprout, levelTree } from '@/assets';
import { Button } from '@/componenets';
import { useNavigate } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  font-family: 'Pretendard-Bold';
  color: ${({ theme }) => theme.color.gray[0]};
`;

export const SubTitle = styled.h2`
  margin-top: 33px;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Pretendard-Medium';
  line-height: 24px;
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
  margin-top: 60px;
  position: relative;
`;

export const InputTitle = styled.h3`
  margin-right: 22px;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  text-align: center;
`;

export const Input = styled.input`
  //todo media query로 반응형으로 만들기
  // focus 되면 border-color, background color bg[0]으로 바꾸기
  max-width: 792px;
  height: 84px;
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.color.primary[0]};
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 30px 32px;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  line-height: 24px;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.color.primary[0]};
`;

export const LevelWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 588px;
  margin-top: 40px;
  margin-left: 41px;

  & > :not(:first-child):not(:last-child) {
    margin-right: 10px;
  }
`;

export const LevelTitle = styled.h3`
  margin-right: 22px;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  line-height: 24px;
  text-align: right;
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
  left: 106px;
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
  margin-top: 80px;
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
  const [serviceDescription, setserviceDescription] = useState<string>('');
  const navigate = useNavigate();

  const handleCompleteButtonClick = () => {
    sessionStorage.setItem('level', JSON.stringify(level) || '');
    sessionStorage.setItem(
      'serviceDescription',
      JSON.stringify(serviceDescription),
    );
    navigate('./result');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setserviceDescription(e.target.value);
  };

  const levelInfoText = [
    '사업 시작 단계로 문제 이해를 위한 시장 조사, 고객 조사가 필요해요.',
    '무럭무럭 성장하는 단계로 아이템 점검과 구체화가 필요해요.',
    '수확을 거두는 단계로 사업을 확장하거나 방향을 전환하는 시기에요.',
  ];

  const handleClickLevelBox = (level: number) => {
    setLevel(level);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>나의 서비스를 입력해 주세요</Title>
          <SubTitle>
            서비스/아이템을 설명할 수 있는 간단한 설명 하나면 충분해요
          </SubTitle>
          <ContentWrapper>
            <InputWrapper>
              <InputTitle>서비스명</InputTitle>
              <Input
                placeholder="독거 노인들을 위한 식료품 배달 서비스"
                maxLength={30}
                onChange={handleInputChange}
                value={serviceDescription}
              />
              <CharacterLimitMessage disabled={serviceDescription.length >= 30}>
                최대 30자까지 입력 가능합니다
              </CharacterLimitMessage>
            </InputWrapper>
            <LevelWrapper>
              <LevelTitle>단계</LevelTitle>
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
            <CompleteButtonText>완료</CompleteButtonText>
          </CompleteButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default ServiceRegistration;
