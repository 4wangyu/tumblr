import styled, { css } from 'styled-components';
import { key as theme } from 'styled-theme';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const FilterList = styled.ul`
  background-color: ${theme('colors.secondary')};
  border-radius: 3px;
  color: ${theme('colors.text')};
  font-weight: ${theme('fontWeights.subHeading')};
  list-style-type: none;
  max-height: 70vh;
  padding: .3rem 0;
  width: 17.5rem;
`;

export const FilterRule = styled.hr`
  border: none;
  border-bottom: 1px solid ${theme('colors.divider')};
  margin: .4rem 0;
`;

export const FilterLink = styled(Link)`
  align-items: center;
  display: flex;
  padding: .8rem 1.2rem;

  :hover {
    background-color: ${theme('colors.highlightHover')};
  }
`;

export const FilterIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`;

export const FilterText = styled.span`
  flex-grow: 1;
  margin: .5rem 1.2rem 0;  
`;

export const FilterCheckIcon = styled(FontAwesomeIcon).attrs({
  icon: faCheck
})`
  color: ${theme('colors.highlight')};
`;

export const FilterItem = styled.li`
  ${({ color }) => color && css`

    ${FilterIcon} {
      color: ${color};
    }
  
    ${FilterLink}:hover {
      background-color: ${color}
      color: ${theme('colors.secondary')};

      ${FilterIcon}, ${FilterCheckIcon} {
        color: ${theme('colors.secondary')};
      }
    }
  `};
`;