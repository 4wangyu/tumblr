import React, { useContext } from 'react'
import { AuthFormContext } from './AuthStepSlider';
import { InputField } from './Auth.styled';

const AuthField = ({ field }) => {
  const {
    handleBlur, handleChange,
    userFields,
  } = useContext(AuthFormContext);


  const value = userFields[field];

  return (
    <InputField
      key={field}
      onBlur={handleBlur}
      onChange={handleChange}
      name={field}
      value={value}
    />
  );
};

export default AuthField;
