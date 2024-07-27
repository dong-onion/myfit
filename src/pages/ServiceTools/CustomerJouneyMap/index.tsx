import React from 'react';
import styled from 'styled-components';
import Frame from '../components/Frame';
import {
  actionImg,
  customerJourneyMapInfo,
  emotionImg,
  levelImg,
  needsImg,
  purposeImg,
  solutionVertical,
} from '@/assets';
import ContentHeader from '../components/ContentHeader/indext';
import { useCustomerJourneyMap } from '@/hooks/useCustomerJourneyMap';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  * {
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;
export const LevelContainer = styled.div`
  display: flex;
  margin-top: 63px;
  width: 100%;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.primary[4]};
  }

  & :nth-child(1) {
    width: 8%;
    height: 105px;
    margin-right: 14px;
    border-radius: 12px;

    & img {
      border-radius: 0;
      width: 36px;
      height: 61px;
      margin: 0;
      padding: 0;

      &.solution {
        width: 52px;
        height: 60px;
      }
    }
  }

  & :not(:nth-child(1)) {
    width: 15%;
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: center;
  }

  & :nth-child(2) {
    background-color: #f3f5ff;
    border-radius: 12px 0 0 12px;
  }
  & :nth-child(3) {
    background-color: #e7ebff;
  }
  & :nth-child(4) {
    background-color: #dfe6ff;
  }
  & :nth-child(5) {
    background-color: #d8e0ff;
  }
  & :nth-child(6) {
    background-color: #ced7fc;
    border-radius: 0 12px 12px 0;
  }
`;
export const PurposeContainer = styled(LevelContainer)`
  margin-top: 14px;

  & :nth-child(1) {
    background-color: ${({ theme }) => theme.color.white[0]};
  }

  & :nth-child(2) {
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 12px 0 0 12px;
  }
  & :nth-child(3) {
    background-color: ${({ theme }) => theme.color.white[0]};
  }
  & :nth-child(4) {
    background-color: ${({ theme }) => theme.color.white[0]};
  }
  & :nth-child(5) {
    background-color: ${({ theme }) => theme.color.white[0]};
  }
  & :nth-child(6) {
    background-color: ${({ theme }) => theme.color.white[0]};
    border-radius: 0 12px 12px 0;
  }
`;
export const ActionContainer = styled(PurposeContainer)`
  & :nth-child(1) {
    background-color: #f3f5ff;
  }

  & :nth-child(2) {
    background-color: #f3f5ff;
    border-radius: 12px 0 0 12px;
  }
  & :nth-child(3) {
    background-color: #f3f5ff;
  }
  & :nth-child(4) {
    background-color: #f3f5ff;
  }
  & :nth-child(5) {
    background-color: #f3f5ff;
  }
  & :nth-child(6) {
    background-color: #f3f5ff;
    border-radius: 0 12px 12px 0;
  }
`;
export const EmotionContainer = styled(PurposeContainer)``;
export const NeedsContainer = styled(ActionContainer)``;
export const SolutionContainer = styled(PurposeContainer)``;

const CustomerJouneyMap = () => {
  const serviceDescription = JSON.parse(
    sessionStorage.getItem('serviceDescription') || '',
  );
  const { data, isError, isLoading, refetch } =
    useCustomerJourneyMap(serviceDescription);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Frame src={customerJourneyMapInfo}>
      <ContentHeader />
      <Container>
        <LevelContainer>
          <div>
            <img src={levelImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.stepName}</div>
          ))}
        </LevelContainer>
        <PurposeContainer>
          <div>
            <img src={purposeImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.purpose}</div>
          ))}
        </PurposeContainer>
        <ActionContainer>
          <div>
            <img src={actionImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.action}</div>
          ))}
        </ActionContainer>
        <EmotionContainer>
          <div>
            <img src={emotionImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.emotion}</div>
          ))}
        </EmotionContainer>
        <NeedsContainer>
          <div>
            <img src={needsImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.need}</div>
          ))}
        </NeedsContainer>
        <SolutionContainer>
          <div>
            <img className="solution" src={solutionVertical} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.solution}</div>
          ))}
        </SolutionContainer>
      </Container>
    </Frame>
  );
};

export default CustomerJouneyMap;
