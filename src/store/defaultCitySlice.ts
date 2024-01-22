import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TCity} from '../types';
import {fetchCity} from './thunks';
import {isError} from '../utils/isError';

export type cityState = {
  list: TCity[];
  status: string;
  error: string | null;
};

const initialState: cityState = {
  list: [],
  status: 'idle',
  error: null,
};

const defaultCitiesSlice = createSlice({
  name: 'citiesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.list = [action.payload];
        state.status = 'succeeded';
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export default defaultCitiesSlice.reducer;
