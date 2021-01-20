import * as actionTypes from '../actionTypes/user';
import { userService } from '../services';
import { all, call, put, takeLatest } from "redux-saga/effects";

function* login(action) {
    try {
        const user = yield call(() => userService.login(action.userLogin));
        yield put({
            type: actionTypes.USERS_LOGIN_SUCCESS,
            user: user
        })
    } catch (error) {
        yield all(
            [
                put({
                    type: actionTypes.USERS_LOGIN_FAILURE,
                    error
                }),
                put({
                    type: 'ALERT_ERROR',
                    alert: { title: 'Error de autenticación', message: "Usuario o contraseña incorrecto" },
                })

            ]
        )
    }
}

function* logout() {
    yield call(() => userService.logout());
    return { type: actionTypes.USERS_LOGOUT };
}

function* register(action) {
    try {
        const user = yield call(() => userService.register(action.userRegister));
        yield put({
            type: actionTypes.USERS_REGISTER_SUCCESS,
            user: user
        })
        yield put({
            type: 'ALERT_SUCCESS',
            alert: { title: 'Usuario registrado', message: "Usuario registrado correctamente" },
        })
    } catch (error) {
        yield put({
            type: actionTypes.USERS_REGISTER_FAILURE,
            error
        })
        yield put({
            type: 'ALERT_ERROR',
            alert: { title: 'Error en el registro', message: "Nombre de usuario ya registrado" },
        })
    }
}

function* saveSearch(action) {
    try {
        const user = yield call(() => userService.saveSearch(action.search));
        yield put({
            type: actionTypes.USERS_SAVE_SEARCH_SUCCESS,
            user: user
        })
        yield put({
            type: 'ALERT_SUCCESS',
            alert: { title: 'Búsqueda guardada', message: "Búsqueda guardada correctamente" },
        })
    } catch (error) {
        yield put({
            type: actionTypes.USERS_SAVE_SEARCH_FAILURE,
            error
        })
        yield put({
            type: 'ALERT_ERROR',
            alert: { title: 'Error en el registro', message: "Nombre de búsqueda ya registrada" },
        })
    }
}

function* removeSearch(action) {
    try {
        const user = yield call(() => userService.removeSearch(action.search));
        yield put({
            type: actionTypes.USERS_REMOVE_SEARCH_SUCCESS,
            user: user
        })
        yield put({
            type: 'ALERT_SUCCESS',
            alert: { title: 'Búsqueda eliminada', message: "Búsqueda eliminada correctamente" },
        })
    } catch (error) {
        yield put({
            type: actionTypes.USERS_SAVE_SEARCH_FAILURE,
            error
        })
        yield put({
            type: 'ALERT_ERROR',
            alert: { title: 'Error en el registro', message: "Fallo al borrar la búsqueda" },
        })
    }
}


export function* forkUserMain() {
    yield all([
        takeLatest('USERS_LOGIN_REQUEST', login),
        takeLatest('USERS_REGISTER_REQUEST', register),
        takeLatest('USERS_LOGOUT', logout),
        takeLatest('USERS_SAVE_SEARCH_REQUEST',saveSearch),
        takeLatest('USERS_REMOVE_SEARCH_REQUEST',removeSearch)
    ])
}


