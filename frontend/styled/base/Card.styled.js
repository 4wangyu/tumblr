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
  width: ${styledMap`
    default: 54rem;
  `};
`;

export const cardPadding = css`
  padding: 1.5rem 2rem;
`;

export const CardContent = styled.div`
  ${props => !props.noPadding && cardPadding};
  font-weight: ${theme('fontWeights.text')};
`;

export const Tags = styled.div`
  color: ${theme('colors.textLight')};
  padding: .5rem 2rem 1rem 1.5rem;
  margin-top: .5rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Tag = styled.span`
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  margin: 0 1px;
`;

export default Card;