import styled, {css} from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const FilterMenuContainer = styled.div`
  color: ${α('#fff', .65)};
  font-size: 1.8rem;
  position: relative;
`;

export const FilterBtn = styled.button`
  background-color: transparent;
  display: flex;
`;

export const FilterName = styled.span`
  font-weight: ${theme('fontWeights.heading')};
`;

export const FilterIconBox = styled.span`
  margin-left: 1.5rem;
`;

export const DownChevronIcon = styled(FontAwesomeIcon).attrs({
  icon: faChevronDown
})``;

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