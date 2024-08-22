import React from 'react';
import * as S from './Retry.style';

const Retry = ({
  top,
  refetch,
  setShowRetryButton,
}: {
  top: number;
  refetch?: any;
  setShowRetryButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleButtonClick = () => {
    refetch();
    setShowRetryButton(false);
  };
  return (
    <>
      <S.Container top={top}>
        <S.Btn onClick={handleButtonClick} />
      </S.Container>
    </>
  );
};

export default Retry;
