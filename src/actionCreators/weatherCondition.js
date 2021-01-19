import * as actionTypes from '../actionTypes/weatherCondition'

export function getMunicipalityWheatherCondition(municipalities) {
  return { type: actionTypes.GET_WEATHER_CONDITON_REQUEST, municipalities }
}

