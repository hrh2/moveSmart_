import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from './layout/auth-authentication/Login';
import Signup from './layout/auth-authentication/Signup';
import Home from './layout/Home/Home';
//Public bus booking and cabs booking 
import Booking from './layout/Home/Booking'
import CabsBookingForm from './layout/Home/Cabs';

import CarRental from './layout/CarRental/main';
import ContactUs from './layout/chats/ContactUs';
// Use profile
import Profile from './layout/user_profile/Main';
import EditProfile from './layout/CarRental/EditProfile'
// Rental Cars Services
import Cars from './layout/CarRental/main'
import AllCars from './layout/CarRental/index'
import AddCar from './layout/CarRental/AddingCar'
import SingleCar from './layout/CarRental/CarDetails'
import Notification from './layout/CarRental/Notification';
import ClientCars from './layout/CarRental/ClientCars'
// Station Services
import Station from './layout/Stations/main'
import StationDashboard from './layout/Stations/index'
import StationTable from './scenes/station/index'
import BusesTable from './scenes/buses/index'
import AddBus from './scenes/buses/addBus';
import AddStation from './scenes/station/addStation';

import '../src/components/index.css'
import'./index.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, colorMode] = useMode();
  // eslint-disable-next-line
  const [isSidebar, setIsSidebar] = useState(true);
  const user = localStorage.getItem("token");
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <Routes>
{user&&<Route path="/" element={<Home />}>
        <Route index element={<Booking/>}/>
        <Route path="/cabs" element={<CabsBookingForm/>} />
        <Route path="/carRental" element={<CarRental/>} />
        <Route path="/cars" exact element={<Cars/>}>
          <Route index element={<AllCars/>} />
          <Route path="/cars/single/:id" element={<SingleCar />} />
          <Route path="/cars/add" element={<AddCar />} />
          <Route path="/cars/editProfile" element={<EditProfile />} />
          <Route path="/cars/edit/:id" element={<AddCar />} />
          <Route path="/cars/profile" element={<Profile />} />
          <Route path="/cars/notifications" element={<Notification/>} />
          <Route path="/cars/mine" element={<ClientCars/>} />
        </Route>
      </Route>
      }
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/userProfile" exact element={<Profile />} />
      <Route path="/station" exact element={<Station />} >
        <Route index element={<StationDashboard />} />
        <Route path="/station/allBuses" element={<BusesTable />} />
        <Route path="/station/allStations" element={<StationTable />} />
        <Route path="/station/bus/add" element={<AddBus />} />
        <Route path="/station/station/add" element={<AddStation />} />
      </Route>
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
