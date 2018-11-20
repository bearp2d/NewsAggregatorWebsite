import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_NEW_FEED, UPDATE_SOURCE_LIST } from '../../actions/feed_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;

    case RECEIVE_NEW_FEED:
      newState.feed_ids.push(action.feed.id);
      return newState;

    case UPDATE_SOURCE_LIST:
      newState.source_list = action.source_list;
      return newState;

    default:
      return state;
  };
};

export default userReducer;
