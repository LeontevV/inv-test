import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUpPage';
import Success from './pages/SuccessePage';
import Login from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPasswordPage';

import './global/styles/font.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/success' element={<Success />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
