import { RECEIVE_ALL_ARTICLES,
  UPDATE_ARTICLES } from '../../actions/news_api_actions';

import { merge } from 'lodash';

const articlesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = _.concat([], state);

  switch(action.type) {
    case RECEIVE_ALL_ARTICLES:
      return action.articles;

    case UPDATE_ARTICLES:
    // this is the first place I'll look for problems with updating the
    // articles slice of state upon infinite scroll
      return _.concat(newState, action.articles)

    default:
      return state;
  };
};

export default articlesReducer;
