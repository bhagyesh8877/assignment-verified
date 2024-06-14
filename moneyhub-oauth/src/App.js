import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Callback from './components/Callback';
import Account from './components/Account';

const App = () => {
  return (
    <Routes>
      <Route path="/callback" element={<Callback />} />
      <Route path="/" element={<Login />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default App;
