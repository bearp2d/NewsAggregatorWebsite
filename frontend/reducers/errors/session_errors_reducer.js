import { RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { CLOSE_MODAL} from '../../actions/modal_actions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;

    case RECEIVE_CURRENT_USER:
      return [];

    case CLOSE_MODAL:
      return [];

    default:
      return state;
  };
};

export default sessionErrorsReducer;
