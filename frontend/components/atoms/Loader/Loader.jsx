import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoaderContainer, LoaderBarIndex, LoaderBar } from "./Loader.styled";
import * as FM from './motions';

const Loader = ({ isLoading, size = 'large' }) => (
  <AnimatePresence
    custom={size}
  >
    {isLoading && (
      <LoaderContainer size={size}>
        <LoaderBarIndex
          as={motion.div}
          variants={FM.containerVariants}
          transitions={FM.containerTransition}
          initial="start"
          animate="end"
          exit="leave"
        >
          <LoaderBar
            custom={size}
            as={motion.span}
            variants={FM.barVariants}
            transition={FM.barTransition}
          />
          <LoaderBar
            custom={size}
            as={motion.span}
            variants={FM.barVariants}
            transition={FM.barTransition}
          />
          <LoaderBar
            custom={size}
            as={motion.span}
            variants={FM.barVariants}
            transition={FM.barTransition}
          />
        </LoaderBarIndex>
      </LoaderContainer>
    )}
  </AnimatePresence>
);

export default Loader;
