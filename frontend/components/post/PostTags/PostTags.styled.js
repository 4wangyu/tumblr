import styled from 'styled-components';
import { key as theme } from "styled-theme";
import { Link } from 'react-router-dom';

export const TagList = styled.div`
  color: ${theme('colors.textLight')};
  padding: .5rem 2rem 1rem 1.5rem;
  margin-top: .5rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const TagLink = styled(Link)`
  cursor: pointer;
  padding: 0 5px;
  border-radius: 3px;
  margin: 0 1px;
`;
