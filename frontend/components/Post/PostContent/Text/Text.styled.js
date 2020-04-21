import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { cardPadding } from 'styled/base/Card.styled.js'
import { flexCol } from 'styled/helpers';

export const TextContainer = styled.div`
  ${cardPadding};
  ${flexCol};
  & > * {
    color: ${theme('colors.text')};
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

export const TitleField = styled.h4`
  font-size: 3.6rem;
  font-weight: ${theme('fontWeights.subHeading')};
`;

export const TextField = styled.p`
`;
