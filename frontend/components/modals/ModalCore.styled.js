import styled, { css } from 'styled-components';
// import { key as theme } from 'styled-theme';
import { flexCenter } from 'styled/helpers';
import α from 'color-alpha';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({ theme }) => α(theme.colors.primary, .96)};
  backdrop-filter: blur(.4rem);
  z-index: 10;
`;

export const ModalComponentWrapper = styled.div`
  ${flexCenter};
  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;