import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './Auth/Splash';
import NavContainer from './Nav/NavContainer';
import DashboardContainer from './Posts/DashboardContainer';
import LoginContainer from './Auth/LoginContainer';
import SignupContainer from './Auth/SignupContainer';

const App = () => (
  <div>
    <NavContainer />
    <div className="content">
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute path='/login' component={LoginContainer} />
      <AuthRoute path='/signup' component={SignupContainer} />
      <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
    </div>
  </div>
);

export default App;

