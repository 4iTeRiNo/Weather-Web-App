import { createSlice } from '@reduxjs/toolkit'
import { City } from '../types'

type defaultCities = {
    list: City[]
}

const initialState: defaultCities = {
    list: []
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {}
})

export const { } = citySlice.actions

export default citySlice.reducer;