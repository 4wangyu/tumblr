import React from 'react';
import { AuthForm, Logo, SubHeading } from './Auth.styled';
import AuthStepSlider from './AuthStepSlider';

const Auth = () => (
  <AuthForm>
    <Logo large>thumblr</Logo>
    <SubHeading>
      <span>Come for what you love.</span>
      <span>Stay for what you discover.</span>
    </SubHeading>
    <AuthStepSlider />
  </AuthForm>
);

export default Auth;