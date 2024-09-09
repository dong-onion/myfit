import { mainBg } from '@/assets';
import { Button } from '@/components';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100dvh;
`;

export const NavigateButton = styled(Button)`
  width: 100%;
  max-width: 370px;
  height: 78px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 16.6%;
  bottom: 27%;
`;

export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ButtonText = styled.span`
  font-family: Pretendard-SemiBold;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.002em;
  text-align: center;
  color: ${({ theme }) => theme.color.white[0]};
`;
