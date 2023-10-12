import {createListenerMiddleware} from '@reduxjs/toolkit';
import {getCurrentPositionUser, getDefaultPosition, getWatchPositionUser} from '../store/action';
import {fetchCities} from '../store/defaultCitySlice';
import {defaultMethod} from '../utils/getAPIUrl';

export const Geolocation = createListenerMiddleware();

Geolocation.startListening({
  actionCreator: getWatchPositionUser,
  effect: (action, listenerApi) => {
    // обрати внимание на эти функции, правильно ли я их реализовал
    async function getLocationUser() {
      const response = await fetch('https://geolocation-db.com/json/');
      const data = await response.json();
      listenerApi.dispatch(getCurrentPositionUser(data.city));
    }
    // эта переменная приходит из getAPIUrl
    function getDefaultLocationUser() {
      listenerApi.dispatch(getDefaultPosition(defaultMethod));
    }
    navigator.geolocation.getCurrentPosition(getLocationUser, getDefaultLocationUser);
  },
});

Geolocation.startListening({
  actionCreator: getCurrentPositionUser,
  effect: (action, listenerApi) => {
    const city = action.payload;
    listenerApi.dispatch(fetchCities(city));
  },
});

Geolocation.startListening({
  actionCreator: getDefaultPosition,
  effect: (action, listenerApi) => {
    // тут по сути все просто?
    listenerApi.dispatch(fetchCities(action.payload));
  },
});
