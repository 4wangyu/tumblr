import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { Link } from 'react-router-dom';
import { cardPadding } from 'styled/base/Card.styled';

export const CardHeader = styled.div`
  ${cardPadding};
  & > * {
    padding-left: .5rem;
    &:first-child {
      padding-left: 0;
    }
  }
`;

export const BlogLink = styled(Link)``;

export const ReblogLink = styled(Link)`
  color: ${theme('colors.textLight')};
`;

export const FollowBtn = styled.a`
  display: inline-block;
  &, &:hover {
    color: ${theme('colors.highlight')};
  }
  font-weight: ${theme('fontWeights.text')};
  transition: transform .2s, opacity .3s ease-in-out;
  &:active {
    transform: scale(1.2);
    opacity: 0;
  }
  
`;
