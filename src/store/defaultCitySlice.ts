import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {City} from '../types';
import {getAPIUrl} from '../utils/getAPIUrl';

type defaultCities = {
  list: City[];
  status: string;
  error: string | null;
};

const initialState: defaultCities = {
  list: [],
  status: 'idle',
  error: null,
};

export const fetchCities = createAsyncThunk<City[], string, {rejectValue: string}>(
  'cities/fetchCities',
  async function (params, {rejectWithValue}) {
    const response = await fetch(getAPIUrl('forecast', params));

    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    const data = await response.json();
    // console.log(data.forecast);

    return data.forecast;
  },
);

const citiesSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchCities.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default citiesSlice.reducer;
