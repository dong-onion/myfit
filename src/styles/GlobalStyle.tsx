import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {    
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
