import * as actionTypes from '../actionTypes/weatherCondition'

export function getMunicipalityWheatherCondition(municipalities) {
  return { type: actionTypes.GET_WEATHER_CONDITON_REQUEST, municipalities }
}

export function removeWeatherCondition(weatherCondition) {
  return { type: actionTypes.REMOVE_WEATHER_CONDITON_STATE, weatherCondition }
}

