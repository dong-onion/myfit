import React from 'react';
import styled from 'styled-components';
import Frame from '../components/Frame';
import { curvedImg1, customerJourneyMapInfo } from '@/assets';
import ContentHeader from '../components/ContentHeader/indext';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  * {
    color: ${({ theme }) => theme.color.gray[0]};
  }
`;

const SystemMap = () => {
  return (
    <Frame src={customerJourneyMapInfo}>
      <ContentHeader />
      <Container />
      <img src={curvedImg1} style={{ width: '50%' }} />
    </Frame>
  );
};

export default SystemMap;
