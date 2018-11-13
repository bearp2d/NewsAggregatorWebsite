import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing/landing_page';


const App = () => (
  <div>
    <h1>Testing</h1>
    // <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/welcome" component={LandingPage}/>
      // <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <ProtectedRoute path="/" component={MainPage}/>
    </Switch>
  </div>
)

export default App;
