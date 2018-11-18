import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal';
import LandingPageContainer from './landing/landing_page_container';
import MainPage from './main/main_page';


const App = () => (
  <>
    <Modal />
    <Switch>
      <AuthRoute exact path="/welcome" component={LandingPageContainer}/>
      <ProtectedRoute path="/" component={MainPage}/>
    </Switch>
  </>
)

export default App;
