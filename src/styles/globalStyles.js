import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }

  body { 
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }

  a {
    text-decoration: none;
    color: white;
    font-family: 'Readex Pro', sans-serif;
  } 

  li {
    list-style: none;
  }
`;

export default GlobalStyles;