import styled from 'styled-components';
import { key as theme } from "styled-theme";

export const TagIndex = styled.div`
  color: ${theme('colors.textLight')};
  padding: .5rem 2rem 1rem 1.5rem;
  margin-top: .5rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Tag = styled.span`
  cursor: pointer;
  padding: 0 5px;
  border-radius: 3px;
  margin: 0 1px;
`;
