import {TCodeBackground} from '../types/codeIcon';

export const getImage = (value: number, object: TCodeBackground): string | undefined => {
  return object[value];
};
