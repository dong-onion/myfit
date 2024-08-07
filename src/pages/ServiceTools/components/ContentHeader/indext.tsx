import { downloadIcon, editImgBlue, refreshIcon } from '@/assets';
import { Modal } from '@/components';
import { SESSION_KEYS } from '@/utility/constants';
import { loadPageToPdf } from '@/utility/utils';
import React, { useState } from 'react';
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
  &:active {
    transition: all 0.1s;
    transform: scale(0.95);
  }
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
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bg[1]};
  border-radius: 9px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.primary[1]};

  &:hover {
    background-color: ${({ theme }) => theme.color.white[0]};
  }

  &:active {
    transition: all 0.2s;
    transform: scale(0.95);
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
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary[0]};
  border-radius: 9px;
  cursor: pointer;
  border: none;
  &:hover {
    background: #647cff;
  }
  &:active {
    transform: scale(0.95);
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
  refetch: any;
  title: string;
  downloadRef: React.RefObject<HTMLDivElement>;
}

const ContentHeader = ({ refetch, title, downloadRef }: Props) => {
  const serviceDescription = JSON.parse(
    sessionStorage.getItem(SESSION_KEYS.serviceDescription) || '',
  );
  const [showButton, setShowButton] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleClickDownload = async () => {
    if (!downloadRef.current) {
      return;
    }

    setShowButton(false);
    await loadPageToPdf(downloadRef.current, title);
    setShowButton(true);
  };
  return (
    <Container>
      {modalVisible && <Modal refetch={refetch} onClose={handleModalClose} />}
      <TitleWrapper>
        <ContentTitle>{serviceDescription}</ContentTitle>
        <EditImg src={editImgBlue} onClick={handleModalOpen} />
      </TitleWrapper>
      {showButton && (
        <ContentButtonContainer>
          <RefreshButton onClick={refetch}>
            <img src={refreshIcon} />
            <span>재생성</span>
          </RefreshButton>
          <DownloadButton onClick={handleClickDownload}>
            <img src={downloadIcon} />
            <span>다운로드</span>
          </DownloadButton>
        </ContentButtonContainer>
      )}
    </Container>
  );
};

export default ContentHeader;
