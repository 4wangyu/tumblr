import styled, { css } from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
// import TextareaAutosize from '../TextareaAutosize';

const LinkTextarea = styled.textarea.attrs({ rows: 1 })`
  &, &::placeholder {
    color: ${({ theme }) => α(theme.colors.text, .65)};
  }
  z-index: 1;
`;

export const TitleTextarea = styled(LinkTextarea)`
  line-height: 1.4;
  font-size: 2.4rem;
  font-weight: ${theme('fontWeights.heading')};
  display: relative;
`;

export const DescriptionTextarea = styled(LinkTextarea)`
  line-height: 1.6;
  font-size: ${theme('fontSizes.md')};
`;