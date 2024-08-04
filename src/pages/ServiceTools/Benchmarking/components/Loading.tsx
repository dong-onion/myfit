import { HoldOn, Skeleton } from '@/components';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypeInfoLoading from '../../components/TypeInfoLoading';
import Retry from '@/components/Retry/Retry';

export const Container = styled.div`
  width: 100%;
  height: 1916px;
  display: flex;
`;

export const ContentSectionContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: 0 8%;
`;

export const TitleContainer = styled.div`
  margin-top: 63px;
  display: flex;
  width: 100%;
  gap: 14px;
  margin-bottom: 14px;
`;

export const DomesticTitleWrapper = styled(Skeleton)`
  width: 49.5%;
  height: 64px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverseasTitleWrapper = styled(DomesticTitleWrapper)``;

export const ContentContainer = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
`;

export const ContentWrapper = styled(Skeleton)`
  height: 150px;
  padding: 25px 30px;
  border-radius: 12px;
`;

const Loading = ({ refetch }: { refetch?: any }) => {
  const [showRetryButtton, setShowRetryButton] = useState<boolean>(false);
  useEffect(() => {
    const timer: NodeJS.Timeout | undefined = setTimeout(() => {
      setShowRetryButton(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Container>
      {!showRetryButtton ? (
        <HoldOn top={167} />
      ) : (
        <Retry
          top={167}
          refetch={refetch}
          setShowRetryButton={setShowRetryButton}
        />
      )}
      <TypeInfoLoading height={1916} />
      <ContentSectionContainer>
        <Skeleton width={600} height={44} style={{ marginTop: 60 }} />
        <TitleContainer>
          <DomesticTitleWrapper width={'49.5%'} height={64} />
          <OverseasTitleWrapper width={'49.5%'} height={64} />
        </TitleContainer>
        <ContentContainer>
          {Array.from({ length: 18 }).map((_, index) => (
            <ContentWrapper
              height={150}
              width={'auto'}
              key={index}
            ></ContentWrapper>
          ))}
        </ContentContainer>
      </ContentSectionContainer>
    </Container>
  );
};

export default Loading;
