import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/home/Home';
import BookTickets from './components/booking/booking';
import Chatbot from './components/chabot/chatbot';


function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<Home/>} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/goBook" exact element={<BookTickets />} />
      <Route path="/chatbot" exact element={<Chatbot />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
