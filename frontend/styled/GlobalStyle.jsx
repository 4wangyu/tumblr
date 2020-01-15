import { createGlobalStyle } from 'styled-components';
import { font, colors } from './theme';

const GlobalStyle = createGlobalStyle`
  @import url(${font.url});

  @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

  *, *:before, *:after {
    box-sizing: border-box; 
    /*  content-box (default) 
          -> height is only content, padding is added
        border-box 
          -> height includes padding and content 
    */
    margin: 0px;
    padding: 0px;
  }

  html {
    font-size: 62.5%; /* 10px */
  }

  body {
    color: white;
    font-family: ${font.family.primary};
    font-size: 2rem;
    font-weight: ${font.weight.regular};
    margin: 0;
    padding: 0;
    background-color: ${colors.midnightBlue};
  }

  input, textarea {
    appearance: none;
    box-shadow: none;
    border: none;
    &:focus, &:hover {
      outline: none;
    }
  }
`;

export default GlobalStyle;