import * as actionTypes from '../actionTypes/user'

export function login(userLogin) {
  return { type: actionTypes.USERS_LOGIN_REQUEST, userLogin }
}

export function logout() {
  return { type: actionTypes.USERS_LOGOUT }
}

export function register(userRegister) {
  return { type: actionTypes.USERS_REGISTER_REQUEST, userRegister }
}

export function saveSearch(search) {
  return { type: actionTypes.USERS_SAVE_SEARCH_REQUEST, search }
}

export function removeSearch(search) {
  return { type: actionTypes.USERS_REMOVE_SEARCH_REQUEST, search }
}