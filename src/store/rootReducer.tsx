import {combineReducers} from 'redux';
import citiesReducer from './defaultCitySlice';

const rootReducer = combineReducers({
  defaultCities: citiesReducer,
});

export default rootReducer;
