import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { cardPadding } from 'styled/base/Card.styled.js'
import { flexCol } from 'styled/helpers';
import TextareaAutosize from '../TextareaAutosize';

export const Chat = styled.div`
  ${cardPadding}
  ${flexCol}
  & > * {
    color: ${theme('colors.text')};
    &:not(:first-child) {
      margin-top: 1rem;
    }

    textarea, input {
      color: ${theme('colors.text')};
      &::placeholder {
        ${theme('colors.textLight')};
      }
    }
  }
`;

export const TitleInput = styled.input`
  font-size: 3.6rem;
  font-weight: ${theme('fontWeights.subHeading')};
`;

export const DialogueTextarea = styled.textarea.attrs({ rows: 5 })`
  line-height: 20px;
  font-family: ${theme('titleFont')};
  font-size: ${theme('fontSizes.lg')};
`;