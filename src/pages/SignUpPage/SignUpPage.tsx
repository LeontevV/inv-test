import React, { memo, useState } from 'react';
import Input from '../../components/core/Input/Input';

import style from './SignUpPage.module.scss';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpPage() {
  const [authForm, setAuthForm] = useState(INITIAL_STATE);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...authForm,
      [name]: value,
    };
    setAuthForm(updatedForm);
  };
  const errorConfirm = authForm.password === authForm.confirmPassword;
  return (
    <div className='containerSignUp'>
      <form onChange={handleChange} className={style.registrationForm}>
        <Input type='text' title='First name' name='firstName' value={authForm.firstName} />
        <Input type='text' title='Last name' name='lastName' value={authForm.lastName} />
        <Input type='email' title='Email' name='email' value={authForm.email} />
        <Input type='password' title='Password' name='password' value={authForm.password} />
        <Input
          type='password'
          title='Confirm password'
          name='confirmPassword'
          value={authForm.confirmPassword}
          errorConfirm={errorConfirm}
        />
      </form>
    </div>
  );
}
export default memo(SignUpPage);
