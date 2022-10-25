import React from 'react';
import './App.css';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login.js'
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>

   

      
    </Routes>
  
    

    </BrowserRouter>
    
  );
}

export default App;
