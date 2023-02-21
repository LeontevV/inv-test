import React from 'react';
import instance from '../api/axios';

type AuthFormProps = {
  email: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  confirmPassword?: string;
};

const requestAuth = async (navigateStatus: () => void, path: string, authForm: AuthFormProps) => {
  try {
    const response = await instance.post(path, authForm);
    const token = response?.data;
    const status = response.status;

    if (token) {
      localStorage.setItem('token', token);
    }
    if (status === 201) {
      navigateStatus();
    }

    return response;
  } catch (err) {
    alert(err);
  }
};

export default requestAuth;
