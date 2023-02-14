import React, { memo, useState } from 'react';

import Input from '../../components/core/Input/Input';
import Button from '../../components/core/Button/Button';
import LinkBlock from '../../components/LinkButton/LinkButton';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper/AuthPageWrapper';

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
        <Button>Create account</Button>
        <LinkBlock title='Login' question={QUESTION} href='/login' />
      </>
    </AuthPageWrapper>
  );
}

export default memo(SignUpPage);
