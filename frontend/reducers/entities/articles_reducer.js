import { RECEIVE_ALL_ARTICLES } from '../../actions/news_api_actions';

import { merge } from 'lodash';

const articlesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_ARTICLES:
      return action.articles;

    default:
      return state;
  };
};

export default articlesReducer;
