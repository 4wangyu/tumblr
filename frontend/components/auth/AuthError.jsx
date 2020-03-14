import React, { useContext, useMemo } from 'react'
import { AuthFormContext } from './AuthStepSlider';
import { ErrorMsg } from './Auth.styled';

const AuthError = ({ field, message }) => {
  const { errors } = useContext(AuthFormContext);
  const fieldErrors = errors[field];
  if (!fieldErrors || fieldErrors instanceof Array && fieldErrors.length === 0) return null;

  const errorMessage = useMemo(() => message || fieldErrors[0], [fieldErrors])
  return (
    <ErrorMsg>
      {errorMessage}
    </ErrorMsg>
  );
};

export default AuthError;
