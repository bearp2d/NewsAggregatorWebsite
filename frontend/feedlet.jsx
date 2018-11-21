import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import * as NewsApiActions from './util/news_api_util';
import * as FeedApiUtil from './util/feed_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
      preloadedState = {
        entities: { user: window.currentUser},
        session: {id: window.currentUser.id}
      };
    }
  const store = configureStore(preloadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
