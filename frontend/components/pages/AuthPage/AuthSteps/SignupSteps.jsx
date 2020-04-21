import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Btn from 'components/atoms/Btn';
import { FormGroup } from './AuthSteps.styled';
import AuthField from '../AuthField';
import AuthError from '../AuthError';
import { AuthFormContext } from '../AuthStepSlider';

export const SignupStep1 = () => {
  const { slideRight } = useContext(AuthFormContext);

  return (
    <>
      <Btn size='large' onClick={slideRight}>Get Started</Btn>
      <Btn size='large' type='tertiary' as={Link} to='/login'>Log In</Btn>
    </>
  );
};


export const SignupStep2 = () => {
  const { handleSubmit } = useContext(AuthFormContext);

  return (
    <>
      <FormGroup>
        <AuthField field='email' />
        <AuthField field='password' type="password" />
        <AuthField field='username' />
      </FormGroup>
      <AuthError fields={['email', 'password', 'username']} />
      <Btn size='large' onClick={handleSubmit}>Sign up</Btn>
    </>
  );
};

export default [SignupStep1, SignupStep2];