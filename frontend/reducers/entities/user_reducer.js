import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_NEW_FEED } from '../../actions/feed_actions';
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
    default:
      return state;
  };
};

export default userReducer;
