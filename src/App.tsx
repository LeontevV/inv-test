import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Auth from './pages/AuthPage';
import SignUp from './pages/SignUpPage';
import Success from './pages/SuccessePage';
import Login from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPasswordPage';

import './global/styles/font.scss';
import { Paths } from './global/type';

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
    children: [],
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: Paths.login,
        element: <Login />,
      },
      {
        path: Paths.success,
        element: <Success />,
      },
      {
        path: Paths.forgotPassword,
        element: <ForgotPassword />,
      },
      {
        path: Paths.signUp,
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
