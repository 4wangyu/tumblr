import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthForm, Logo, SubHeading } from './Auth.styled';
import AuthStepSlider from './AuthStepSlider';

const Auth = () => (
  <AuthForm>
    <Logo large>thumblr</Logo>
    <SubHeading>
      <span>Come for what you love.</span>
      <span>Stay for what you discover.</span>
    </SubHeading>
    <Switch>
      <Route path='/login' component={AuthStepSlider} />
      <Route path='/signup' component={AuthStepSlider} />
    </Switch>
  </AuthForm>
);

export default Auth;