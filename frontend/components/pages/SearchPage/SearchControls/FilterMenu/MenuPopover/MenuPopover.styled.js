import styled from 'styled-components';
import { key as theme } from 'styled-theme';

//menu item padding .8 .12 rem
export const MenuPopoverContainer = styled.div`
  background-color: ${theme('colors.secondary')};
  border-radius: 3px;
  box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
  color: ${theme('colors.text')};
  max-height: 70vh;
  padding: .3rem 0;
  position: absolute;
  z-index: 20;
  width: 17.5rem;
`;
