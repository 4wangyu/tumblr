import styled from 'styled-components';
import { mapToTheme as theme } from 'styled-map';
import { NavLink } from 'react-router-dom';
import { postContentPadding } from './Post.styled';

export const CardHeader = styled.div`
  ${postContentPadding};
`;

export const BlogLink = styled(NavLink)``;

export const ReblogLink = styled(NavLink)`
  color: ${theme('colors', 'textLight')};
`;

export const FollowBtn = styled.a`
   color: ${theme('colors', 'highlight')};
   font-weight: ${theme('fontWeights', 'text')};
`;
