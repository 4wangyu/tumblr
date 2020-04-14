import React from 'react';
import { FilterMenuContainer, FilterBtn, FilterName, FilterIconBox, DownChevronIcon } from './FilterMenu.styled';
import MenuPopover from './MenuPopover';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { faClock, faFont, faCameraRetro, faQuoteLeft, faLink, faHeadphones, faVideo } from '@fortawesome/free-solid-svg-icons';
import { popColors } from 'styled/theme';

const variantItems = {
  contentType: [
    { icon: faFont, name: 'Text' },
    { color: popColors.redOrange, icon: faCameraRetro, name: 'Photo' },
    { color: popColors.pizzazz, icon: faQuoteLeft, name: 'Quote', divide: true },
    { color: popColors.malachite, icon: faLink, name: 'Link' },
    { color: popColors.cornflowerBlue, icon: faHeadphones, name: 'Audio' },
    { color: popColors.hotPink, icon: faVideo, name: 'Video' },
  ],
  frequency: [
    { icon: faGem, name: 'Popular', path: '/' },
    { icon: faClock, name: 'Recent', path: '/' }
  ],
}

const FilterMenu = ({ variant = 'contentType' }) => {
  return (
    <FilterMenuContainer>
      <FilterBtn>
        <FilterName>Most popular</FilterName>
        <FilterIconBox>
          <DownChevronIcon />
        </FilterIconBox>
      </FilterBtn>
      <MenuPopover open={true} filterItems={variantItems[variant]} />
    </FilterMenuContainer>
  );
};

export default FilterMenu;
