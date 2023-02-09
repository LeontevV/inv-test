import React, { memo, useState } from 'react';
import Input from '../../components/core/Input/Input';

import Button from '../../components/core/Button/Button';
import Label from '../../components/Label/Label';
import LinkBlock from '../../components/LinkButton/LinkButton';

import { ReactComponent as Elipsis } from '../../assets/svg/elipsis.svg';

import style from './SignUpPage.module.scss';
import LowerBlock from '../../components/LowerBlock/LowerBlock';

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
        <Input type='text' title='First name' name='firstName' value={authForm.firstName} />
        <Input type='text' title='Last name' name='lastName' value={authForm.lastName} />
        <Input type='email' title='Email' name='email' value={authForm.email} />
        <Input type='password' title='Password' name='password' value={authForm.password} />
        <Input
          type='password'
          title='Confirm password'
          name='confirmPassword'
          value={authForm.confirmPassword}
          errorMessage={
            authForm.password === authForm.confirmPassword ? '' : "Password doesn't match"
          }
        />
      </form>

      <LowerBlock />

      <Elipsis />
    </div>
  );
}
export default memo(SignUpPage);
