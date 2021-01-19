import * as actionTypes from '../actionTypes/weatherCondition';
import { weatherService } from '../services';
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* getMunicipalityWeatherCondition(action) {
    try {
        const weatherCondition = yield call(() => weatherService.getMunicipalityWeatherCondition(action.municipality));
        //console.log('LLEGASAGA',weatherCondition)

        yield put({
            type: actionTypes.GET_WEATHER_CONDITON_SUCCESS,
            weatherCondition: weatherCondition
        })
    } catch (error) {
        yield all(
            [
                put({
                    type: actionTypes.GET_WEATHER_CONDITON_FAILURE,
                    error
                }),
                put({
                    type: 'ALERT_ERROR',
                    alert: { title: 'Error de consulta', message: "No se ha podido recuperar los datos meteorológicos" },
                })

            ]
        )
    }
}


export function* forkWeatherMain() {
    yield all([
        takeEvery('GET_WEATHER_CONDITON_REQUEST', getMunicipalityWeatherCondition),

    ])
}


