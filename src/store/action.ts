import { createAction } from "@reduxjs/toolkit";

export const getWatchPositionUser = createAction('getWatchPositionUser');
export const getCurrentPositionUser = createAction<string>('getCurrentPositionUser')
export const getDefaultPosition = createAction<string>('getDefaultPositionUser')
