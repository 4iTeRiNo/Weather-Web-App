import {combineReducers } from 'redux'
import citysReducer from './defaultCitySlice'

const rootReducer = combineReducers({
    citys: citysReducer,
})

export default rootReducer;