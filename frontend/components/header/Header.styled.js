import styled from 'styled-components';
import styledMap from 'styled-map';
import α from 'color-alpha';
import { key as theme } from 'styled-theme';
import { flexCenter } from 'styled/helpers';

export const Header = styled.header`
  // Grid ----->
  display: grid;
  grid-template-columns: min-content minmax(auto, 48rem) auto;
  align-items: center;
  justify-content: stretch;
  // <----------
  height: 5.4rem;
  border-bottom: 1px solid ${α('white', .15)};
  padding: 0 2rem;
  transition: default;
`;

export const Logo = styled.span`
  cursor: default;
  text-shadow: 2px 2px 3px ${α('#404040', .15)};
  font-family: ${theme('titleFont')};
  color: white;
  font-weight: ${theme('fontWeights.title')};
  font-size: ${styledMap`
    default: ${theme('fontSizes.title')};
    large: ${theme('fontSizes.titleLg')};
  `};
`;

export const Searchbar = styled.form`
  position: relative;
  margin-left: 2rem;
  /* width: 45rem; */
  font-size: 1.5rem;
  font-weight: ${theme('fontWeights.subHeading')};
  height: 3.4rem;

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
  &, & * {
    transition: color .3s, background-color .3s ease;
  }


  &:hover {
    &::before {color: ${({ theme }) => α(theme.colors.primary, .85)};}
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
  
  &::placeholder {
    color: ${α('white', .65)};
    background-color: transparent
  }

  &:hover {
    background-color: white;
    &::placeholder {
      color: ${α('black', .65)};
    }
  }
`;
