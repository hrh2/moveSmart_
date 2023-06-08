import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from './components/auth-authentication/Login';
import Signup from './components/auth-authentication/Signup';
import BookForm from './components/generalBookingService/BookingForm'
import HomeGen from './components/layout/gen_Home';
import ContactUs from './components/chats-communication/ContactUs';
import HomePri from './components/layout/Pr_Home'
import Profile from './components/user_profile/Main';
import '../src/components/index.css'
import'./index.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<HomeGen />}>
        <Route index element={<BookForm />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Route>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/userProfile" exact element={<Profile />} />
      <Route path='/privateBooking' exact element={<HomePri/>}/>
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App
