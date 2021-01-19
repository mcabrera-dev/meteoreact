import * as actionTypes from '../actionTypes/weatherCondition'

export function getMunicipalityWheatherCondition(municipality) {
  return { type: actionTypes.GET_WEATHER_CONDITON_REQUEST, municipality }
}

