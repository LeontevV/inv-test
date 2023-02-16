import React from 'react';
import axios from '../api/axios';

export type RequestProps = {
  way: string;
  authForm: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  };
};

const requetsAuth = async ({ way, authForm }: RequestProps) => {
  try {
    const response = await axios.post(way, JSON.stringify(authForm), {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
    const accessToken = response?.data;
  } catch (err) {
    console.warn(err);
  }
};
export default requetsAuth;
