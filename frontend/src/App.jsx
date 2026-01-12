import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';

import './App.css';

function App() {
  
  return (    
    <div data-theme="dracula">      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>         
    </div>
  )
};

export default App;
