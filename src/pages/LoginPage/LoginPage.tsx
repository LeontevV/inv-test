import React, { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
import LinkBlock from '../../components/LinkButton';
import { AuthFormProps } from '../../global/type';
import { useLoginUserMutation } from '../../redux/api/authApi';

import style from './LoginPage.module.scss';

const QUESTION = "Don't have an account?";
const INITIAL_STATE: AuthFormProps = {
  email: '',
  password: '',
};

function Login() {
  const [authForm, setAuthForm] = useState(INITIAL_STATE);
  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...authForm,
      [name]: value,
    };
    setAuthForm(updatedForm);
  };

  const navigateByStatus = () => {
    navigate('/');
  };

  const handleSubmit = async () => {
    const login = await loginUser(authForm);

    if ('data' in login) {
      localStorage.setItem('token', login.data);
      navigateByStatus();
    }
  };

  return (
    <>
      <form onChange={handleChange}>
        <Input maxLength={100} type='email' title='Email' name='email' value={authForm.email} />
        <Input
          maxLength={25}
          type='password'
          title='Password'
          name='password'
          value={authForm.password}
        />
      </form>
      <Link className={style.link} to='/'>
        Forgot password
      </Link>
      <Button onClick={handleSubmit}>Login</Button>
      <LinkBlock title='Sign up' question={QUESTION} href='/' />
    </>
  );
}

export default memo(Login);
