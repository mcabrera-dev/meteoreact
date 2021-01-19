import { all } from 'redux-saga/effects'
import { forkUserMain } from './user'
import { forkProvincesMain } from './province'
import { forkWeatherMain } from './weatherCondition'


export default function* rootSaga() {
  yield all([
    forkUserMain(),
    forkProvincesMain(),
    forkWeatherMain(),
  ])
}