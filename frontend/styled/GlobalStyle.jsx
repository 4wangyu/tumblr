import { createGlobalStyle } from 'styled-components';
import { mapToTheme as theme } from 'styled-map';

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
    font-size: ${theme('fontSizes', 'md')};
    font-weight: ${theme('fontWeights', 'text')};
    margin: 0;
    padding: 0;
    background-color: ${theme('colors', 'primary')};
  }

  input, textarea {
    appearance: none;
    box-shadow: none;
    border: none;
    &:focus, &:hover {
      outline: none;
    }
  }

  button {
    outline: none;
    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;