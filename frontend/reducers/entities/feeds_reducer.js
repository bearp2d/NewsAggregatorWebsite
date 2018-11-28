import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_NEW_FEED,
  RECEIVE_ALL_FEEDS,
  REMOVE_FEED } from '../../actions/feed_actions';
import { merge } from 'lodash';

const feedsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_NEW_FEED:
      return merge(newState, {[action.feed.id]: action.feed});

    case REMOVE_FEED:
      delete newState[action.feedId];
      return newState;

    case RECEIVE_ALL_FEEDS:
      return action.feeds;

    default:
      return state;
  };
};

export default feedsReducer;
