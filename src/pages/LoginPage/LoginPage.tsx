import React, { memo, useState } from 'react';
import Footer from '../../components/Auth/Footer/Footer';
import Button from '../../components/core/Button/Button';
import Input from '../../components/core/Input/Input';
import Label from '../../components/Label/Label';
import LinkBlock from '../../components/LinkButton/LinkButton';
import Logo from '../../components/Logo/Logo';
import { ReactComponent as Elipsis } from '../../assets/svg/elipsis.svg';

import style from './LoginPage.module.scss';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper/AuthPageWrapper';

const QUESTION = "Don't have an account?";
const INITIAL_STATE = {
  email: '',
  password: '',
};

function Login() {
  const [authForm, setAuthForm] = useState(INITIAL_STATE);

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as typeof event.target & {
      name: string;
      value: string;
    };
    const { name, value } = target;
    const updatedForm = {
      ...authForm,
      [name]: value,
    };
    setAuthForm(updatedForm);
  };

  return (
    <AuthPageWrapper onChange={handleChange} title='Login'>
      <>
        <Input type='email' title='Email' name='email' value={authForm.email} />
        <Input type='password' title='Password' name='password' value={authForm.password} />
        <Button>Login</Button>
        <LinkBlock title='Sign up' question={QUESTION} href='/' />
      </>
    </AuthPageWrapper>
  );
}

export default memo(Login);
