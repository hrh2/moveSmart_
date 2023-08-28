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
import Booking from './layout/Home/Booking'
import CarRental from './layout/CarRental/Index';
import ContactUs from './layout/chats/ContactUs';
import Profile from './layout/user_profile/Main';
import CarDetails from './layout/CarRental/CarDetails'
import AddCar from './layout/CarRental/AddingCar'
import Station from './layout/Stations/main'
import StationDashboard from './scenes/dashboard/index'
import StationTable from './scenes/station/index'
import BusesTable from './scenes/buses/index'
import AddBus from './scenes/dashboard/addBus';
import AddStation from './scenes/dashboard/addStation';

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
        <Route index element={<Booking/>} />
        <Route path="/carRental" element={<CarRental/>} />
        <Route path="/carDetails" element={<CarDetails/>} />
        <Route path="/addCar" element={<AddCar />} />
      </Route>}
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/userProfile" exact element={<Profile />} />
      <Route path="/station" exact element={<Station />} >
        <Route index element={<StationDashboard />} />
        <Route path="/station/allBuses" element={<BusesTable />} />
        <Route path="/station/allStations" element={<StationTable />} />
        <Route path="/station/addBus" element={<AddBus />} />
        <Route path="/station/addStation" element={<AddStation />} />
      </Route>
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
