import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilterMenuContainer, FilterBtn, FilterName, FilterIconBox, DownChevronIcon, FilterList, FilterRule, FilterItem, FilterLink, FilterIcon, FilterText, FilterCheckIcon } from './FilterMenu.styled';
// import MenuPopover from './MenuPopover';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { faBorderAll, faClock, faFont, faCameraRetro, faQuoteLeft, faLink, faHeadphones, faVideo } from '@fortawesome/free-solid-svg-icons';
import { popColors } from 'styled/theme';
import Popover from 'components/molecules/Popover';

const FilterMenu = () => {
  const { query, filter } = useParams();
  const filterItems = [
    { icon: faBorderAll, name: 'All Posts', divide: true, path: `/search/${query}/` },
    { icon: faFont, name: 'Text', path: `/search/${query}/text` },
    { color: popColors.redOrange, icon: faCameraRetro, name: 'Photo', path: `/search/${query}/photo` },
    { color: popColors.pizzazz, icon: faQuoteLeft, name: 'Quote', path: `/search/${query}/quote` },
    { color: popColors.malachite, icon: faLink, name: 'Link', path: `/search/${query}/link` },
    { color: popColors.cornflowerBlue, icon: faHeadphones, name: 'Audio', path: `/search/${query}/audio` },
    { color: popColors.hotPink, icon: faVideo, name: 'Video', path: `/search/${query}/video` },
  ];

  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = e => {
    e.stopPropagation();
    setPopoverOpen(prev => !prev);
  };
  const closePopover = () => setPopoverOpen(false);

  const renderFilterItems = useMemo(() => filterItems.map(({
    checked,
    color,
    icon,
    name,
    path = '/',
    divide = false
  }) => (
      <FilterItem key={name} color={color}>
        <FilterLink to={path}>
          <FilterIcon icon={icon} />
          <FilterText>{name}</FilterText>
          {checked && <FilterCheckIcon />}
        </FilterLink>
        {divide && <FilterRule />}
      </FilterItem>
    )), [filterItems]);

  return (
    <FilterMenuContainer>
      <FilterBtn onClick={togglePopover}>
        <FilterName >Post type</FilterName>
        <FilterIconBox>
          <DownChevronIcon />
        </FilterIconBox>
      </FilterBtn>
      <Popover isOpen={popoverOpen} onClickOutside={closePopover}>
        <FilterList>
          {renderFilterItems}
        </FilterList>
      </Popover>
    </FilterMenuContainer>
  );
};

export default FilterMenu;
