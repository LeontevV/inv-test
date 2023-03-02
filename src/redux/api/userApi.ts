import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser } from './types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);

        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    user: builder.query<IUser, void>({
      query: () => {
        return {
          url: '/user',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useUserQuery } = userApi;
