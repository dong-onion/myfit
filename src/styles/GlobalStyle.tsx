import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('./Pretendard-Light.otf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./Pretendard-Regular.otf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./Pretendard-Medium.otf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./Pretendard-SemiBold.otf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./Pretendard-Bold.otf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./Pretendard-ExtraBold.otf') format('truetype');
    font-weight: 800;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: 'Pretendard';
    margin: 0;
    padding:0;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  html, body{
    height: 100%;
  }
`;

export default GlobalStyle;
