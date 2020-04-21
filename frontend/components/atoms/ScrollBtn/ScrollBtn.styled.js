import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import α from 'color-alpha';

export const ScrollBtnContainer = styled.button.attrs({
  'aria-label': 'Scroll to top'
})``;

export const UpArrow = styled(FontAwesomeIcon).attrs({
  icon: faLongArrowAltUp
})`
  bottom: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px 0px;
  color: ${α('#fff', .85)};
  cursor: pointer;
  font-size: 3.5rem;
  position: fixed;
  right: 3rem;
`;