import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  //공통 컴포넌트
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //
`;

export const ContentTitle = styled.div`
  //공통 컴포넌트
  font-family: Pretendard-Bold;
  font-size: 32px;
  font-weight: 700;
  line-height: 44.8px;
  letter-spacing: -0.012em;
  color: ${({ theme }) => theme.color.primary[0]};
`;

// export const ContentButtonContainer = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// export const RefreshButton = styled.div`
//   //공통 컴포넌트
//   width: 146px;
//   height: 56px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ theme }) => theme.color.bg[1]};
//   border-radius: 9px;
//   cursor: pointer;
//   border: 1px solid ${({ theme }) => theme.color.primary[1]};

//   &:hover {
//     background-color: ${({ theme }) => theme.color.white[0]};
//   }

//   & img {
//     width: 24px;
//     height: 24px;
//   }

//   & span {
//     font-family: Pretendard-SemiBold;
//     font-size: 20px;
//     font-weight: 600;
//     line-height: 20px;
//     letter-spacing: -0.002em;
//     color: ${({ theme }) => theme.color.primary[0]};
//   }
// `;

// export const DownloadButton = styled.div`
//   //공통 컴포넌트
//   width: 164px;
//   height: 56px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ theme }) => theme.color.primary[0]};
//   border-radius: 9px;
//   cursor: pointer;
//   border: none;
//   &:hover {
//     background: linear-gradient(90deg, #4865ff 0%, #6f56ff 100%);
//   }

//   & img {
//     width: 24px;
//     height: 24px;
//   }

//   & span {
//     font-family: Pretendard-SemiBold;
//     font-size: 20px;
//     font-weight: 600;
//     line-height: 20px;
//     letter-spacing: -0.002em;
//     color: ${({ theme }) => theme.color.white[0]};
//   }
// `;

const ContentHeader = () => {
  const serviceDescription = JSON.parse(
    sessionStorage.getItem('serviceDescription') || '',
  );
  return (
    <Container>
      <ContentTitle>{serviceDescription}</ContentTitle>
    </Container>
  );
};

export default ContentHeader;
