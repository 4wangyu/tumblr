import React, { useContext, useMemo } from 'react'
import { AuthFormContext } from './AuthStepSlider';
import { ErrorMsg } from './Auth.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { descend } from './motions';
const AuthError = ({ field, message }) => {
  const { errors } = useContext(AuthFormContext);
  const fieldErrors = errors[field];
  // if (!fieldErrors || fieldErrors instanceof Array && fieldErrors.length === 0) return null;

  const errorMessage = useMemo(() => message || (fieldErrors && fieldErrors[0]), [fieldErrors])
  return (
    <AnimatePresence>
      {errorMessage && <ErrorMsg
        as={motion.div}
        variants={descend.variants}
        initial="enterExit"
        animate="center"
        exit="enterExit"
        transition={descend.transitions}
      >
        {errorMessage}
      </ErrorMsg>}
    </AnimatePresence>
  );
};

export default AuthError;
