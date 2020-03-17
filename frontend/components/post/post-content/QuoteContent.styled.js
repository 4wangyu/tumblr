import styled, { css } from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';

export const Quote = styled.quote`
  line-height: 1.4;
  font-family: ${theme('titleFont')};
  font-size: 2.6rem;
  font-weight: ${theme('fontWeights.text')};
`;

export const Source = styled.cite`
  line-height: 1.6;
  font-weight: ${theme('fontWeights.text')};
  font-size: ${theme('fontSizes.sm')};
`;
