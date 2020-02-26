import styled from 'styled-components';
import styledMap, { mapToTheme as theme } from 'styled-map';

export const Card = styled.div`
  border-radius: 3px;
  background-color: ${theme('colors', 'secondary')};
  color: ${theme('colors', 'text')};
  font-size: ${theme('fontSizes', 'md')};
  font-weight: ${theme('fontWeights', 'title')};
  width: ${styledMap`
    default: 45rem;
  `};
`;

export const postContentPadding = css`
  padding: 1.5rem 2rem;
`;

export const CardContent = styled.div`
  ${postContentPadding};
  font-weight: ${theme('fontWeights', 'text')};
`;