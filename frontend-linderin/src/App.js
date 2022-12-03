import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register"/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
