import styled from 'styled-components';

export const DownloadWrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding-bottom: 40px;

  * {
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const TitleContainer = styled.div`
  margin-top: 63px;
  display: flex;
  width: 100%;
  gap: 14px;
  margin-bottom: 14px;
`;

export const DomesticTitleWrapper = styled.div`
  border: 1px solid #c9d1ff;
  width: 49.5%;
  height: 64px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard-SemiBold';
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.005em;
  background-color: #e3e8fd;
`;

export const OverseasTitleWrapper = styled(DomesticTitleWrapper)`
  background-color: #ced7fc;
  border: 1px solid #b8c3ff;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
`;

export const ContentFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 49.5%;
`;

export const ContentWrapper = styled.div`
  height: 228px;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.color.white[0]};
  border-radius: 12px;
  border: 1px solid #b8c3ff;
  & ul {
    margin: 5px;
    padding-left: 30px;
  }

  & img {
    height: 36px;
  }

  & li {
    font-family: 'Pretendard-Medium';
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: left;
  }
`;
