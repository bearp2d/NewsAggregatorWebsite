import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing/landing_page';
import MainPage from './main/main_page';
import SignupFormContainer from './landing/signup_form_container';
import LoginFormContainer from './landing/login_form_container';



const App = () => (
  <div>
    <h1>Testing</h1>
    <Switch>
      <AuthRoute exact path="/welcome" component={LandingPage}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <ProtectedRoute path="/" component={MainPage}/>
    </Switch>
  </div>
)

export default App;
