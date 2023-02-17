import React, { memo, useState } from 'react';

import Input from '../../components/core/Input';
import Button from '../../components/core/Button';
import LinkBlock from '../../components/LinkButton';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';
import requestAuth from '../../utils/requestAuth';
import { AuthApi } from '../../global/type';

const QUESTION = 'Alredy have an Account?';
const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpPage() {
  const [authForm, setAuthForm] = useState(INITIAL_STATE);

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...authForm,
      [name]: value,
    };
    setAuthForm(updatedForm);
  };

  const handleClick = () => {
    requestAuth(AuthApi.REGISTRATION, authForm);
  };

  return (
    <AuthPageWrapper title='Sign Up'>
      <form onChange={handleChange}>
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
      <Button onClick={handleClick}>Create account</Button>
      <LinkBlock title='Login' question={QUESTION} href='/login' />
    </AuthPageWrapper>
  );
}

export default memo(SignUpPage);
