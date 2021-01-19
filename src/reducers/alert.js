import * as actionTypes from '../actionTypes/alert';

export function alert(state = {}, action) {
  switch (action.type) {
    case actionTypes.SUCCESS:
      return {
        type: 'success',
        message: action.alert.message,
        title: action.alert.title
      };
    case actionTypes.ERROR:
      return {
        type: 'danger',
        message: action.alert.message,
        title: action.alert.title
      };
    case actionTypes.CLEAR:
      return {};
    default:
      return state
  }
}