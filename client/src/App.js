import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import BookTickets from './components/bbooking';
import Chatbot from './components/chatbot';
import Dashboard from './components/private/dashboard';
import Records from './components/records';


function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<Home/>} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/goBook" exact element={<BookTickets />} /> 
      <Route path="/dashboard" exact element={< Dashboard/>} />
      <Route path="/records" exact element={<Records/>} />
      <Route path="/chatbot" exact element={<Chatbot />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
