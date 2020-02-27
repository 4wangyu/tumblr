import styled, { css } from 'styled-components';
import { key as theme } from 'styled-theme';

export const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  ${P => {
    if (P.image) {
      return `background-image: url(${P.src})`
    } else {
      return `background-color: ${theme('colors.primary')}`
    }
  }};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: darken;
  padding: 0;
`;