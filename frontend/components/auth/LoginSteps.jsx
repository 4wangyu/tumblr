import React, { useContext } from 'react';
import Btn from 'styled/base/Btn.styled';
import { FormGroup, ActionLink } from './Auth.styled';
import AuthField from './AuthField';
import { AuthFormContext } from './AuthStepSlider';

export const LoginStep1 = () => {
  const { $nextBtn, slideRight, startGhostLogin } = useContext(AuthFormContext);

  return (
    <>
      <FormGroup>
        <AuthField field='email' />
      </FormGroup>
      <Btn large ref={$nextBtn} onClick={slideRight}>Next</Btn>
      <Btn large quarternary animate onClick={startGhostLogin}>Demo</Btn>
    </>
  );
};

export const LoginStep2 = () => {
  const { $enterPassBtn, slideRight, slideLeft } = useContext(AuthFormContext);

  return (
    <>
      <Btn secondary large>Send me a magic link</Btn>
      <Btn large ref={$enterPassBtn} onClick={slideRight}>Use password to log in</Btn>
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
        <AuthField field='password' />
      </FormGroup>
      <Btn large ref={$loginBtn} onClick={handleSubmit}>Login</Btn>
      <ActionLink to="/">Forgot password?</ActionLink>
    </>
  );
};

export default [LoginStep1, LoginStep2, LoginStep3];

