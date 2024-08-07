import React, { useRef } from 'react';
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
import Loading from './components/Loading';
import { useSystemMap } from '@/hooks/useSystemMap';
import usePreloadImage from '@/hooks/usePreloadImage';
import ErrorPage from '@/pages/ErrorPage';
import { useAccessControl } from '@/hooks/useAccessControl';

export const DownloadWrapper = styled.div`
  display: flex;
`;

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
  const downloadRef = useRef<HTMLDivElement>(null);
  const { level, serviceDescription } = useAccessControl();
  if (level === null || serviceDescription === null) {
    return <Loading />;
  }
  const { imagesLoaded } = usePreloadImage([systemMapInfo]);
  const { data, isError, isLoading, refetch, isRefetching } =
    useSystemMap(serviceDescription);

  if (isLoading || isRefetching) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  const {
    coreOrganizationAndProducts = [],
    stakeholders = [],
    keyEventsAndActivities = [],
    keyResourcesAndInfrastructure = [],
    summary = [],
  } = data || {};

  return !imagesLoaded ? null : (
    <DownloadWrapper ref={downloadRef}>
      <Frame type="stm" height={1364} src={systemMapInfo}>
        <ContentHeader
          refetch={refetch}
          downloadRef={downloadRef}
          title={'마이핏_시스템맵'}
        />
        <Container>
          <MapContainer>
            <MapWrapper1>
              <CurveImage src={curvedImg1} />
              <ContentBox1>
                <img src={systemMapActivity} />
                <ul>
                  {keyEventsAndActivities.map(
                    (activity: string, index: number) => (
                      <li key={index}>{activity}</li>
                    ),
                  )}
                </ul>
              </ContentBox1>
              <CurveImage src={curvedImg2} />
            </MapWrapper1>
            <MapWrapper2>
              <ContentBox2>
                <img src={systemMapProduct} />
                <ul>
                  {coreOrganizationAndProducts.map(
                    (product: string, index: number) => (
                      <li key={index}>{product}</li>
                    ),
                  )}
                </ul>
              </ContentBox2>
              <ContentBox3>
                <ul>
                  {summary.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </ContentBox3>
              <ContentBox2>
                <img src={systemMapaStakeholders} />
                <ul>
                  {stakeholders.map((stakeholder: string, index: number) => (
                    <li key={index}>{stakeholder}</li>
                  ))}
                </ul>
              </ContentBox2>
            </MapWrapper2>
            <MapWrapper3>
              <CurveImage src={curvedImg3} />
              <ContentBox1>
                <img src={systemMapInfra} />
                <ul>
                  {keyResourcesAndInfrastructure.map(
                    (infra: string, index: number) => (
                      <li key={index}>{infra}</li>
                    ),
                  )}
                </ul>
              </ContentBox1>
              <CurveImage src={curvedImg4} />
            </MapWrapper3>
          </MapContainer>
        </Container>
      </Frame>
    </DownloadWrapper>
  );
};

export default SystemMap;
