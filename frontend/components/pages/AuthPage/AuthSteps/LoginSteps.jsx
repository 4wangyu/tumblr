import React, { useContext } from 'react';
import Btn from 'components/atoms/Btn';
import { FormGroup, ActionLink } from './AuthSteps.styled';
import AuthField from '../AuthField';
import AuthError from '../AuthError';
import { AuthFormContext } from '../AuthStepSlider';

export const LoginStep1 = () => {
  const { $nextBtn, slideRight, startGhostLogin } = useContext(AuthFormContext);

  return (
    <>
      <FormGroup>
        <AuthField field='email' />
      </FormGroup>
      <AuthError field='email' />
      <Btn size='large' ref={$nextBtn} onClick={slideRight}>Next</Btn>
      <Btn size='large' type='quarternary' animate='thump' onClick={startGhostLogin}>Demo</Btn>
    </>
  );
};

export const LoginStep2 = () => {
  const { $enterPassBtn, slideRight, slideLeft } = useContext(AuthFormContext);

  return (
    <>
      <Btn type='secondary' size='large'>Send me a magic link</Btn>
      <Btn size='large' ref={$enterPassBtn} onClick={slideRight}>Use password to log in</Btn>
      <ActionLink onClick={slideLeft}>back</ActionLink>
    </>
  );
};

export const LoginStep3 = () => {
  const { $loginBtn, handleSubmit } = useContext(AuthFormContext);

  return (
    <>
      <FormGroup>
        <AuthField field='email' />
        <AuthField field='password' type="password" />
      </FormGroup>
      <AuthError fields={['email', 'password']} />
      <Btn size='large' ref={$loginBtn} onClick={handleSubmit}>Login</Btn>
      <ActionLink to="/">Forgot password?</ActionLink>
    </>
  );
};

export default [LoginStep1, LoginStep2, LoginStep3];

