import '../../favicon.ico';
import './App.scss';

import React, { Component } from 'react';
import ProtectedRoute from './ProtectedRoute';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';

import fakeAuth from 'Utils/auth';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage';
import ProfilePage from './ProfilePage';
import LandingPage from './LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="nrx-app">
          <header className="nrx-header nrx-container">
            <div className="nrx-header-logo">
              <NavLink exact to="/">
                Logo
              </NavLink>
            </div>
            <ul>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
            <AuthStatus />
          </header>
          <div className="nrx-main">
            <Switch>
              <Route path="/login" component={LoginPage} />
              <ProtectedRoute path="/profile" component={ProfilePage} />
              <Route exact={true} path="/" component={LandingPage} />
              <Route path="/about" component={AboutPage} />
            </Switch>
          </div>
          <footer className="nrx-footer nrx-container">
            An uninvasive footer.
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

const AuthStatus = withRouter(({ history }) => (
  <div className="nrx-auth-control">
    {fakeAuth.isAuthenticated ? (
      <p>
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>Not logged in.</p>
    )}
  </div>
));
