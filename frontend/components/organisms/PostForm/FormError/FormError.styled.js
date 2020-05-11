
import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export const FormErrorContainer = styled.div`
  align-items: center
  background-color: ${theme('colors.warning')};
  color: #fff;
  display: flex;
  padding: .5rem 1rem !important;
`;

export const ExclamationIcon = styled(FontAwesomeIcon).attrs({ icon: faExclamationCircle })`
  font-size: 2rem;
  margin-right: 1rem;
`