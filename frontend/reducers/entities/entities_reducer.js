import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import feedsReducer from './feeds_reducer';
import sourcesReducer from './sources_reducer';
import articlesReducer from './articles_reducer';

const entitiesReducer = combineReducers({
  user: userReducer,
  feeds: feedsReducer,
  sources: sourcesReducer,
  articles: articlesReducer
});

export default entitiesReducer;
