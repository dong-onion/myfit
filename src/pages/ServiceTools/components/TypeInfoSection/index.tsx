import { SERVICE_TOOL_INFO, ServiceTool } from '@/utility/constants';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div<{ height?: number }>`
  width: 480px;
  background-color: #f5f6fa;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 30px;

  * {
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const TypeInfoImg = styled.img`
  width: 420px;
  height: 253px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  & > h1 {
    font-family: Pretendard-Bold;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.005em;
    text-align: left;
  }

  & > span {
    margin-top: 20px;
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: left;
  }
`;

export const PurposeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-self: flex-start;

  & > h1 {
    font-family: Pretendard-Bold;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.005em;
    text-align: left;
  }

  & > span {
    margin-top: 20px;
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: left;
  }
`;

export const TipWrapper = styled(PurposeWrapper)``;

interface Props {
  src: string;
  height?: number;
  type: ServiceTool;
}

const TypeInfoSection = ({ type, src, height = 1301 }: Props) => {
  const { title, titleContent, purposeContent, tipContent } =
    SERVICE_TOOL_INFO[type];
  return (
    <Container>
      <TypeInfoImg height={height} src={src}></TypeInfoImg>
      <TitleWrapper>
        <h1>{title}</h1>
        <span>{titleContent}</span>
      </TitleWrapper>
      <PurposeWrapper>
        <h1>목적</h1>
        <span>{purposeContent}</span>
      </PurposeWrapper>
      <TipWrapper>
        <h1>팁</h1>
        <span>{tipContent}</span>
      </TipWrapper>
    </Container>
  );
};

export default TypeInfoSection;
