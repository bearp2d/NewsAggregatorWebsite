import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import * as Actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
      preloadedState = {
        entities: { users: {[window.currentUser.id]: window.currentUser}},
        session: {id: window.currentUser.id}
      };
    }
  const store = configureStore(preloadedState);

  // testing purposes
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.Actions = Actions;
  // testing purposes

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
