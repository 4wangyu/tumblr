import styled from 'styled-components';
import α from 'color-alpha';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from 'styled/theme';

export const TabIndex = styled.div``;

export const TabItemLink = styled(NavLink).attrs(P => ({
  activeClassName: 'selected'
}))`
  padding: 0 1.6rem;
  color: ${α('white', .65)};

  &.selected {color: white;}
`;

export const TabItemBtn = styled.button`
  width: 4.5rem;
  height: 3.2rem;
  border-radius: 3px;
  background-color: ${colors.dodgerBlue};
  padding: 0 1rem 0 1rem;
  color: ${colors.midnightBlue};
  border: none;
  margin-left: 1rem;
`;

export const FAIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`;



