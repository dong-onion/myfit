import React, { useState } from 'react';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const RatingCircle = styled.label<{ selected: boolean; disabled: boolean }>`
  position: relative;
  display: inline-block;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.primary[0] : theme.color.gray[4]};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme, selected, disabled }) =>
      !selected && !disabled && theme.color.primary[4]};
  }
`;

const Checkmark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RatingText = styled.span`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Pretendard-SemiBold';
  letter-spacing: -0.012em;
  text-align: center;
  color: ${({ theme }) => theme.color.white[0]};
`;

interface Props {
  myIndex: number;
  currentIndex: number;
  handleClickScore: (score: number, index: number) => void;
  currentScore: number | null;
}

const RatingCheckbox = ({
  myIndex,
  currentIndex,
  handleClickScore,
  currentScore,
}: Props) => {
  //disabled :자기 순서 아닐때
  const [selectedValue, setSelectedValue] = useState<number | null>(
    currentScore,
  );
  const disabled = myIndex !== currentIndex;

  const handleSelect = (value: number) => {
    if (disabled) {
      return;
    }

    if (!disabled) {
      setSelectedValue(value);
      handleClickScore(value, myIndex);
    }
  };

  return (
    <RatingContainer>
      {[1, 2, 3, 4, 5].map((value) => (
        <RatingCircle
          key={value}
          selected={selectedValue === value}
          disabled={disabled}
          onClick={() => handleSelect(value)}
        >
          <Checkmark>
            <RatingText>{value}</RatingText>
          </Checkmark>
        </RatingCircle>
      ))}
    </RatingContainer>
  );
};

export default RatingCheckbox;
