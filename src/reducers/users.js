import * as actionTypes from '../actionTypes/user';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function users(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERS_LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case actionTypes.USERS_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case actionTypes.USERS_LOGIN_FAILURE:
      return {};
    case actionTypes.USERS_LOGOUT:
      return {};

    case actionTypes.USERS_REGISTER_REQUEST:
      return { registering: true };
    case actionTypes.USERS_REGISTER_SUCCESS:
      return { registered: true };
    case actionTypes.USERS_REGISTER_FAILURE:
      return {};

    case actionTypes.USERS_REMOVE_SEARCH_SUCCESS:
    case actionTypes.USERS_SAVE_SEARCH_SUCCESS:
      return { loggedIn: true,
        user: JSON.parse(localStorage.getItem('user')) };
    default:
      return state
  }
}