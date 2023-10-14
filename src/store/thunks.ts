import {createAsyncThunk} from '@reduxjs/toolkit';
import {TCity} from '../types';
import {getAPIUrl} from '../utils/getAPIUrl';

export const fetchCity = createAsyncThunk<TCity, string, {rejectValue: string}>(
  'fetchCity',
  async function (city, {rejectWithValue}) {
    const response = await fetch(getAPIUrl('forecast', {q: city}));

    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    const data = await response.json();
    return data;
  },
);
