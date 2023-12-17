import {options} from '../types';

export function getConvertDate(valueDate: string): string {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(valueDate));
}
