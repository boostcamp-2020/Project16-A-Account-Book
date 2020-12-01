import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`    
    @font-face {
      font-family: 'Bmeuljiro';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    
    ${reset} ;
  body{
    font-family: Bmeuljiro,sans-serif !important;
    overflow : hidden;
    button{
      font-family :  Bmeuljiro,sans-serif !important;
    }
    box-sizing: border-box;
  }

  menu, ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
