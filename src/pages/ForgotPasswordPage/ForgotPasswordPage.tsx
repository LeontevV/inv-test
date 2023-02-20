import React, { useState } from 'react';
import Footer from '../../components/Auth/Footer';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

import style from './ForgotPasswordPage.module.scss';

function ForgotPasswordPage() {
  const [authForm, setAuthForm] = useState('');

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.block}>
          <div className={style.title}>Forgot Password</div>
          <div className={style.text}>
            Enter your email address and we will send you a link to reset your password.
          </div>
          <Input type='email' title='Email' name='email' value={authForm} />
          <Button>Reset Password</Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ForgotPasswordPage;
