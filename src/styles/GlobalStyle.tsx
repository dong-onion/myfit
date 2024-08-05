import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    word-break: keep-all;
  }
  body {    
    font-family: 'Pretendard-Regular', 'Pretendard-Light','Pretendard-Medium', 'Pretendard-SemiBold', 'Pretendard-Bold', 'Pretendard-ExtraBold', 'Montserrat-Light', 'Montserrat-Regular','Montserrat-Medium','Montserrat-SemiBold', 'Montserrat-Bold', 'Montserrat-ExtraBold', sans-serif;
    margin: 0;
    padding:0;
  }
  h1, h2, h3, h4, h5, h6, p, span {
    margin: 0;    
    white-space: pre-wrap;
  }
  html, body{    
  }
  ul, li {
    margin: 0;
    padding:0
  }
`;

export default GlobalStyle;
