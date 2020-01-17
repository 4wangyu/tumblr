import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { selectCurrentUser } from '../reducers/selectors'

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact}
    render={props =>
      (loggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />)
    }
  />
)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact}
    render={props =>
      (loggedIn ? <Component {...props} /> : <Redirect to="/login" />)
    }
  />
)

const mapStateToProps = state => ({
  loggedIn: Boolean(selectCurrentUser(state))
});

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth)
)

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
)