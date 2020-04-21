import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { flexCenterCol } from 'styled/helpers';

export const FormGroup = styled.div`
  ${flexCenterCol}
  background-color: ${theme('colors.secondary')};
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  z-index: 1;
`;


export const ActionLink = styled.a`
  cursor: pointer;
`;