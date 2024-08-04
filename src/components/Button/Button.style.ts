import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  outline: 0;
  appearance: none;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.white[0]};

  &:hover {
    transition: 0.25s;
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.color.gray[3]};
    transform: translateY(-0.25em);
  }
  &:active {
    transition: all 0.2s;
    transform: scale(0.95);
  }
  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.color.gray[3]};
    box-shadow: none;
  }
  &:disabled:hover {
    transform: none;
  }
  &:disabled:active {
    transform: scale(1);
  }
`;
