import { RECEIVE_FORM_ERRORS } from '../../actions/feed_actions';
import { CLOSE_MODAL } from '../../actions/modal_actions';
import { merge } from 'lodash';

const formErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_FORM_ERRORS:
      return action.errors.responseJSON;

    case CLOSE_MODAL:
      return [];

    default:
      return state;
  };
};

export default formErrorsReducer;
