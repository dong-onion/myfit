import React, { useEffect, useState } from 'react';
import {
  levelSeed,
  levelSprout,
  levelTree,
  serviceRegistrationBackground,
} from '@/assets';
import { useNavigate } from 'react-router-dom';
import { SESSION_KEYS } from '@/utility/constants';
import usePreloadImage from '@/hooks/usePreloadImage';
import * as S from './ServiceRegistration.style';

const ServiceRegistration = () => {
  const placeholders = [
    '20대 여성을 위한 와인 구독 서비스',
    '사회초년생을 위한 소액 투자 관리 앱',
    '4050대를 위한 영양제 추천 서비스',
    '대학교 앞 핫도그 가게',
    '30대 직장인을 위한 디지털 운동 기기',
  ];
  const [level, setLevel] = useState<number | null>(null);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [serviceDescription, setServiceDescription] = useState<string>('');
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const navigate = useNavigate();

  const { imagesLoaded } = usePreloadImage([serviceRegistrationBackground]);

  useEffect(() => {
    const randomPlaceholder = () => {
      const randomIndex = Math.floor(Math.random() * placeholders.length);
      return placeholders[randomIndex];
    };

    setPlaceholder(randomPlaceholder());
  }, []);

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

  return !imagesLoaded ? null : (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>나의 창업 정보를 입력해 주세요</S.Title>
          <S.SubTitle>
            제품 또는 서비스를 설명할 수 있는 간단한 설명 하나면 충분해요
          </S.SubTitle>
          <S.ContentWrapper>
            <S.InputWrapper>
              <S.InputTitle>창업 아이템</S.InputTitle>
              <S.Input
                placeholder={placeholder}
                maxLength={30}
                onChange={handleInputChange}
                value={serviceDescription}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                $focus={inputFocus}
              />
              <S.CharacterLimitMessage
                disabled={serviceDescription.length >= 30}
              >
                최대 30자까지 입력 가능합니다
              </S.CharacterLimitMessage>
            </S.InputWrapper>
            <S.ExampleConainer>
              <S.ExampleWrapper>
                <S.Example onClick={handleClickExample1}>
                  사회초년생을 위한 소액 투자 관리 앱
                </S.Example>
                <S.Example onClick={handleClickExample2}>
                  4050대를 위한 영양제 추천 서비스
                </S.Example>
              </S.ExampleWrapper>
              <S.ExampleWrapper>
                <S.Example onClick={handleClickExample3}>
                  대학교 앞 핫도그 가게
                </S.Example>
                <S.Example onClick={handleClickExample4}>
                  30대 직장인을 위한 디지털 운동 기기
                </S.Example>
              </S.ExampleWrapper>
            </S.ExampleConainer>
            <S.LevelWrapper>
              <S.LevelTitle>창업 단계</S.LevelTitle>
              <S.LevelBox
                onClick={() => handleClickLevelBox(0)}
                selected={0 === level}
              >
                <S.LevelIcon src={levelSeed} />
                <S.LevelBoxText selected={0 === level}>씨앗단계</S.LevelBoxText>
              </S.LevelBox>
              <S.LevelBox
                onClick={() => handleClickLevelBox(1)}
                selected={1 === level}
              >
                <S.LevelIcon src={levelSprout} />
                <S.LevelBoxText selected={1 === level}>새싹단계</S.LevelBoxText>
              </S.LevelBox>
              <S.LevelBox
                onClick={() => handleClickLevelBox(2)}
                selected={2 === level}
              >
                <S.LevelIcon src={levelTree} />
                <S.LevelBoxText selected={2 === level}>나무단계</S.LevelBoxText>
              </S.LevelBox>
            </S.LevelWrapper>
            <S.LeveInfoText>
              {level !== null ? levelInfoText[level] : <br />}
            </S.LeveInfoText>
          </S.ContentWrapper>
          <S.CompleteButton
            type="button"
            disabled={serviceDescription.length === 0 || level === null}
            onClick={handleCompleteButtonClick}
          >
            <S.CompleteButtonText>확인</S.CompleteButtonText>
          </S.CompleteButton>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default ServiceRegistration;
