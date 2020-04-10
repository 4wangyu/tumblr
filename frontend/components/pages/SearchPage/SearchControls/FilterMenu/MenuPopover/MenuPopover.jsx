import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuPopoverContainer } from './MenuPopover.styled';

const MenuPopover = ({ open }) => {
  return (
    <AnimatePresence>
      {open && <MenuPopoverContainer>
        Menu Popover
    </MenuPopoverContainer>}
    </AnimatePresence>

  );
};

export default MenuPopover;
