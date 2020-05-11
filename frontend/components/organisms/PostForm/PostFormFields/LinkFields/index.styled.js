import styled, { css } from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import TextareaAutosize from '../TextareaAutosize';

const LinkTextarea = styled(TextareaAutosize)`
  &, &::placeholder {
    color: ${({ theme }) => α(theme.colors.text, .65)};
  }
  width: 100%;
  z-index: 1;
`;

export const TitleTextarea = styled(LinkTextarea)`
  line-height: 34px;
  font-size: 2.4rem;
  font-weight: ${theme('fontWeights.title')};
  display: relative;
`;

export const DescriptionTextarea = styled(LinkTextarea)`
  line-height: 21px;
  font-size: ${theme('fontSizes.sm')};
`;