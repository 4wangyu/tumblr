import { createGlobalStyle } from 'styled-components';
import { key as theme } from 'styled-theme';

const GlobalStyle = createGlobalStyle`
  @import url(${theme('fontUrl')});
  @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

  *, *:before, *:after {
    box-sizing: border-box; 
    margin: 0px;
    padding: 0px;
  }

  html {
    font-size: 62.5%; /* 10px */
  }

  body {
    color: white;
    font-family: ${theme('font')};
    font-size: ${theme('fontSizes.md')};
    font-weight: ${theme('fontWeights.text')};
    margin: 0;
    padding: 0;
    background-color: ${theme('colors.primary')};
  }

  input, textarea {
    appearance: none;
    box-shadow: none;
    border: none;
    &:focus, &:hover {
      outline: none;
    }
  }

  a, button {
    &, &:focus, &:hover, &:active {
      appearance: none;
      cursor: pointer;
      outline: none;
      text-decoration: none;
      color: inherit;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;