import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUpPage';
import Login from './pages/LoginPage';

import './global/styles/font.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
