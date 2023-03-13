import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const LS_FAV_KEY = 'rfk';

interface DummyjsonState {
  favourites: number[]
}

const initialState: DummyjsonState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const dummyjsonSlice = createSlice({
  name: 'dummyjson',
  initialState,
  reducers: {
    toggleFavourite(state, action: PayloadAction<number>) {
      if (!state.favourites.includes(action.payload)) {
        state.favourites.push(action.payload);
        localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
      } else {
        state.favourites = state.favourites.filter(f => f !== action.payload);
        localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
      }
    }
  }
})

export const dummyjsonActions = dummyjsonSlice.actions
export const dummyjsonReducer = dummyjsonSlice.reducer