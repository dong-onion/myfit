import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('./Pretendard-Light.otf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('./Pretendard-Regular.otf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('./Pretendard-Medium.otf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('./Pretendard-SemiBold.otf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('./Pretendard-Bold.otf') format('truetype');
  }

  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('./Pretendard-ExtraBold.otf') format('truetype');
    font-weight: 800;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    /* font-family: 'Prtendard'; */
    font-family: 'Pretendard-Regular', 'Pretendard-Light','Pretendard-Medium', 'Pretendard-SemiBold', 'Pretendard-Bold', 'Pretendard-ExtraBold', sans-serif;
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
