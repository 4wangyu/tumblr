import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { Link } from 'react-router-dom';
import { flexCenter } from 'styled/helpers';
import { ReblogIcon } from 'styled/base/Icon.styled';

export const PostHeaderContainer = styled.header`
  ${flexCenter}
  border-bottom: .5px solid ${theme('colors.divider')};
  color: ${theme('colors.text')};
  justify-content: start;
  > *:not(:last-child) {
    padding-right: 1rem;
  }
  ${ReblogIcon} {
    color: ${theme('colors.textLight')};
  }
`;

export const BlogLink = styled(Link)`
  color: ${theme('colors.text')};
`;

export const ReblogLink = styled(Link)`
  color: ${theme('colors.textLight')};
`;

export const FollowBtn = styled.a`
  color: ${theme('colors.highlight')};
  display: inline-block;
  font-weight: ${theme('fontWeights.heading')};
  transition: transform .2s, opacity .3s ease-in-out;
  :active {
    transform: scale(1.2);
    opacity: 0;
  }
  :hover {
    text-decoration: underline;
  }
`;

export const UserAvatar = styled.img`
  border-radius: 3px;
  margin-right: 1rem;
  width: 3.8rem; 
`;