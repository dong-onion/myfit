import React, { useRef } from 'react';
import Frame from '../components/Frame';
import * as S from './Blueprint.style';
import {
  blueprintInfo,
  contactImg,
  f2fServiceUsersImg,
  hyperClova,
  levelImg,
  nonf2fServiceUsersImg,
  supportProcessImg,
  userActiveImg,
} from '@/assets';
import ContentHeader from '../components/ContentHeader/indext';
import Loading from './components/Loading';
import { useBlueprint } from '@/hooks/useBlueprint';
import usePreloadImage from '@/hooks/usePreloadImage';
import ErrorPage from '@/pages/ErrorPage';
import { useAccessControl } from '@/hooks/useAccessControl';

const Blueprint = () => {
  const { level, serviceDescription } = useAccessControl();
  if (level === null || serviceDescription === null) {
    return <Loading />;
  }
  const downloadRef = useRef<HTMLDivElement>(null);
  const { imagesLoaded } = usePreloadImage([blueprintInfo]);

  const { data, isError, isLoading, refetch, isRefetching } =
    useBlueprint(serviceDescription);

  if (isLoading || isRefetching) {
    return <Loading refetch={refetch} />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return !imagesLoaded ? null : (
    <S.DownloadWrapper ref={downloadRef}>
      <Frame type="blp" src={blueprintInfo}>
        <ContentHeader
          downloadRef={downloadRef}
          title="마이핏_서비스_블루프린트"
          refetch={refetch}
        />
        <S.Container>
          <S.LevelContainer>
            <div>
              <img src={levelImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.level}</div>
            ))}
          </S.LevelContainer>
          <S.PurposeContainer>
            <div>
              <img src={contactImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.touchPoint}</div>
            ))}
          </S.PurposeContainer>
          <S.ActionContainer>
            <div>
              <img className="action" src={userActiveImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.action}</div>
            ))}
          </S.ActionContainer>
          <S.InteractionLineContainer>
            <div className="box">
              <span>상호작용선</span>
            </div>
            <div className="line" />
          </S.InteractionLineContainer>
          <S.EmotionContainer>
            <div>
              <img className="f2f" src={f2fServiceUsersImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.f2f}</div>
            ))}
          </S.EmotionContainer>
          <S.SightLine>
            <div className="box">
              <span>가시선</span>
            </div>
            <div className="line" />
          </S.SightLine>
          <S.NeedsContainer>
            <div>
              <img className="f2f" src={nonf2fServiceUsersImg} />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.nonef2f}</div>
            ))}
          </S.NeedsContainer>
          <S.InnerInteractionLine>
            <div className="box">
              <span>내부&nbsp;상호작용선</span>
            </div>
            <div className="line" />
          </S.InnerInteractionLine>
          <S.SolutionContainer>
            <div>
              <img
                className="process"
                src={supportProcessImg}
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            {data?.map((item, index) => (
              <div key={index}>{item.process}</div>
            ))}
          </S.SolutionContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 20,
              width: '100%',
            }}
          >
            <img src={hyperClova} width={200} height={15} />
          </div>
        </S.Container>
      </Frame>
    </S.DownloadWrapper>
  );
};

export default Blueprint;
