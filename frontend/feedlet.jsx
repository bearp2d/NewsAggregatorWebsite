import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import * as Actions from './actions/session_actions';
import * as FeedActions from './actions/feed_actions';

import * as NewsApiUtil from './util/news_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
      preloadedState = {
        entities: { user: window.currentUser},
        session: {id: window.currentUser.id}
      };
    }
  const store = configureStore(preloadedState);

  // testing purposes
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.Actions = Actions;
  window.FeedActions = FeedActions;
  window.NewsApiUtil = NewsApiUtil;
  // testing purposes

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
