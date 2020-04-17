import styled from 'styled-components';
import { key as theme } from 'styled-theme'
import α from 'color-alpha';
import { NavLink } from 'react-router-dom';
import { flexCenter } from 'styled/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// -------------------- AuthNav
export const AuthNavContainer = styled.nav`
  justify-self: end;
  position: relative;
`;

export const AuthBtnLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  background-color: ${α('#fff', .9)};
  &, &:hover {
    color: ${theme('colors.primary')};
  }

  &.active{
    background-color: ${α('#000', .1)};
    &, &:hover {
      color: #fff;
    }
  }

  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-weight: ${theme('fontWeights.heading')};
  font-size: 1.5rem;
  padding: 8px 13px;
  text-decoration: none;
  margin-left: 1rem;
  transition: default;
`;

// -------------------- PrivateNav
export const PrivateNavContainer = styled(AuthNavContainer)`
  ${flexCenter};
`;

export const PrivateNavLink = styled(NavLink).attrs({
  activeClassName: 'link-active'
})`
  color: ${α('#fff', .65)};
  padding: 0 1.6rem;
  
  &.link-active {
    color: #fff;
  }

  &.link-hover {
    :hover {
      color: #fff;
    }
  }
`;

export const PrivateLink = styled(PrivateNavLink).attrs({ as: 'a' })``;

export const NavIcon = styled(FontAwesomeIcon)`
  font-size: 2.1rem;
`;

export const ComposeBtn = styled.button`
  background-color: ${theme('colors.highlight')};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  height: 3.2rem;
  margin-left: 1rem;
  padding: 0 1rem 0 1rem;
  width: 4.5rem;

  &, &:hover {
    color: ${theme('colors.primary')};
  }
`;