import styled from 'styled-components';
import styledMap, { mapToTheme as theme } from 'styled-map';
import α from 'color-alpha';

export const Header = styled.nav`
  height: 5.4rem;
  display: grid;
  grid-template-columns: min-content minmax(20rem, 45rem) min-content;
  border-bottom: 1px solid ${α('white', .15)};
  padding: 0 2rem;
`;

export const Logo = styled.span`
  cursor: default;
  text-shadow: 2px 2px 3px ${α('#404040', .15)};
  font-family: ${theme('titleFont')};
  color: white;
  font-weight: ${theme('fontWeights', 'title')};
  font-size: ${styledMap`
    default: ${theme('fontSize', 'iconMd')};
    large: ${theme('fontSize', 'iconLg')};
  `};
`;

export const Searchbar = styled.form`
  position: relative;
  margin-left: 2rem;
  /* width: 45rem; */
  font-size: 1.5rem;
  font-weight: ${theme('fontWeights', 'subHeading')};

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

export const SearchbarInput = styled.input`
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
