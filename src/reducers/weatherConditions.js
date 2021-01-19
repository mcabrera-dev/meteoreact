import * as actionTypes from '../actionTypes/weatherCondition';

const initialState = {
  loading: false,
  weatherConditionList:[]
}

export function weatherConditions(state = initialState, action) {
  console.log('reducer',action)
  switch (action.type) {
    case actionTypes.GET_WEATHER_CONDITON_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_WEATHER_CONDITON_SUCCESS:

   /*  const weatherConditionsCopy = [...state.weatherConditionList].filter((wc) => wc.municipio.CODIGOINE === action.weatherCondition.CODIGOINE)
    weatherConditionsCopy.push(action.weatherCondition) */
      return {
        ...state,
        loading: false,
        weatherConditionList: action.weatherConditions
      };
    case actionTypes.GET_WEATHER_CONDITON_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state
  }
}