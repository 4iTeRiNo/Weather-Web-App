import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {listenerMiddleware} from '../middleware/listenerMiddleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
