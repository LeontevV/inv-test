import React from 'react';
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
  } catch (err) {
    alert(err);
  }
};

export default requestAuth;
