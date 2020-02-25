import styled from 'styled-components';
import styledMap, { mapToTheme as theme } from 'styled-map';
import α from 'color-alpha';
import { flexCenter } from 'styled/helpers';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({ theme }) => α(theme.colors.primary, .95)};
  backdrop-filter: blur(.5rem);
  z-index: 10;
`;

export const ModalComponentWrapper = styled.div`
  ${flexCenter}
  z-index: 50;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

