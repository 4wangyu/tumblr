import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from 'util/routes';
import Background from './background/Background';
import Modal from './modals/ModalCore';
import Header from './header/Header';
import Footer from './footer/Footer';
import Auth from './auth/Auth';
import Dashboard from './post-feed/PostFeed';

const App = () => (
  <Background style={{ position: 'relative' }}>
    <Modal />
    <Header />
    <main>
      <Switch>
        <Redirect exact from='/' to='/dashboard' />
        <AuthRoute exact path={['/login', '/signup']} component={Auth} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </main>
    <AuthRoute exact path={['/login', '/signup']} component={Footer} />
  </Background>
);

export default App;


