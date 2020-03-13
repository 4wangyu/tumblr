import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Btn from 'styled/base/Btn.styled';
import { FormGroup } from './Auth.styled';
import AuthField from './AuthField';
import { AuthFormContext } from './AuthStepSlider';

export const SignupStep1 = () => {
  const { slideRight } = useContext(AuthFormContext);

  return (
    <>
      <Btn large onClick={slideRight}>Get Started</Btn>
      <Btn large tertiary as={Link} to='/login'>Log In</Btn>
    </>
  );
};


export const SignupStep2 = () => {
  const { handleSubmit } = useContext(AuthFormContext);

  return (
    <>
      <FormGroup>
        <AuthField field='email' />
        <AuthField field='password' />
        <AuthField field='username' />
      </FormGroup>
      <Btn large onClick={handleSubmit}>Sign up</Btn>
    </>
  );
};

export default [SignupStep1, SignupStep2];