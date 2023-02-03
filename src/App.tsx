import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUpPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
