import React from 'react';
import styled from 'styled-components';
import Frame from '../components/Frame';
import {
  curvedImg1,
  curvedImg2,
  curvedImg3,
  curvedImg4,
  systemMapActivity,
  systemMapaStakeholders,
  systemMapInfo,
  systemMapInfra,
  systemMapProduct,
} from '@/assets';
import ContentHeader from '../components/ContentHeader/indext';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: 0 4%;

  * {
    color: ${({ theme }) => theme.color.gray[0]};
    word-break: keep-all;
  }
`;

export const MapContainer = styled.div`
  height: 988px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 63px;
`;

export const MapWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  gap: 3%;
`;

export const MapWrapper2 = styled(MapWrapper1)`
  gap: 1.2%;
`;

export const MapWrapper3 = styled(MapWrapper1)`
  align-items: flex-start;
`;

export const ContentBox1 = styled.div`
  padding: 30px 30px;
  overflow: hidden;
  width: 36%;
  height: 280px;
  border: 1px solid ${({ theme }) => theme.color.primary[4]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white[0]};

  & img {
    max-height: 36px;
    object-fit: contain;
    width: 81%;
  }

  & ul {
    margin-top: 20px;
    padding-left: 30px;
  }

  & li {
    font-family: Pretendard-Medium;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.002em;
    text-align: left;
  }
`;
export const ContentBox2 = styled(ContentBox1)`
  height: 400px;
  width: 30%;
  background-color: ${({ theme }) => theme.color.white[0]};
`;
export const ContentBox3 = styled(ContentBox1)`
  height: 400px;
  width: 36%;
  background-color: #d8e0ff;

  & ul {
    margin-top: 0;
  }
`;

export const CurveImage = styled.img`
  width: 17%;
  max-height: 190px;
`;

const SystemMap = () => {
  return (
    <Frame height={1364} src={systemMapInfo}>
      <ContentHeader />
      <Container>
        <MapContainer>
          <MapWrapper1>
            <CurveImage src={curvedImg1} />
            <ContentBox1>
              <img src={systemMapActivity} />
              <ul>
                <li>재료 구매 및 핫도그 제작</li>
                <li>학교 앞에서 핫도그 판매</li>
                <li>학교 주변에서 홍보 및 판촉 행사 고객</li>
                <li>응대 및 피드백 수집</li>
              </ul>
            </ContentBox1>
            <CurveImage src={curvedImg2} />
          </MapWrapper1>
          <MapWrapper2>
            <ContentBox2>
              <img src={systemMapProduct} />
            </ContentBox2>
            <ContentBox3>
              <ul>
                <li>
                  고객의 구매는 핫도그 장사 조직의 매출과 수익에 직접적인 영향을
                  미침
                </li>
                <li>
                  재정적 기관의 자금 지원은 핫도그 장사 조직의 운영에 필수적임
                </li>
                <li>
                  컨설턴트의 경영 전략은 핫도그 장사 조직의 성과를 향상시키는 데
                  중요한 역할을 함
                </li>
                <li>
                  공급자의 핫도그 재료 품질은 핫도그 제품의 맛과 품질에 영향을
                  미침
                </li>
                <li>판매자의 고객 서비스는 고객 만족도에 영향을 미침</li>
              </ul>
            </ContentBox3>
            <ContentBox2>
              <img src={systemMapaStakeholders} />
            </ContentBox2>
          </MapWrapper2>
          <MapWrapper3>
            <CurveImage src={curvedImg3} />
            <ContentBox1>
              <img src={systemMapInfra} />
            </ContentBox1>
            <CurveImage src={curvedImg4} />
          </MapWrapper3>
        </MapContainer>
      </Container>
    </Frame>
  );
};

export default SystemMap;
