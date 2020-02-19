import styled from 'styled-components';
import styledMap from 'styled-map';
import α from 'color-alpha';
import { NavLink } from 'react-router-dom';
import { font } from 'styled/theme';

export const NavBar = styled.nav`
  height: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${α('white', .15)};
  padding: 0 2rem;
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftNav = styled(NavSection)``;

export const RightNav = styled(NavSection)``;

export const Logo = styled.span`
  cursor: default;
  text-shadow: 2px 2px 3px ${α('#404040', .15)};
  font-family: ${font.family.title};
  color: white;
  font-weight: ${font.weight.bold};
  font-size: ${styledMap`
    default: 4rem;
    large: 6rem;
  `};
`;

export const SearchBar = styled.form`
  position: relative;
  margin-left: 2rem;
  width: 45rem;
  font-size: 1.5rem;
  font-weight: ${font.weight.medium};

  &::before {
    content: '\f002';
    font-family: 'Font Awesome 5 Free';
    position: absolute;
    left: 1rem;
    top: 0.7rem;
    font-size: 1.7rem;
    color: ${α('white', .65)};
    font-weight: 600;
  }

  &:hover {
    &::before {color: ${α('black', .65)};}
  }
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 3px;
  background-color: ${α('white', .25)};
  outline: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 7px 15px 7px 35px;
  
  &::placeholder {color: ${α('white', .65)};}

  &:hover {
    background-color: white;
    &::placeholder {
      color: ${α('black', .65)};
      background-color: white;
    }
  }
`;

export const NavBtn = styled(NavLink).attrs({
  activeClassName: 'selected'
})`
  background-color: ${styledMap`
    default: ${α('white', .9)};
    secondary: ${α('black', .2)};
  `};
  border: none;
  border-radius: 2px;
  color: ${styledMap`
    default: #000;
    secondary: #fff;
  `};
  cursor: pointer;
  font-weight: ${font.weight.semiBold};
  font-size: 1.5rem;
  padding: 8px 13px;
  text-decoration: none;
  margin-left: 1rem;

  /* &.selected {
    
  } */
`;
