import {AnyAction} from '@reduxjs/toolkit';

export function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
