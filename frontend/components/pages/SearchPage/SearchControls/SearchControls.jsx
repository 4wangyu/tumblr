import React from 'react';
import FilterMenu from './FilterMenu';
import LayoutBtns from './LayoutBtns';
import { SearchControlsContainer, SearchFiltersBox } from './SearchControls.styled';

const SearchControls = () => (
  <SearchControlsContainer>
    <SearchFiltersBox>
      <FilterMenu />
    </SearchFiltersBox>
  </SearchControlsContainer>
);

export default SearchControls;
