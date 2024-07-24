import React, { MouseEventHandler } from 'react';
import * as S from './Button.style';

interface Props {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

const Button = ({
  children,
  type,
  onClick,
  disabled = false,
  ...styles
}: Props) => {
  return (
    <S.Button type={type} onClick={onClick} {...styles} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;
