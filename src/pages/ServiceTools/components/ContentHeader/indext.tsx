import { downloadIcon, editImgBlue, refreshIcon } from '@/assets';
import { SESSION_KEYS } from '@/utility/constants';
import { BMCanvas, Persona } from '@/utility/utils';
import React from 'react';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import styled from 'styled-components';

export const Container = styled.div`
  //공통 컴포넌트
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 56px;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  background-color: #dde4ff;
  width: 67%;
  height: 56px;
  border-radius: 9px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentTitle = styled.div`
  //공통 컴포넌트
  font-family: Pretendard-Bold;
  font-size: 24px;
  font-weight: 700;
  line-height: 33.6px;
  letter-spacing: -0.012em;
  text-align: left;

  color: ${({ theme }) => theme.color.primary[0]};
`;

export const EditImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ContentButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RefreshButton = styled.div`
  //공통 컴포넌트
  display: flex;
  gap: 10px;
  width: 141px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bg[1]};
  border-radius: 9px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.primary[1]};

  &:hover {
    background-color: ${({ theme }) => theme.color.white[0]};
  }

  & img {
    width: 24px;
    height: 24px;
  }

  & span {
    font-family: Pretendard-SemiBold;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.002em;
    text-align: left;

    color: ${({ theme }) => theme.color.primary[0]};
  }
`;

export const DownloadButton = styled.div`
  //공통 컴포넌트
  display: flex;
  gap: 10px;
  width: 157px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary[0]};
  border-radius: 9px;
  cursor: pointer;
  border: none;
  &:hover {
    background: linear-gradient(90deg, #4865ff 0%, #6f56ff 100%);
  }

  & img {
    width: 18px;
    height: 18px;
  }

  & span {
    font-family: Pretendard-SemiBold;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.002em;
    text-align: center;

    color: ${({ theme }) => theme.color.white[0]};
  }
`;

interface Props {
  refetch?: any;
}

const ContentHeader = ({ refetch }: Props) => {
  const serviceDescription = JSON.parse(
    sessionStorage.getItem(SESSION_KEYS.serviceDescription) || '',
  );
  return (
    <Container>
      <TitleWrapper>
        <ContentTitle>{serviceDescription}</ContentTitle>
        <EditImg src={editImgBlue} />
      </TitleWrapper>
      <ContentButtonContainer>
        <RefreshButton onClick={refetch}>
          <img src={refreshIcon} />
          <span>재생성</span>
        </RefreshButton>
        <DownloadButton>
          <img src={downloadIcon} />
          <span>다운로드</span>
        </DownloadButton>
      </ContentButtonContainer>
    </Container>
  );
};

export default ContentHeader;
