import * as actionTypes from '../actionTypes/province';


export function provinces(state = {}, action) {
  switch (action.type) {
    case actionTypes.GETALL_MUNICIPALITIES_REQUEST:
      return {
        loading: true
      };
    case actionTypes.GETALL_MUNICIPALITIES_SUCCESS:
      return {
        municipalities: action.municipalities
      };
    case actionTypes.GETALL_MUNICIPALITIES_FAILURE:
      return { 
        error: action.error
      };

    default:
      return state
  }
}