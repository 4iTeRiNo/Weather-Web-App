
import {createListenerMiddleware, addListener} from '@reduxjs/toolkit';
import type {TypedStartListening, TypedAddListener} from '@reduxjs/toolkit';

import type {RootState, AppDispatch} from './index';

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

// это по какой то причинине не работало в моей middleware 
// когда создавал прослушиватель через эту переменную
export const startAppListening = listenerMiddleware.startListening as AppStartListening;

// тут идет привязка к моему стору т.е его редусерам ?
export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;
