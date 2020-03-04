import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme'
import α from 'color-alpha';
import { NavLink } from 'react-router-dom';
import { flexCenter } from 'styled/helpers';
// -------------------- AuthNav
export const Nav = styled.nav`
  justify-self: end;
  position: relative;
`;

export const NavBtn = styled(NavLink).attrs({
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

export const TabBtn = styled(TabLink).attrs(props => ({
  as: 'a'
}))`
  &, &:hover {color: #fff;}
`;

export const ComposeBtn = styled.button`
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