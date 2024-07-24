import React from 'react';
import * as S from '../FirstResult.style';
import { readingGlasses, strategy1, strategy2, strategy3 } from '@/assets';
import { Skeleton } from '@/components';

const Loading = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.HeaderWrapper>
          <h2>서비스 SWOT 분석과 성장 전략을 제안해드려요!</h2>
          {/* <span className="title">{serviceDescription}&nbsp;</span> */}
          {/* <span>분석 결과</span> */}
          <Skeleton width={605} height={40} repeat={1} />
        </S.HeaderWrapper>
        <S.SummaryContainer>
          <S.SummaryWrapper>
            {/* {result} */}
            <Skeleton width={900} height={30} repeat={1} />
            <Skeleton width={800} height={30} repeat={1} />
            <Skeleton width={700} height={30} repeat={1} />
          </S.SummaryWrapper>
        </S.SummaryContainer>
        <S.AnalysisTitle>SWOT 분석</S.AnalysisTitle>
        <S.AnalysisInfoContainer>
          {[1, 2, 3, 4].map((item, index) => (
            <S.AnalysisInfoBox key={index}>
              {/* <img src={item.imgSrc} alt={item.alt} /> */}
              <ul>
                {/* {item.data &&
                  item.data.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))} */}
                <S.SkeletonList>
                  <Skeleton width={400} height={31} repeat={1} />
                </S.SkeletonList>
                <S.SkeletonList>
                  <Skeleton width={500} height={31} repeat={1} />
                </S.SkeletonList>
                <S.SkeletonList>
                  <Skeleton width={200} height={31} repeat={1} />
                </S.SkeletonList>
                <S.SkeletonList>
                  <Skeleton width={300} height={31} repeat={1} />
                </S.SkeletonList>
              </ul>
            </S.AnalysisInfoBox>
          ))}
        </S.AnalysisInfoContainer>
        <S.ServiceGrowthstrategyTitle>
          서비스 성장 전략 제안
        </S.ServiceGrowthstrategyTitle>
        <S.StrategyWrapper>
          <S.Strategy>
            <img src={strategy1} alt="strategy1" />
            {/* <span>{strategy?.[0]}</span> */}
            <Skeleton width={900} height={21} repeat={1} />
          </S.Strategy>
          <S.Strategy>
            <img src={strategy2} alt="strategy2" />
            {/* <span>{strategy?.[1]}</span> */}
            <Skeleton width={900} height={21} repeat={1} />
          </S.Strategy>
          <S.Strategy>
            <img src={strategy3} alt="strategy3" />
            {/* <span>{strategy?.[2]}</span> */}
            <Skeleton width={900} height={21} repeat={1} />
          </S.Strategy>
        </S.StrategyWrapper>
      </S.InnerContainer>
      <S.TestNavBar>
        <S.TestNavTitle>
          내 서비스의 <span className="bold">부족한 점</span>은 뭘까?
        </S.TestNavTitle>
        <S.TestNavButton type="button">
          취약점 파악하기 <S.ButtonIcon src={readingGlasses} />{' '}
        </S.TestNavButton>
      </S.TestNavBar>
    </S.Container>
  );
};

export default Loading;
