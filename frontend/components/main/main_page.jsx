import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

import NavBar from './navbar';
import SideBar from './sidebar/sidebar_container';

import TodayContentContainer
  from './content/article_page_containers/today_content_container';
import FavoriteArticlesContainer
  from './content/article_page_containers/favorite_articles_container';
import AllArticlesContainer
  from './content/article_page_containers/all_articles_container';
import FeedArticlesContainer
  from './content/article_page_containers/feed_articles_container';
import SourceArticlesContainer
  from './content/article_page_containers/source_articles_container';
import SearchArticlesContainer
  from './content/article_page_containers/search_articles_container';
import SourcesPage from './sidebar/sources_page';
import TrollComponent from './content/troll_component';

const MainPage = () => (
  <>
    <SideBar />
    <div id="main">
      <NavBar />
      <div id="main-content">
        <Switch>
          <Redirect exact from="/" to="/my" />
          <ProtectedRoute exact path="/my" component={TodayContentContainer}/>
          <ProtectedRoute exact path="/saved" component={FavoriteArticlesContainer}/>
          <ProtectedRoute exact path="/latest" component={AllArticlesContainer}/>
          <ProtectedRoute exact path="/category/:feedName"
            component={FeedArticlesContainer}/>
          <ProtectedRoute exact path="/subscription/:sourceId"
            component={SourceArticlesContainer}/>
          <ProtectedRoute exact path="/search/:searchQuery"
            component={SearchArticlesContainer}/>
          <ProtectedRoute exact path="/discover" component={SourcesPage}/>
          <ProtectedRoute exact path="/trollolol" component={TrollComponent}/>
        </Switch>
      </div>
    </div>
  </>
);

export default MainPage;
