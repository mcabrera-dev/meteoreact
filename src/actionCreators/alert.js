import * as actionTypes from '../actionTypes/alert';


export function success(message) {
    return { type: actionTypes.SUCCESS, message };
}

export function error(message) {
    return { type: actionTypes.ERROR, message };
}

export function clear() {
    return { type: actionTypes.CLEAR };
}