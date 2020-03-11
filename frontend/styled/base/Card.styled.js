import styled, { css } from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';

export const Card = styled.div`
  align-items: center;  
  background-color: ${theme('colors.secondary')};
  border-radius: 3px;
  color: ${theme('colors.text')};
  font-size: ${theme('fontSizes.md')};
  font-weight: ${theme('fontWeights.heading')};
  line-height: 1.8;
  width: ${styledMap`
    default: 54rem;
    fullWidth: 100%;
  `};
`;

export const cardPadding = css`
  padding: 1.5rem 2rem;
`;

export const CardContent = styled.div`
  ${props => !props.noPadding && cardPadding};
  font-weight: ${theme('fontWeights.text')};
`;

export default Card;