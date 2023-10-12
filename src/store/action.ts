import { createAction } from "@reduxjs/toolkit";

export const getWatchPositionUser = createAction('getWatchPositionUser');
// решил что типы будут строки, так как все методы на выходи преобразуются в строку
export const getCurrentPositionUser = createAction<string>('getCurrentPositionUser')
export const getDefaultPosition = createAction<string>('getDefaultPositionUser')
