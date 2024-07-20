import React from 'react';
import styled from 'styled-components';
import { starGray } from '@/assets';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray};
`;

export const SubTitle = styled.h2`
  margin-top: 33px;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.color.gray};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  width: 100%;
`;

export const InputTitle = styled.h3`
  margin-right: 24px;
`;

export const Input = styled.input`
  //todo media query로 반응형으로 만들기
  max-width: 792px;
  height: 84px;
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.color.blue};
  border-radius: 8px;
  background-color: #f1f3f5;
  padding: 30px 32px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.color.blue};
`;

export const LevelWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 574px;
  left: 32px;
  margin-top: 44px;
`;

export const LevelTitle = styled.h3`
  margin-right: 24px;
`;

export const LevelBox = styled.div`
  width: 152px;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 14px 27px 14px 20px;
  display: flex;
  margin-right: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export const LevelIcon = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-right: 5px;
`;

export const LevelBoxText = styled.span`
  font-size: 22px;
  font-weight: '500';
  letter-spacing: -1.1px;
`;

export const LeveInfoText = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  left: 88px;
  position: relative;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.blue};
  width: 490px;
`;

export const CompleteButton = styled.div`
  width: 300px;
  height: 78px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.blue};
  display: flex;
  margin-top: 80px;
`;

export const CompleteButtonText = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;

  color: ${({ theme }) => theme.color.white};
`;

const ServiceRegistration = () => {
  return (
    <>
      {/* <HeaderLayout /> */}
      <Container>
        <Wrapper>
          <Title>나의 서비스를 입력해 주세요</Title>
          <SubTitle>
            서비스/아이템을 설명할 수 있는 간단한 설명 하나면 충분해요
          </SubTitle>
          <ContentWrapper>
            <InputWrapper>
              <InputTitle>서비스명</InputTitle>
              <Input />
            </InputWrapper>
            <LevelWrapper>
              <LevelTitle>단계</LevelTitle>
              <LevelBox>
                <LevelIcon src={starGray} />
                <LevelBoxText>씨앗단계</LevelBoxText>
              </LevelBox>
              <LevelBox>
                <LevelIcon src={starGray} />
                <LevelBoxText>새싹단계</LevelBoxText>
              </LevelBox>
              <LevelBox>
                <LevelIcon src={starGray} />
                <LevelBoxText>나무단계</LevelBoxText>
              </LevelBox>
            </LevelWrapper>
            <LeveInfoText>
              사업 시작 단계로 문제 이해를 위한 시장 조사, 고객 조사가 필요해요
            </LeveInfoText>
          </ContentWrapper>
          <CompleteButton>
            <CompleteButtonText>완료</CompleteButtonText>
          </CompleteButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default ServiceRegistration;
