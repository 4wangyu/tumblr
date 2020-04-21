import React, { useContext } from 'react'
import { AuthFormContext } from '../AuthStepSlider';
import { InputField } from './AuthField.styled';

const AuthField = ({ field, type = 'text' }) => {
  const {
    handleBlur, handleChange,
    userFields,
  } = useContext(AuthFormContext);


  const value = userFields[field];

  return (
    <InputField
      key={field}
      type={type}
      onBlur={handleBlur}
      onChange={handleChange}
      name={field}
      value={value}
    />
  );
};

export default AuthField;
