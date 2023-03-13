import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query'
import { dummyjsonApi } from "./dummyjson/dummyjson.api";
import { dummyjsonReducer } from "./dummyjson/dummyjson.slice";
import 'react-toastify/dist/ReactToastify.css';

export const store = configureStore({
  reducer: {
    [dummyjsonApi.reducerPath]: dummyjsonApi.reducer,
    dummyjson: dummyjsonReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dummyjsonApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>