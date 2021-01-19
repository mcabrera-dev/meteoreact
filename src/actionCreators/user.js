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