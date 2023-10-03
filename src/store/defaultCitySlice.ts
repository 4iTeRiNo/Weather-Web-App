import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { City } from '../types'

const API_KEY = import.meta.env.VITE_WEATHER_KEY

type defaultCities = {
    list: City[],
    status: string,
    error: string | null,
}

const initialState: defaultCities = {
    list: [],
    status: 'idle',
    error: null,
}

export const fetchDefaultCities = createAsyncThunk<City[], undefined, { rejectValue: string }>(
    'cities/fetchCities',
    async function (_, { rejectWithValue }) {

        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Kaliningrad`)


        if (!response.ok) {
            return rejectWithValue('Server Error');
        }

        const data = await response.json()

        return data;

    })


const citiesSlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchDefaultCities.pending, (state,) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchDefaultCities.fulfilled, (state, action) => {
                state.list = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchDefaultCities.rejected, (state,) => {
                state.status = 'failed'
            })
    }
})

export default citiesSlice.reducer;
