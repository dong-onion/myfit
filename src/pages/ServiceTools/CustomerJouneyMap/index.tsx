import React from 'react';
import styled from 'styled-components';
import Frame from '../components/Frame';
import {
  action,
  businessCanvasInfo,
  emotion,
  level,
  needs,
  purpose,
  solutionVertical,
} from '@/assets';
import ContentHeader from '../components/ContentHeader/indext';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  * {
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;
export const LevelContainer = styled.div`
  display: flex;
  margin-top: 63px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.primary[4]};
  }

  & :nth-child(1) {
    width: 114px;
    height: 105px;
    margin-right: 14px;
    border-radius: 12px;

    & img {
      border-radius: 0;
      width: 36px;
      height: 61px;
      margin: 0;
      padding: 0;
    }
  }

  & :not(:nth-child(1)) {
    width: 215px;
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
  return (
    <Frame src={businessCanvasInfo}>
      <ContentHeader />
      <Container>
        <LevelContainer>
          <div>
            <img src={level} />
          </div>
          <div>1. 인지</div>
          <div>2. 관심</div>
          <div>3. 가입</div>
          <div>4. 식단 추천</div>
          <div>5. 평가</div>
        </LevelContainer>
        <PurposeContainer>
          <div>
            <img src={purpose} />
          </div>
          <div>
            서비스 존재
            <br />
            인지
          </div>
          <div>
            서비스에 대한
            <br />
            관심 증가
          </div>
          <div>
            서비스 이용을
            <br />
            위한 회원가입
          </div>
          <div>
            맞춤형 식단
            <br />
            추천 받기
          </div>
          <div>
            서비스에 대한
            <br />
            평가
          </div>
        </PurposeContainer>
        <ActionContainer>
          <div>
            <img src={action} />
          </div>
          <div>
            광고, SNS, 블로그
            <br />
            등을 통한 인지
          </div>
          <div>
            웹사이트 방문,
            <br />
            정보 확인
          </div>
          <div>
            앱 다운로드,
            <br />
            회원가입 진행
          </div>
          <div>
            식습관 정보 입력 후<br />
            추천 받기
          </div>
          <div>
            설문조사 참여,
            <br />
            후기 작성
          </div>
        </ActionContainer>
        <EmotionContainer>
          <div>
            <img src={emotion} />
          </div>
          <div>호기심</div>
          <div>흥미로움</div>
          <div>기대감</div>
          <div>만족감</div>
          <div>만족감</div>
        </EmotionContainer>
        <NeedsContainer>
          <div>
            <img src={needs} />
          </div>
          <div>
            건강한 식습관
            <br />
            정보 획득
          </div>
          <div>
            건강한 식습관
            <br />
            유지에 필요한
            <br /> 정보
          </div>
          <div>
            서비스 이용
            <br />
            편리성
          </div>
          <div>
            맞춤 식단
            <br />
            추천
          </div>
          <div>
            서비스 개선에
            <br />
            도움이 되는
            <br />
            정보 제공
          </div>
        </NeedsContainer>
        <SolutionContainer>
          <div>
            <img src={solutionVertical} />
          </div>
          <div>
            다양한 채널 광고
            <br />및 홍보
          </div>
          <div>
            사용자 친화적 <br />
            UI/UX, <br />
            다양한 콘텐츠 제공
          </div>
          <div>
            간편한 가입 절차,
            <br />
            혜택 제공
          </div>
          <div>
            사용자 식습관 기반 식단
            <br /> 추천
          </div>
          <div>
            설문조사 기능,
            <br />
            후기 작성 기능
          </div>
        </SolutionContainer>
      </Container>
    </Frame>
  );
};

export default CustomerJouneyMap;
