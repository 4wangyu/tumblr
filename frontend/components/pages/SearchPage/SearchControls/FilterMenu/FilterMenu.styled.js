import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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