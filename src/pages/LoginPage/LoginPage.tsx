import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../api/axios';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
import LinkBlock from '../../components/LinkButton';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';
import { AuthApi } from '../../global/type';

import style from './LoginPage.module.scss';
import requetsAuth from '../../utils/requestAuth';

const QUESTION = "Don't have an account?";
const INITIAL_STATE = {
  email: '',
  password: '',
};

function Login() {
  const [authForm, setAuthForm] = useState(INITIAL_STATE);

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...authForm,
      [name]: value,
    };
    setAuthForm(updatedForm);
  };
  const way = AuthApi.LOGIN;

  const handleSubmit = () => {
    requetsAuth({ way, authForm });
  };

  return (
    <AuthPageWrapper title='Login'>
      <form onChange={handleChange}>
        <Input type='email' title='Email' name='email' value={authForm.email} />
        <Input type='password' title='Password' name='password' value={authForm.password} />
      </form>
      <Link className={style.link} to='/'>
        Forgot password
      </Link>
      <Button onClick={handleSubmit}>Login</Button>
      <LinkBlock title='Sign up' question={QUESTION} href='/' />
    </AuthPageWrapper>
  );
}

export default memo(Login);
