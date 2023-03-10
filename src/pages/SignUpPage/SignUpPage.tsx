import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/core/Input';
import Button from '../../components/core/Button';
import LinkBlock from '../../components/LinkButton';
import requestAuth from '../../utils/requestAuth';
import { AuthApi, NavigationPath } from '../../global/type';

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
    navigate(NavigationPath.SUCCESS_PAGE);
  };

  const handleClick = () => {
    requestAuth(navigateByStatus, AuthApi.REGISTRATION, authForm);
  };

  return (
    <>
      <form onChange={handleChange}>
        <Input
          maxLength={25}
          type='text'
          title='First name'
          name='firstName'
          value={authForm.firstName}
        />
        <Input
          maxLength={25}
          type='text'
          title='Last name'
          name='lastName'
          value={authForm.lastName}
        />
        <Input maxLength={100} type='email' title='Email' name='email' value={authForm.email} />
        <Input
          maxLength={25}
          type='password'
          title='Password'
          name='password'
          value={authForm.password}
        />
        <Input
          maxLength={25}
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
    </>
  );
}

export default memo(SignUpPage);
