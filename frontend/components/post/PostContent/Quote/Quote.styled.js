import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { cardPadding } from 'styled/base/Card.styled.js'
import { flexCol } from 'styled/helpers';

export const QuoteContainer = styled.figcaption`
  ${cardPadding};
  ${flexCol};
  & > * {
    color: ${theme('colors.text')};
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

export const QuoteText = styled.blockquote`
  line-height: 1.4;
  font-family: ${theme('titleFont')};
  font-size: 2.6rem;
  word-break: break-word;
  &::before, &::after {
    font-family: ${theme('font')};
  }
  &::before {
    content: "“";
  }
  &::after {
    content: "”";
  }
`;

export const SourceText = styled.cite`
  line-height: 1.6;
  font-size: ${theme('fontSizes.sm')};
  &::before {
    content: '— ';
  }
`;
