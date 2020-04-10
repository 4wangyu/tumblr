import React from 'react';
import { FilterMenuContainer, FilterBtn, FilterName, FilterIconBox, DownChevronIcon } from './FilterMenu.styled';
import MenuPopover from './MenuPopover';

const FilterMenu = () => {
  return (
    <FilterMenuContainer>
      <FilterBtn>
        <FilterName>Most popular</FilterName>
        <FilterIconBox>
          <DownChevronIcon />
        </FilterIconBox>
      </FilterBtn>
      <MenuPopover open={true} />
    </FilterMenuContainer>
  );
};

export default FilterMenu;
