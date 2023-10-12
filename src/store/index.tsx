import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { result } from "../middleware/listenerMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(result.middleware)
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
