import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { Link } from 'react-router-dom';
import { cardPadding } from 'styled/base/Card.styled';
import { flexCenter } from 'styled/helpers';
import { ReblogIcon } from 'styled/base/Icon.styled';

export const CardHeader = styled.div`
  ${flexCenter}
  color: ${theme('colors.text')};
  justify-content: start;
  border-bottom: .5px solid ${theme('colors.divider')};
  ${cardPadding};
  & > * {
    padding-left: .5rem;
    &:first-child {
      padding-left: 0;
    }
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

export const AvatarImg = styled.img`
  border-radius: 3px;
  margin-right: 1rem;
  width: 3rem; 
`;

