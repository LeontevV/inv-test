import React, { memo, useState } from 'react';
import CustomInput from '../../components/core/Input/Input';

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
  return (
    <div className='containerSignUp'>
      <form onChange={handleChange} className={style.registrationForm}>
        <CustomInput type='text' title='First name' name='firstName' value={authForm.firstName} />
        <CustomInput type='text' title='Last name' name='lastName' value={authForm.lastName} />
        <CustomInput type='email' title='Email' name='email' value={authForm.email} />
        <CustomInput type='password' title='Password' name='password' value={authForm.password} />
        <CustomInput
          type='password'
          title='Confirm password'
          name='confirmPassword'
          value={authForm.confirmPassword}
        />
      </form>
    </div>
  );
}
export default memo(SignUpPage);
