import { combineReducers } from 'redux';
import { users } from './users';
import { alert } from './alert';
import { provinces } from './provinces';
import { weatherConditions } from './weatherConditions' 

const rootReducer = combineReducers({
  users,
  alert,
  provinces,
  weatherConditions,
});

export default rootReducer;