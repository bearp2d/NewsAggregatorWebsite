import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal';
import NavBar from './main/navbar';
import LandingPageContainer from './landing/landing_page_container';
import MainPage from './main/main_page';


const App = () => (
  <div>
    <Modal />
    <h1>Testing</h1>
    <NavBar />
    <Switch>
      <AuthRoute exact path="/welcome" component={LandingPageContainer}/>
      <ProtectedRoute path="/" component={MainPage}/>
    </Switch>
  </div>
)

export default App;
