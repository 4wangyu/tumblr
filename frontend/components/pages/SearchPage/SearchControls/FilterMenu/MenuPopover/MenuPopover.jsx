import React, { useMemo, useState } from 'react';
import { FilterList, FilterRule, FilterItem, FilterLink, FilterIcon, FilterText, FilterCheckIcon } from './MenuPopover.styled';
import Popover from 'components/molecules/Popover';

const MenuPopover = ({ filterItems = [] }) => {

  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = () => setPopoverOpen(prev => !prev);
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
    <>
      <button onClick={togglePopover}>Toggle Popover State</button>
      <Popover isOpen={popoverOpen} onClickOutside={closePopover}>
        <FilterList>
          {renderFilterItems}
        </FilterList>
      </Popover>
    </>
  );

};

export default MenuPopover;
