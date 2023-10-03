import {combineReducers } from 'redux'
import citiesReducer from './defaultCitySlice'

const rootReducer = combineReducers({
    cities: citiesReducer,
})

export default rootReducer;