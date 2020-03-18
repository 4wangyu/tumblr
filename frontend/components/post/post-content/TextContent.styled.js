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
  line-height: 1.4;
  font-family: ${theme('titleFont')};
  font-size: ${theme('fontSizes.md')};
`;

export const TextWrapper = styled.p`
  line-height: 1.6;
  font-size: ${theme('fontSizes.sm')};
`;
