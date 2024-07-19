import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
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
