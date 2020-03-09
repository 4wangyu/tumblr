import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from 'util/routes';
import Background from './background/Background';
import Modal from './modals/ModalCore';
import Header from './header/Header';
// import Footer from './footer/Footer';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Dashboard from './post-feed/PostFeed';

const App = () => (
  <Background>
    <Modal />
    <Header />
    <main>
      <Switch>
        <Redirect exact from='/' to='/dashboard' />
        <AuthRoute exact path='/signup' component={Signup} />
        <AuthRoute path='/login' component={Login} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </main>
  </Background>
);

export default App;


