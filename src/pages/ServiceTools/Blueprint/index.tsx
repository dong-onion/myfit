import React, { useRef } from 'react';
import styled from 'styled-components';
import Frame from '../components/Frame';
import {
  blueprintInfo,
  contactImg,
  f2fServiceUsersImg,
  hyperClova,
  levelImg,
  nonf2fServiceUsersImg,
  supportProcessImg,
  userActiveImg,
} from '@/assets';
import ContentHeader from '../components/ContentHeader/indext';
import Loading from './components/Loading';
import { useBlueprint } from '@/hooks/useBlueprint';
import usePreloadImage from '@/hooks/usePreloadImage';
import ErrorPage from '@/pages/ErrorPage';
import { useAccessControl } from '@/hooks/useAccessControl';

export const DownloadWrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  * {
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const InteractionLine = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  align-items: center;

  & > span {
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 23.4px;
    letter-spacing: -0.005em;
    text-align: center;
    margin-left: 18px;
    margin-right: 32px;

    color: ${({ theme }) => theme.color.primary[1]};
  }

  & > div {
    width: 100%;
    border-top: 2px dotted ${({ theme }) => theme.color.primary[1]};
  }
`;

export const SightLine = styled(InteractionLine)`
  & > div {
    border-top: 2px solid ${({ theme }) => theme.color.primary[1]};
  }
`;

export const InnerInteractionLine = styled(InteractionLine)`
  & > div {
    border-top: 2px dotted ${({ theme }) => theme.color.primary[1]};
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
  const { level, serviceDescription } = useAccessControl();
  if (level === null || serviceDescription === null) {
    return <Loading />;
  }
  const downloadRef = useRef<HTMLDivElement>(null);
  const { imagesLoaded } = usePreloadImage([blueprintInfo]);

  const { data, isError, isLoading, refetch, isRefetching } =
    useBlueprint(serviceDescription);

  if (isLoading || isRefetching) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return !imagesLoaded ? null : (
    <DownloadWrapper ref={downloadRef}>
      <Frame type="blp" src={blueprintInfo}>
        <ContentHeader
          downloadRef={downloadRef}
          title="마이핏_서비스_블루프린트"
          refetch={refetch}
        />
        <Container>
          <LevelContainer>
            <div>
              <img src={levelImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.level}</div>
            ))}
          </LevelContainer>
          <PurposeContainer>
            <div>
              <img src={contactImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.touchPoint}</div>
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
          <InteractionLine>
            <span>상호작용선</span>
            <div />
          </InteractionLine>
          <EmotionContainer>
            <div>
              <img className="f2f" src={f2fServiceUsersImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.f2f}</div>
            ))}
          </EmotionContainer>
          <SightLine>
            <span>가시선</span>
            <div />
          </SightLine>
          <NeedsContainer>
            <div>
              <img className="f2f" src={nonf2fServiceUsersImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.nonef2f}</div>
            ))}
          </NeedsContainer>
          <InnerInteractionLine>
            <span>내부&nbsp;상호작용선</span>
            <div />
          </InnerInteractionLine>
          <SolutionContainer>
            <div>
              <img
                className="process"
                src={supportProcessImg}
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.process}</div>
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
    </DownloadWrapper>
  );
};

export default Blueprint;
