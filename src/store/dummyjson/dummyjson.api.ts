import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProduct, ServerResponse } from '../../models/models'

export const dummyjsonApi = createApi({
  reducerPath: 'dummyjson/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: build => ({
    getProducts: build.query<IProduct[], void>({
      query: () => ({
        url: 'products',
        params: {
          limit: 12
        }
      }),
      transformResponse: (response: ServerResponse<IProduct>) => response.products
    })
  })
})

export const {useGetProductsQuery} = dummyjsonApi