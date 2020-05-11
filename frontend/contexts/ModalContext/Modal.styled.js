import styled from 'styled-components';
import { flexCenter } from 'styled/helpers';
import α from 'color-alpha';

export const ModalOverlay = styled.div`
  backdrop-filter: blur(.4rem);
  background: ${({ theme }) => α(theme.colors.primary, .96)};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
`;

export const ModalDialogue = styled.div`
  ${flexCenter};
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
`;