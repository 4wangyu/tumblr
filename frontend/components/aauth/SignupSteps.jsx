import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Btn from 'styled/base/Btn.styled';
import {
  FormGroup, InputField,
} from './Auth.styled';


export const SignupStep1 = memo(({
  toggleNext,
  Link
}) => (
    <>
      <Btn large onClick={toggleNext}>Get Started</Btn>
      <Btn large tertiary as={Link} to='/login'>Log In</Btn>
    </>
  ));

export const SignupStep2 = memo(({
  handleInput, handleSubmit,
  email, password, username
}) => (
    <>
      <FormGroup>
        <InputField
          key={'step2-email'}
          onChange={handleInput}
          name="email"
          value={email}
        />
        <InputField
          key={'step2-password'}
          onChange={handleInput}
          name="password"
          value={password}
        />
        <InputField
          key={'step2-username'}
          onChange={handleInput}
          name="username"
          value={username}
        />
      </FormGroup>
      <Btn large onClick={handleSubmit}>Sign up</Btn>
    </>
  ));