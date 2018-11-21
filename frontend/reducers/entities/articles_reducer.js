import { RECEIVE_ALL_ARTICLES,
  UPDATE_ARTICLES } from '../../actions/news_api_actions';
import { REMOVE_FAVORITE_ARTICLE } from '../../actions/feed_actions';

import { merge } from 'lodash';

const articlesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = _.concat([], state);

  switch(action.type) {
    case RECEIVE_ALL_ARTICLES:
      return action.articles;

    case UPDATE_ARTICLES:
      return _.concat(newState, action.articles);

    case REMOVE_FAVORITE_ARTICLE:
      const filteredArticles = newState.filter(
        (article) => article.id !== action.id);
      return filteredArticles;
      
    default:
      return state;
  };
};

export default articlesReducer;
