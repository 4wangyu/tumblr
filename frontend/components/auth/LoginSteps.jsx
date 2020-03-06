import React, { memo } from 'react';
import Btn from 'styled/base/Btn.styled';
import {
  FormGroup, InputField,
  ActionLink
} from './Auth.styled';


export const LoginStep1 = memo(({
  handleInput,
  email,
  $nextBtn,
  toggleNext,
  startDemoBot
}) => (
    <>
      <FormGroup>
        <InputField
          onChange={handleInput}
          name="email"
          key={'step1-email'}
          value={email}
          type='email'
        />
      </FormGroup>
      <Btn large ref={$nextBtn} onClick={toggleNext}>Next</Btn>
      <Btn large quarternary animate onClick={startDemoBot}>Demo</Btn>
    </>
  ));

export const LoginStep2 = memo(({
  $enterPassBtn,
  toggleNext, toggleBack
}) => (
    <>
      <Btn secondary large>Send me a magic link</Btn>
      <Btn large ref={$enterPassBtn} onClick={toggleNext}>Use password to log in</Btn>
      <ActionLink onClick={toggleBack}>back</ActionLink>
    </>
  ));

export const LoginStep3 = memo(({
  handleInput, handleSubmit,
  email, password,
  $loginBtn,
}) => (
    <>
      <FormGroup>
        <InputField
          key={'step3-email'}
          onChange={handleInput}
          name="email"
          value={email}
        />
        <InputField
          key={'step3-password'}
          onChange={handleInput}
          type="password"
          name="password"
          value={password}
        />
      </FormGroup>
      <Btn large ref={$loginBtn} onClick={handleSubmit}>Login</Btn>
      <ActionLink>Forgot password?</ActionLink>
    </>
  ));
