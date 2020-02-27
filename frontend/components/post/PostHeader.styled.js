import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { Link } from 'react-router-dom';
import { cardPadding } from 'styled/base/Card.styled';

export const CardHeader = styled.div`
  ${cardPadding};
`;

export const BlogLink = styled(Link)``;

export const ReblogLink = styled(Link)`
  color: ${theme('colors.textLight')};
`;

export const FollowBtn = styled.a`
   color: ${theme('colors.highlight')};
   font-weight: ${theme('fontWeights.text')};
`;
