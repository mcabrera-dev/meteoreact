import * as actionTypes from '../actionTypes/province'

export function getMunicipalities(provinceId) {
  return { type: actionTypes.GETALL_MUNICIPALITIES_REQUEST, provinceId }
}

