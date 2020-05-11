import React, { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FormErrorContainer, ExclamationIcon } from './FormError.styled';
import { descendAscend } from 'motions';

const FormError = ({ errors }) => {
  const isError = useMemo(() => Object.keys(errors).length > 0, [errors])
  const errorMessage = useMemo(() => errors[Object.keys(errors)[0]], [errors])

  return (
    <AnimatePresence>
      {isError && <FormErrorContainer
        as={motion.div}
        variants={descendAscend.variants}
        initial="enterExit"
        animate="center"
        exit="enterExit"
        transition={descendAscend.transitions}
      >
        <ExclamationIcon />
        <span>{errorMessage}</span>
      </FormErrorContainer>}
    </AnimatePresence>
  );
};

export default FormError;
// <FormError errors={errors} />
// import FormError from './FormError';
