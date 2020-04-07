import styled from 'styled-components';
import α from 'color-alpha';
import { key as theme } from 'styled-theme';
import { NavLink } from 'react-router-dom';

export const ContentFilterContainer = styled.div`
  border-bottom: 1px solid ${α('#fff', .15)};
`;

export const FilterList = styled.div`
  color: ${α('#fff', .5)};
  display: flex;
  font-size: ${theme('fontSizes.md')};
  line-height: 1.1;
  margin: 0 1rem;
`;

export const FilterLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  padding: 1rem .8rem;

  &.active {
    color: ${α('#fff', .85)};
    font-weight: ${theme('fontWeights.heading')}
  }
`;