import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from './layout/auth-authentication/Login';
import Signup from './layout/auth-authentication/Signup';
import Home from './layout/Home/Home';
import Booking from './layout/Home/Booking'
import CarRental from './layout/Home/CarRental';
import ContactUs from './layout/chats/ContactUs';
import Profile from './layout/user_profile/Main';
import PBook from './layout/private/main'
import '../src/components/index.css'
import'./index.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Booking/>} />
        <Route path="/carRental" element={<CarRental/>} />
        <Route path="/rentCar" element={<PBook/>} />
      </Route>
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/userProfile" exact element={<Profile />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App
