import React from 'react';
import { Navigate } from 'react-router-dom';
import instance from '../api/axios';

type AuthFormProps = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const requestAuth = async (path: string, authForm: AuthFormProps) => {
  try {
    const response = await instance.post(path, authForm);
    const accessToken = response?.data;
    console.log('response.status', response.status);

    if (response.status === 201) {
      return <Navigate to={'/login'} />;
    }
    console.log('response', response);
  } catch (err) {
    alert(err);
  }
};

export default requestAuth;
