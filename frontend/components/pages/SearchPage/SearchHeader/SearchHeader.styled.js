import styled from 'styled-components';
import α from 'color-alpha';
import { key as theme } from 'styled-theme';

export const SearchHeaderContainer = styled.div`
  padding: 2rem 0;
  text-transform: uppercase;
  > * {
    display: flex;
    justify-content: center;
  }
`;

export const SearchTitle = styled.h2`
  color: ${α('#fff', .8)};
  font-size: 3.2rem;
  font-weight: ${theme('fontWeights.heading')};
`;

export const SearchSuggestions = styled.div`
  color: ${α('#fff', .7)};
  font-size: 1.8rem;
  font-weight: ${theme('fontWeights.subHeading')};
  padding-top: 2rem;
`;