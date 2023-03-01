import { SerializedError } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { AuthFormProps } from '../../global/type';

export type BaseResponse<Data = unknown> = {
  data: Data;
  info: string;
  status: number;
};

export type BaseErrorResponse = FetchBaseQueryError | SerializedError | any;

export type BaseCommonResponse<Data = unknown> = {
  data?: Data;
  error?: BaseErrorResponse;
};

export const AuthApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<string, AuthFormProps>({
      query: (code) => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: code,
          responseHandler: (response) => response.text(),
        };
      },
    }),
    registerUser: builder.mutation<BaseCommonResponse, AuthFormProps>({
      query: (code) => {
        return {
          url: '/auth/registration/user',
          method: 'POST',
          body: code,
        };
      },
    }),
    logoutUser: builder.mutation<number, number>({
      query: () => {
        return {
          url: '/auth/registration/user',
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation, useRegisterUserMutation } = AuthApi;
