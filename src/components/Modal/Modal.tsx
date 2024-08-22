import React, { useState } from 'react';
import { SESSION_KEYS } from '@/utility/constants';
import { levelSeed, levelSprout, levelTree, modalCloseBtn } from '@/assets';
import * as S from './Modal.style';
interface Props {
  onClose: () => void;
  refetch: any;
}

const Modal = ({ onClose, refetch }: Props) => {
  const defaultServiceDescription =
    JSON.parse(sessionStorage.getItem(SESSION_KEYS.serviceDescription) || '') ||
    '';
  const [level, setLevel] = useState<number | null>(null);
  const [serviceDescription, setServiceDescription] = useState<string>(
    defaultServiceDescription,
  );

  const [inputFocus, setInputFocus] = useState<boolean>(false);

  const handleCompleteButtonClick = () => {
    sessionStorage.setItem(SESSION_KEYS.level, JSON.stringify(level) || '');
    sessionStorage.setItem(
      SESSION_KEYS.serviceDescription,
      JSON.stringify(serviceDescription),
    );

    refetch();
    onClose();
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
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={handleContentClick}>
        <S.ModalCloseButtonWrapper onClick={onClose}>
          <S.ModalCloseButton src={modalCloseBtn} />
        </S.ModalCloseButtonWrapper>
        <S.Wrapper>
          <S.Title>나의 창업 정보를 입력해 주세요</S.Title>
          <S.SubTitle>
            제품 또는 서비스를 설명할 수 있는 간단한 설명 하나면 충분해요
          </S.SubTitle>
          <S.ContentWrapper>
            <S.InputWrapper>
              <S.InputTitle>창업 아이템</S.InputTitle>
              <S.Input
                placeholder={defaultServiceDescription}
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
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
