import styled from 'styled-components';
import α from 'color-alpha';
import styledMap from 'styled-map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';

export const LayoutBtnsContainer = styled.div``;

export const LayoutBtn = styled.button`
  color: ${styledMap`
    default: #fff;
    active: ${α('#fff', .65)};
  `};
  background-color: transparent;
  margin-left: 1.1rem;
`;

export const LayoutIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
`;
export const ListIcon = styled(LayoutIcon).attrs({
  icon: faThList
})``;

export const GridIcon = styled(LayoutIcon).attrs({
  icon: faTh
})``;