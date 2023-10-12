import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { Geolocation } from "../middleware/listenerMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(Geolocation.middleware)
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
