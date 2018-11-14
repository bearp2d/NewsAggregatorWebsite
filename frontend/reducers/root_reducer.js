import { combineReducers } from 'redux';

import entitiesReducer from './entities/entities_reducer';
import sessionReducer from './session/session_reducer';
import errorsReducer from './errors/errors_reducer';
import uiReducer from './ui/ui_reducer';

const RootReducer =  combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  ui: uiReducer
});

export default RootReducer;
