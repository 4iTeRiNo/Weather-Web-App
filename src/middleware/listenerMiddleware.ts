import {getWatchPositionUser} from '../store/action';
import {fetchCity} from '../store/thunks';
import {createListenerMiddleware, addListener} from '@reduxjs/toolkit';

import type {TypedStartListening, TypedAddListener} from '@reduxjs/toolkit';
import type {RootState, AppDispatch} from '../store/index';

export const listenerMiddleware = createListenerMiddleware();
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const startAppListening = listenerMiddleware.startListening as AppStartListening;
export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

startAppListening({
  actionCreator: getWatchPositionUser,
  effect: (_, listenerApi) => {
    navigator.geolocation.getCurrentPosition(
      async () => {
        const response = await fetch('https://geolocation-db.com/json/');
        const data = await response.json();
        listenerApi.dispatch(fetchCity(data.city));
      },
      () => {
        listenerApi.dispatch(fetchCity('London'));
      },
    );
  },
});
