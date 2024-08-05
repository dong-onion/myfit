import { useAccessControl } from '@/hooks/useAccessControl';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../FirstResult/components/Loading';
import { useSWOTAnalysis } from '@/hooks/useSwotAnalysis';
import {
  mainBackground,
  mainContentBcm,
  mainContentBlp,
  mainContentBmc,
  mainContentCjm,
  mainContentPsn,
  mainContentStm,
  mainContentSwot,
  mainContentTest,
  mainContentSwotHover,
  swotOpportunity,
  swotStrength,
  swotThreat,
  swotWeakness,
  mainContentBcmHover,
  mainContentBlpHover,
  mainContentPsnHover,
  mainContentCjmHover,
  mainContentStmHover,
  mainContentBmcHover,
  mainContentTestHover,
  editImg,
} from '@/assets';
import styled from 'styled-components';
import { Modal } from '@/components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 177px;
  background-image: url(${mainBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  margin-top: 100px;
  font-family: 'Pretendard-Bold';
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.012em;

  color: ${({ theme }) => theme.color.gray[0]};
`;
export const HeaderSubTitle = styled.span`
  font-family: Pretendard-SemiBold;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.005em;
  text-align: left;
  margin-top: 30px;

  color: ${({ theme }) => theme.color.gray[0]};
`;

export const SummaryContainer = styled.div`
  margin-top: 20px;
  padding: 45px 60px;
  width: 100%;
  height: 240px;
  background-color: #ffffff66;
  border: 1px solid #ffffff99;
  border-radius: 12px;
  box-shadow: 20px 30px 60px 0px #3952ff1a;
`;
export const SummaryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > .level {
    margin-left: 10px;
    width: 96px;
    height: 38px;
    border-radius: 500px;
    background-color: ${({ theme }) => theme.color.primary[0]};
    color: ${({ theme }) => theme.color.white[0]};
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Pretendard-SemiBold;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.002em;
    text-align: left;
  }

  & > span {
    font-family: Pretendard-Bold;
    font-size: 22px;
    font-weight: 700;
    line-height: 35.2px;
    letter-spacing: -0.005em;
    text-align: center;

    color: ${({ theme }) => theme.color.primary[0]};
  }
`;
export const EditWrapper = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6px;
  right: -6px;
`;
export const EditImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const SummaryContent = styled.div`
  margin-top: 20px;

  & span {
    font-family: Pretendard-Meidum;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.002em;
    text-align: left;
    word-break: keep-all;

    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const ContentSectionContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > h2 {
    font-family: Pretendard-SemiBold;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.005em;
    text-align: left;
    margin-bottom: 20px;

    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

export const ContentSectionWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
export const ContentImg = styled.img<{ src: string; hoverSrc: string }>`
  src: ${({ src }) => src};
  width: 282px;
  height: 282px;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    content: url(${(props) => props.hoverSrc});
    transition: 0.25s;
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.color.gray[3]};
    transform: translateY(-0.25em);
  }

  &:active {
    transition: all 0.2s;
    transform: scale(0.95);
  }
  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.color.gray[3]};
    box-shadow: none;
  }
  &:disabled:hover {
    transform: none;
  }
  &:disabled:active {
    transform: scale(1);
  }
`;

const Main = () => {
  // const navigate = useNavigate();
  // const { isValidSession, serviceDescription, level } = useAccessControl();

  // if (!isValidSession) {
  //   return <Loading />;
  // }

  // const { data, isLoading, isError, refetch } = useSWOTAnalysis(
  //   serviceDescription as string,
  //   level as number,
  // );

  // if (isLoading) {
  //   return <Loading refetch={refetch} />;
  // }

  // if (isError) {
  //   refetch();
  // }

  // const { strength, weakness, opportunity, threat, result, strategy } =
  //   data || {};

  // const swotData = [
  //   { imgSrc: swotStrength, alt: 'swotStrength', data: strength },
  //   { imgSrc: swotWeakness, alt: 'swotWeakness', data: weakness },
  //   { imgSrc: swotOpportunity, alt: 'swotOpportunity', data: opportunity },
  //   { imgSrc: swotThreat, alt: 'swotThreat', data: threat },
  // ];

  const handleClickTestNavButton = () => {
    // navigate('/type');
  };

  const mainContentImgs = [
    { src: mainContentSwot, hoverSrc: mainContentSwotHover },
    { src: mainContentPsn, hoverSrc: mainContentPsnHover },
    { src: mainContentCjm, hoverSrc: mainContentCjmHover },
    { src: mainContentBmc, hoverSrc: mainContentBmcHover },
    { src: mainContentBlp, hoverSrc: mainContentBlpHover },
    { src: mainContentStm, hoverSrc: mainContentStmHover },
    { src: mainContentBcm, hoverSrc: mainContentBcmHover },
    { src: mainContentTest, hoverSrc: mainContentTestHover },
  ];

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };
  return (
    <Container>
      <InnerContainer>
        <HeaderTitle>창업 아이템이 고민이신가요?</HeaderTitle>
        <HeaderSubTitle>마이핏이 당신의 마켓핏을 점검해드릴게요</HeaderSubTitle>
        {modalVisible && <Modal onClose={handleModalClose} />}
        <SummaryContainer>
          <SummaryTitleWrapper>
            <span>20대 여성을 위한 와인 구독 서비스</span>
            <div className="level">씨앗단계</div>
            <EditWrapper onClick={handleModalOpen}>
              <EditImg src={editImg} alt="edit" />
            </EditWrapper>
          </SummaryTitleWrapper>
          <SummaryContent>
            <span>
              20대 여성을 위한 와인 구독 서비스는 와인에 대한 전문 지식과 다양한
              와인을 제공하는 것이 강점입니다.
              <br />
              하지만 와인에 대한 관심이 적은 20대 여성이 주요 고객층이라는 점과
              경쟁 업체의 등장이 약점입니다.
              <br />
              와인 구독 서비스 시장의 성장과 와인에 대한 인식 변화는 기회이며,
              경제적 상황 악화와 경쟁 업체의 마케팅 강화는 위협입니다.
            </span>
          </SummaryContent>
        </SummaryContainer>
        <ContentSectionContainer>
          <h2>마이핏이 추천해요</h2>
          <ContentSectionWrapper>
            {mainContentImgs.map((item, index) => (
              <ContentImg
                key={index}
                src={item.src}
                hoverSrc={item.hoverSrc}
                alt="mainContentImg"
              />
            ))}
          </ContentSectionWrapper>
        </ContentSectionContainer>
      </InnerContainer>
    </Container>
  );
};

export default Main;
