import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import BookForm from './components/BookingForm'
import Home from './components/Home';
import ContactUs from './components/ContactUs';

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<BookForm />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Route>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App
