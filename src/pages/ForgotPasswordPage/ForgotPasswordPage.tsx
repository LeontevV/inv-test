import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
import { AuthApi, NavigationPath } from '../../global/type';
import requestAuth from '../../utils/requestAuth';

import style from './ForgotPasswordPage.module.scss';

function ForgotPasswordPage() {
  const [authForm, setAuthForm] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthForm(event.target.value);
  };

  const navigateByStatus = () => {
    navigate(NavigationPath.LOGIN_PAGE);
  };

  const handleClick = () => {
    requestAuth(navigateByStatus, AuthApi.FORGOT_PASSWORD, { email: authForm });
  };

  return (
    <AuthPageWrapper title='Forgot password'>
      <div className={style.text}>
        Enter your email address and we will send you a link to reset your password.
      </div>
      <Input onChange={handleChange} type='email' title='Email' name='email' value={authForm} />
      <Button onClick={handleClick}>Reset password</Button>
    </AuthPageWrapper>
  );
}

export default ForgotPasswordPage;
