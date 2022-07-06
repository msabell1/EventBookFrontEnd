import './App.css';
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from './Components/LandingPage';
import LogInPage from './Components/LogInPage';
import SignUpPage from './Components/SignUpPage';
import UserCreationPage from './Components/UserCreationPage';
import UserDashBoardPage from './Components/UserDashBoardPage';
import EventPage from './Components/EventPage';
import EventCreationPage from './Components/EventCreationPage';
import QRCodeLogIn from './Components/QRCodeLogIn';
import QRCodePage from './Components/QRCodePage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/createuser' element={<UserCreationPage />} />
        <Route path='/dashboard' element={<UserDashBoardPage />} />
        <Route path='/event' element={<EventPage />} />
        <Route path='/createevent' element={<EventCreationPage />} />
        <Route path='/qrcode' element={<QRCodePage />} />
        <Route path='/qrlogin' element={<QRCodeLogIn />} />
      </Routes>

    </div>
  );
}

export default App;
