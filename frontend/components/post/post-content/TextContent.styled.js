import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { cardPadding } from 'styled/base/Card.styled.js'
import { flexCol } from 'styled/helpers';

export const Text = styled.div`
  ${cardPadding};
  ${flexCol};
  & > * {
    color: ${theme('colors.text')};
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

export const TextTitle = styled.h3`
  font-size: 3.6rem;
  font-weight: ${theme('fontWeights.subHeading')};
`;

export const TextWrapper = styled.p`
`;
