import React, { useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () =>{
    setIsSidebarOpen(!isSidebarOpen);    
  };
  useEffect(()=>{
    console.log(`Sidebar is Open: ${isSidebarOpen}`)
  }, [isSidebarOpen]);
  
  return (    
    <div data-theme="night">  
      <Navbar onMenuButtonClick={toggleSidebar}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="*" element={<Home/>} />
      </Routes>    
      <Footer/>     
    </div>
  )
};

export default App;
