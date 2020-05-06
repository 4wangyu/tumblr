import React, { useContext, useMemo, useEffect } from 'react'
import { AuthFormContext } from '../AuthStepSlider';
import { ErrorMsg } from './AuthError.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { descendAscend } from 'motions';


const AuthError = ({ field = null, message, fields = [] }) => {
  const { errors, lockSlider, unlockSlider } = useContext(AuthFormContext);
  const _field = fields.find(f => errors[f] && errors[f].length > 0) || field
  const fieldErrors = errors[_field];

  const errorMessage = useMemo(() => fieldErrors && (message || fieldErrors[0]), [fieldErrors]);

  useEffect(() => {
    Boolean(errorMessage) ? lockSlider() : unlockSlider();
  }, [errorMessage])

  return (
    <AnimatePresence>
      {errorMessage && <ErrorMsg
        as={motion.div}
        variants={descendAscend.variants}
        initial="enterExit"
        animate="center"
        exit="enterExit"
        transition={descendAscend.transitions}
      >
        {errorMessage}
      </ErrorMsg>}
    </AnimatePresence>
  );
};

export default AuthError;
