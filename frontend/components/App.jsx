import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route';
import BackgroundContainer from './Background/BackgroundContainer';
import Splash from './Auth/Splash';
import NavContainer from './Nav/NavContainer';
import DashboardContainer from './Posts/PostIndex/DashboardContainer';
import LoginContainer from './Auth/LoginContainer';
import SignupContainer from './Auth/SignupContainer';
import ModalContainer from './Modal/ModalContainer';


const App = () => (
  <BackgroundContainer>
    <ModalContainer />
    <header>
      <NavContainer />
    </header>
    <div className="content">
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute path='/login' component={LoginContainer} />
      <AuthRoute path='/signup' component={SignupContainer} />
      <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
    </div>
  </BackgroundContainer>
);

export default App;


