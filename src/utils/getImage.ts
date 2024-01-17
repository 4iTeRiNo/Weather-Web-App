import {TCodeBackground} from '../types/codeIcon';

export const getImage = (value: number, object: TCodeBackground): string => {
  return object[value];
};
