import { createGlobalStyle } from 'styled-components';
import { key as theme } from 'styled-theme';

const GlobalStyle = createGlobalStyle`
  @import url(${theme('fontUrl')});
  @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

  *, *::before, *::after {
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

  input, textarea, video {
    appearance: none;
    background-color: transparent;
    box-shadow: none;
    border: none;
    &:focus, &:hover {
      outline: none;
    }
  }

  textarea {
    line-height: 1.8;
    resize: none;
  }

  a, button {
    appearance: none;
    border: none;
    color: inherit;
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;