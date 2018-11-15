import { merge } from 'lodash';

const sourcesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {

    default:
      return state;
  };
};

export default sourcesReducer;
