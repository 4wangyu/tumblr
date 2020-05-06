import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { flexCol, flexCenterCol } from 'styled/helpers';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchbarContainer = styled.form`
  align-items: center;
  position: relative;
  display: flex;
  font-size: 1.4rem;
  height: 3.4rem;

  ::before {
    content: '\f002';
    font-family: 'Font Awesome 5 Free';
    position: absolute;
    left: 1rem;
    top: 0.7rem;
    font-size: 1.7rem;
    color: ${α('white', .65)};
    font-weight: 600;
  }


  :hover {
    ::before {color: ${({ theme }) => α(theme.colors.primary, .85)};}
  }
`;

export const SearchbarInput = styled.input.attrs({
  name: 'searchbar', placeholder: 'Search Thumblr', autoComplete: 'off'
})`
  background-color: ${α('white', .25)};
  border: none;
  border-radius: 3px;
  display: inline-block;
  font-weight: ${theme('fontWeights.subHeading')};
  height: 100%;
  outline: none;
  padding: 7px 15px 7px 35px;
  width: 100%;
  
  ::placeholder {
    background-color: transparent;
    color: ${α('white', .65)};
  }

  :hover {
    background-color: white;

    ::placeholder {
      color: ${α('black', .65)};
    }
  }
`;
export const LoaderBox = styled.div`
  color: ${α('black', .65)};
  margin-left: -6rem;
`;

export const ResultsContainer = styled.div`
  ${flexCol};
  background-color: ${theme('colors.secondary')};
  border-radius: 3px;
  color:  ${theme('colors.text')};
  font-weight: ${theme('fontWeights.subHeading')};
  max-height: 51rem;
  overflow: scroll;
  width: 100%;
`;

export const ResultsSection = styled.div`
  ${flexCol};
`;

export const ResultsHeader = styled.span`
  background-color: ${theme('colors.tertiary')};
  color:  ${theme('colors.textLight')};
  font-size: 1.5rem;
  padding: 1rem;
`;

export const ResultsList = styled.div`
  ${flexCol};
`;

export const ResultsItem = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: min-content auto min-content;
  justify-content: stretch;
  padding: 1.2rem 1rem;
  padding-right: 3rem;
  position: relative;

  :hover {
    background-color: ${theme('colors.highlightAlt')}
  }
`;

export const Underline = styled.span`
  text-decoration: underline;
`;

export const ResultsItemLink = styled(ResultsItem).attrs({
  as: Link
})``;

export const ResultsTitle = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const ResultsText = styled.span`
  overflow-wrap: break-word;
`;

export const ResultsSubtext = styled.span`
  color:  ${theme('colors.textLight')};
  font-weight: ${theme('fontWeights.text')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SearchIcon = styled(FontAwesomeIcon).attrs({
  icon: faSearch
})`
  font-size: 1.4rem;
`;