import React, { useState } from 'react';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

import style from './ForgotPasswordPage.module.scss';

function ForgotPasswordPage() {
  const [authForm, setAuthForm] = useState('');

  return (
    <AuthPageWrapper title='Forgot password'>
      <div className={style.text}>
        Enter your email address and we will send you a link to reset your password.
      </div>
      <Input type='email' title='Email' name='email' value={authForm} />
      <Button>Reset password</Button>
    </AuthPageWrapper>
  );
}

export default ForgotPasswordPage;
