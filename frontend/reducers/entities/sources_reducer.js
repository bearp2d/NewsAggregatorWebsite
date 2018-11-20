import { RECEIVE_ALL_SOURCES } from '../../actions/feed_actions';
import { merge } from 'lodash';

const sourcesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_SOURCES:
      return action.sources;

    default:
      return state;
  };
};

export default sourcesReducer;
