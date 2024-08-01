import React from 'react';
import styled from 'styled-components';
import Frame from '../components/Frame';
import {
  actionImg,
  contactImg,
  customerJourneyMapInfo,
  emotionImg,
  f2fServiceUsersImg,
  hyperClova,
  levelImg,
  needsImg,
  nonf2fServiceUsersImg,
  purposeImg,
  solutionVertical,
  supportProcessImg,
  userActiveImg,
} from '@/assets';
import ContentHeader from '../components/ContentHeader/indext';
import { useCustomerJourneyMap } from '@/hooks/useCustomerJourneyMap';
import Loading from './components/Loading';

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
  min-height: 105px;
  word-break: keep-all;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.primary[4]};
  }

  & :nth-child(1) {
    width: 9%;
    height: 100%;
    margin-right: 14px;
    border-radius: 12px;

    & img {
      border-radius: 0;
      width: 36px;
      height: 61px;
      margin: 0;
      padding: 0;

      &.action {
        width: 52px;
        height: 92px;
      }

      &.f2f {
        width: 52px;
        height: 115px;
      }

      &.process {
        width: 69px;
        height: 86px;
      }
    }
  }

  & :not(:nth-child(1)) {
    width: 18%;
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: center;
    padding: 20px 21px;
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
  min-height: 150px;
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
export const EmotionContainer = styled(PurposeContainer)`
  min-height: 150px;
`;
export const NeedsContainer = styled(ActionContainer)``;
export const SolutionContainer = styled(PurposeContainer)`
  min-height: 150px;
`;

const Blueprint = () => {
  const serviceDescription = JSON.parse(
    sessionStorage.getItem('serviceDescription') || '',
  );
  const { data, isError, isLoading, refetch } =
    useCustomerJourneyMap(serviceDescription);

  if (isLoading) {
    return <Loading refetch={refetch} />;
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
            <img src={contactImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.purpose}</div>
          ))}
        </PurposeContainer>
        <ActionContainer>
          <div>
            <img className="action" src={userActiveImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.action}</div>
          ))}
        </ActionContainer>
        <EmotionContainer>
          <div>
            <img className="f2f" src={f2fServiceUsersImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.emotion}</div>
          ))}
        </EmotionContainer>
        <NeedsContainer>
          <div>
            <img className="f2f" src={nonf2fServiceUsersImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.need}</div>
          ))}
        </NeedsContainer>
        <SolutionContainer>
          <div>
            <img className="process" src={supportProcessImg} />
          </div>
          {data?.map((item, index) => (
            <div key={index}>{item.solution}</div>
          ))}
        </SolutionContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 20,
            width: '100%',
          }}
        >
          <img src={hyperClova} width={200} height={15} />
        </div>
      </Container>
    </Frame>
  );
};

export default Blueprint;
