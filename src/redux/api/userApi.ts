import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser } from './types';

const baseUrl = import.meta.env.VITE_BASE_URL;
export const UserApi = createApi({
  reducerPath: 'UserApi',
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
    getUser: builder.mutation<IUser, unknown>({
      query: () => {
        return {
          url: baseUrl + '/user',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetUserMutation } = UserApi;
