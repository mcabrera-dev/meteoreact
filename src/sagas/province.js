import * as actionTypes from '../actionTypes/province';
import { weatherService } from '../services';
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* getMunicipalities(action) {
    try {
        const municipalitiesQuery = yield call(() => weatherService.getMunicipalities(action.provinceId));
        const municipalities = municipalitiesQuery.municipios.map((m) => {
            m.label = m.NOMBRE;
            return m;
        })

        yield put({
            type: actionTypes.GETALL_MUNICIPALITIES_SUCCESS,
            municipalities: municipalities
        })
    } catch (error) {
        yield all(
            [
                put({
                    type: actionTypes.GETALL_MUNICIPALITIES_FAILURE,
                    error
                }),
                put({
                    type: 'ALERT_ERROR',
                    alert: { title: 'Error de consulta', message: "No se ha podido recuperar los datos de la provincia" },
                })

            ]
        )
    }
}


export function* forkProvincesMain() {
    yield all([
        takeLatest('GETALL_MUNICIPALITIES_REQUEST', getMunicipalities),

    ])
}


