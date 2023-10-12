import {createSlice, createAsyncThunk, AnyAction, PayloadAction} from '@reduxjs/toolkit';
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
    // фунция принимает два параметра, но один из них не понимаю как бросить опционально а не в лоб
    const response = await fetch(getAPIUrl('forecast', params));

    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    const data = await response.json();
    return data;
  },
);

//Доббавил функцию обработки входящих ошибок
function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

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

      //тут решил сделать через этоту фунцию, возможно не лучшая практика, пока не понимаю полной картины

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export default citiesSlice.reducer;
