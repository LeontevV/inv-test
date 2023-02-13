import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUpPage';
import Login from './pages/LoginPage/LoginPage';
import Success from './pages/SuccessePage/SuccessePage';

import './global/styles/font.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
