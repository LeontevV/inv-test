import React, { memo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';
import { Paths } from '../../global/type';

const titles = {
  [Paths.login]: 'Login',
  [Paths.signUp]: 'Sign Up',
  [Paths.success]: 'Success',
  [Paths.forgot_password]: 'Forgot Password',
};

function AuthPage() {
  const location = useLocation();

  const pathname = location.pathname.split('/').at(-1)?.toLowerCase() as Paths;
  const title = titles[pathname] || 'Home';

  return (
    <AuthPageWrapper title={title}>
      <Outlet />
    </AuthPageWrapper>
  );
}

export default memo(AuthPage);
