import {getCurrentPositionUser, getDefaultPosition, getWatchPositionUser} from '../store/action';
// import {getAPIUrl} from '../utils/getAPIDefaultUrl';
import {fetchCities} from '../store/defaultCitySlice';
// import {startAppListening} from '../store/listenerMiddleware';
import {createListenerMiddleware} from '@reduxjs/toolkit';
import {APIMethods} from '../utils/getAPIUrl';

export const result = createListenerMiddleware();

result.startListening({
  actionCreator: getWatchPositionUser,
  effect: (action, listenerApi) => {
    async function geo_success() {
      const response = await fetch('https://geolocation-db.com/json/');
      const data = await response.json();
      listenerApi.dispatch(getCurrentPositionUser(data.city));
    }
    function error() {
      listenerApi.dispatch(getDefaultPosition());
    }
    navigator.geolocation.getCurrentPosition(geo_success, error);
  },
});

result.startListening({
  actionCreator: getCurrentPositionUser,
  effect: (action, listenerApi) => {
    console.log(action);

    const city = action.payload;

    listenerApi.dispatch(fetchCities(city));
  },
});

result.startListening({
  actionCreator: getDefaultPosition,
  effect: (action, listenerApi) => {
    listenerApi.dispatch(fetchCities(action.payload));
  },
});
