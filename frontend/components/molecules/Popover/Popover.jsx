import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useOnClickOutside from 'hooks/useOnClickOutside.js';
import styled from 'styled-components';
import { fade } from './motions';

const PopoverContainer = styled.div`
  box-shadow: 0 0 1.5rem 0 rgba(0,0,0,.1);
  overflow: hidden;
  position: absolute;
  top: 3rem;
  z-index: 20;
`;

const Popover = ({
  children,
  isOpen,
  onClickOutside = () => { }
}) => {

  const $container = useRef(null);

  useOnClickOutside({
    ref: $container,
    onClickOutside
  });

  return (
    <AnimatePresence>
      {isOpen && <PopoverContainer ref={$container} as={motion.div}
        variants={fade.variants}
        initial="enterExit"
        animate="center"
        exit="enterExit"
        transition={fade.transitions}
      >
        {children}
      </PopoverContainer>}
    </AnimatePresence>
  );
};

export default Popover;

