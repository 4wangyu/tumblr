import styled from 'styled-components';
import α from 'color-alpha';

export const Card = styled.div`
  /* position: absolute; */
  width: 54rem;
  border-radius: 3px;
  background-color: white;
  color: black;
  font-size: 1.5rem;
  font-weight: ${({ theme: T }) => T.font.weight.semiBold};
  & > * {
    padding: 1.5rem 2rem;
  }
`;

// ------------------------------------------ Content

export const Content = styled.div`
  padding: 0;
`;