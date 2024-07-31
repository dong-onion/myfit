import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100dvh;
  height: 100dvh;
  justify-content: center;
  margin-top: 200px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Pretendard-Bold';
`;

const NotFound = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);
  return (
    <Container>
      <Text>문제가 발생 했습니다.</Text>
      <Text>이용에 불편을 드려 죄송합니다.</Text>
      <Text> 5초 뒤 홈으로 돌아갑니다..</Text>
    </Container>
  );
};

export default NotFound;
