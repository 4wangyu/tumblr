import React from 'react';
import { AuthPageContainer, Logo, SubHeading } from './AuthPage.styled';
import AuthStepSlider from './AuthStepSlider';

const AuthPage = () => (
  <AuthPageContainer>
    <Logo large>thumblr</Logo>
    <SubHeading>
      <span>Come for what you love.</span>
      <span>Stay for what you discover.</span>
    </SubHeading>
    <AuthStepSlider />
  </AuthPageContainer>
);

export default AuthPage;