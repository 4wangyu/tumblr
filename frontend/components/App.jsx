import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from 'util/routes';
import { AppContainer, Main } from './App.styled';
import Background from './Background';
import Modal from './modals/ModalCore';
import Header from './Header';
import Footer from './Footer';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ExplorePage, { ExploreNav } from './pages/ExplorePage';
import SearchPage from './pages/SearchPage';
const App = () => (
  <Background>
    <Modal />
    <Header />
    <ProtectedRoute path='/explore' component={ExploreNav} />
    <Main>
      <Switch>
        <AuthRoute exact path='/login' key='login' component={AuthPage} />
        <AuthRoute exact path='/signup' key='signup' component={AuthPage} />
        <Redirect exact from='/' to='/dashboard' />
        <ProtectedRoute exact path='/dashboard' component={DashboardPage} />
        <Redirect exact from='explore' to='/explore/trending' />
        <Redirect exact from='search' to='/explore/trending' />
        <ProtectedRoute path='/explore/:filter' component={ExplorePage} />
        <ProtectedRoute path={['/search/:query/:filter', '/search/:query']} component={SearchPage} />
      </Switch>
    </Main>
    <AuthRoute exact path={['/login', '/signup']} component={Footer} />
  </Background>
);

export default App;


