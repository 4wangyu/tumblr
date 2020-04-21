import styled from 'styled-components';
import { key as theme } from 'styled-theme';

export const BackgroundContainer = styled.div`
  width: 100% !important;
  min-height: 100vh;

  /* background-image: url();*/
  background-color: ${theme('colors.primary')};
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: darken; */
  padding: 0;
`;