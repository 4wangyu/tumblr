import styled from 'styled-components';
import α from 'color-alpha';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = styled.nav`
  height: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${α('white', .15)};
  padding: 0 2rem;
`;

const NavSection = styled.div`
  display: flex;
    align-items: center;
`;

export const LeftNav = styled(NavSection)`

`;

export const RightNav = styled(NavSection)`

`;

export const Logo = styled.span`
  text-shadow: 2px 2px 3px ${α('#404040', .15)};
  font-family: ${({ theme: T }) => T.font.family.title};
  color: white;
  font-weight: ${({ theme: T }) => T.font.weight.bold};
  font-size: ${P => P.large ? '6rem' : '4rem'};
`;

export const SearchBar = styled.form`
  position: relative;
  margin-left: 2rem;
  width: 45rem;
  font-size: 1.5rem;
  font-weight: ${({ theme: T }) => T.font.weight.medium};
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
    &::before {
      color: ${α('black', .65)};
    }
  }
`;

const SearchBarInput = styled.input`
  border: none;
  border-radius: 3px;
  background-color: ${α('white', .25)};
  outline: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 7px 15px 7px 35px;
  
  &::placeholder {
    color: ${α('white', .65)};
  }

  &:hover {
    background-color: white;
    &::placeholder {
      color: ${α('black', .65)};
      background-color: white;
    }
  }
`;

SearchBar.Input = SearchBarInput

export const TabLink = styled(NavLink).attrs(P => ({
  activeClassName: 'selected'
}))`
  padding: 0 1.6rem;
  color: ${α('white', .65)};
  &.selected {
    color: white;
  }
`;

export const TabBtn = styled.button`
  width: 4.5rem;
  height: 3.2rem;
  border-radius: 3px;
  background-color: ${({ theme: T }) => T.colors.dodgerBlue};
  padding: 0 1rem 0 1rem;
  color: ${({ theme: T }) => T.colors.midnightBlue};
  border: none;
  margin-left: 1rem;
`;

export const TabIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  
`
export const Tabs = styled.div`

`
export const NavBtn = styled(NavLink).attrs(P => ({
  activeClassName: 'selected'
}))`
  background-color: ${P => P.secondary ? α('black', .2) : α('white', .9)};
  border: none;
  border-radius: 2px;
  color: ${P => P.secondary ? 'white' : 'black'};
  cursor: pointer;
  font-weight: ${({ theme: T }) => T.font.weight.semiBold};
  font-size: 1.5rem;
  padding: 8px 13px;
  text-decoration: none;
  margin-left: 1rem;

  /* &.selected {
    display: none;
  } */
`;
