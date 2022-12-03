import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';


import RegisterPage from "./pages/registerPage"
import LoginPage from "./pages/loginPage"
import LandingPage from "./pages/landingPage"
import MainPage from './pages/mainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing"/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
