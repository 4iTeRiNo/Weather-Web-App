import { createSlice } from '@reduxjs/toolkit'

export interface City {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

const initialState: City = {
    "name": "Kaliningrad",
    "region": "Kaliningrad",
    "country": "Russia",
    "lat": 54.71,
    "lon": 20.5,
    "tz_id": "Europe/Kaliningrad",
    "localtime_epoch": 1695890176,
    "localtime": "2023-09-28 10:36"
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers:{}
})

export const {} = citySlice.actions

export default citySlice.reducer;