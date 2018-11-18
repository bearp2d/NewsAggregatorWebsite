import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

import NavBar from './navbar';
import SideBar from './sidebar/sidebar_container';

import TodayContentContainer from './content/today_content_container';
import SavedArticlesContainer from './content/saved_articles_container';
import AllArticlesContainer from './content/all_articles_container';

const MainPage = () => (
  <>
    <SideBar />
    <div id="main">
      <NavBar />
      <div id="main-content">
        <Switch>
          <Redirect exact from="/" to="/my" />
          <ProtectedRoute exact path="/my" component={TodayContentContainer}/>
          <ProtectedRoute exact path="/saved" component={SavedArticlesContainer}/>
          <ProtectedRoute exact path="/latest" component={AllArticlesContainer}/>
        </Switch>
      </div>
    </div>
  </>
);

export default MainPage;
