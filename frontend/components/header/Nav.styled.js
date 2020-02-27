import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme'
import α from 'color-alpha';
import { NavLink } from 'react-router-dom';
import { flexCenter } from 'styled/helpers';

export const Nav = styled.nav``;

// -------------------- AuthNav
export const NavBtn = styled(NavLink)`
  background-color: ${styledMap`
    default: ${α('#fff', .9)};
    secondary: ${α('#000', .2)};
  `};
  border: none;
  border-radius: 2px;
  color: ${styledMap`
    default: #000;
    secondary: #fff;
  `};
  cursor: pointer;
  font-weight: ${theme('fontWeights.heading')};
  font-size: 1.5rem;
  padding: 8px 13px;
  text-decoration: none;
  margin-left: 1rem;
`;

// -------------------- PrivateNav
export const NavTabIndex = styled(Nav)`
  ${flexCenter};
`;

export const TabLink = styled(NavLink).attrs(props => ({
  activeClassName: 'selected'
}))`
  padding: 0 1.6rem;
  color: ${α('#fff', .65)};
  &.selected {color: #fff;}
`;

export const TabBtn = styled.button`
  cursor: pointer;
  width: 4.5rem;
  height: 3.2rem;
  border-radius: 3px;
  background-color: ${theme('colors.highlight')};
  padding: 0 1rem 0 1rem;
  color: ${theme('colors.primary')};
  &:hover {
    color: ${theme('colors.primary')};
  }
  border: none;
  margin-left: 1rem;
`;