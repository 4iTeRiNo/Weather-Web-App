import { createSlice } from '@reduxjs/toolkit'
import { City } from '../types'

type cityState = {
    list: City[]
}

const initialState: cityState = {
    list: []
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {}
})

export const { } = citySlice.actions

export default citySlice.reducer;