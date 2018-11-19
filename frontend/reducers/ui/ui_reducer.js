import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';

import optPropsReducer from './opt_props_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  optional_props: optPropsReducer
});

export default uiReducer;
