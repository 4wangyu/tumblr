import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import styledMap from 'styled-map';
import { cardPadding } from 'styled/base/Card.styled.js'
import { flexCol } from 'styled/helpers';
import TextareaAutosize from '../TextareaAutosize';

export const Quote = styled.div`
  ${cardPadding};
  ${flexCol};

  & > * {
    color: ${theme('colors.text')};
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  textarea {
    color: ${theme('colors.text')};
    &::placeholder {
      color: ${theme('colors.textLight')};
    }
  }
`;

export const QuoteWrapper = styled.span`
  display: flex;
  &::before {
    content: "“";
    color: ${styledMap`
      default: default;
      lightenText: ${theme('colors.textLight')};
    `};
  }
  &::after {
    content: "”";
    align-self: flex-end;
    color: ${styledMap`
      default: default;
      lightenText: ${theme('colors.textLight')};
    `}
  }
`;

export const QuoteTextareaAutosize = styled(TextareaAutosize)`
  font-size: 4.8rem;
  font-family: ${theme('titleFont')};
  line-height: 67px;
  align-self: flex-start;
  width: 100%;
`;

export const SourceWrapper = styled.span`
  display: flex;
  &::before {
    content: '— ';
    color: ${styledMap`
      default: default;
      lightenText: ${theme('colors.textLight')};
    `};
  }
`;

export const SourceTextarea = styled.textarea`
  margin-left: 1.2rem;
  font-size: ${theme('fontSize.md')};
  min-height: 8rem;
  width: 100%;
`;