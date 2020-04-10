import React from 'react';
import { FILTERS } from '../ExplorePage';
import capitalize from 'util/capitalize';
import { ExploreNavContainer, FilterLinkList, FilterLinkItem } from './ExploreNav.styled';

const ExploreNav = () => (
  <ExploreNavContainer>
    <FilterLinkList>
      {FILTERS.map(filter => {
        const path = `/explore/${filter.toLowerCase()}`
        const innerHTML = capitalize(filter);
        return (
          <FilterLinkItem
            key={filter}
            to={path}
          >
            {innerHTML}
          </FilterLinkItem>
        )
      })}
    </FilterLinkList>
  </ExploreNavContainer>
);


export default ExploreNav;
