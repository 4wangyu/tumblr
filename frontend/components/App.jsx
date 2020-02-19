import React from 'react';
import { AuthRoute, ProtectedRoute } from 'util/routes';
import Background from './background/Background';
import Modal from './modals/ModalCore';
import Nav from './nav/Nav';
// import Footer from './footer/Footer';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Dashboard from './post_indexes/PostIndex';

const App = () => (
  <Background>
    <Modal />
    <header><Nav /></header>
    <main>
      <AuthRoute exact path='/' component={Signup} />
      <AuthRoute path='/login' component={Login} />
      <ProtectedRoute exact path='/dashboard' component={Dashboard} />
    </main>
  </Background>
);

export default App;


