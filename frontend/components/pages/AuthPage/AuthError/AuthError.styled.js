import styled from 'styled-components';
import α from 'color-alpha';

export const ErrorMsg = styled.div`
  align-self: stretch;
  background-color: ${α('#000', .33)};
  border-radius: 3px;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
`;