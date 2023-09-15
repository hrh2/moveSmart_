import React from 'react'
import Header from '../../scenes/global/Header'
import SingleCard from "../../scenes/global/SingleCard";
import StationChart from "../../scenes/global/MostUsedStation";
import BusChart from "../../scenes/dashboard/ActiveBuses";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
const stationObj = {
  title: "Total Stations",
  totalNumber: 25,
  icon: "ri-steering-2-line",
  color:""
};

const clientObj = {
  title: "Total Users",
  totalNumber: "85k",
  icon: "ri-user-line",
  color:""
};

const busesObj = {
  title: "Total Buses",
  totalNumber: 400,
  icon: "ri-timer-flash-line",
  color:""
};

const lindedStations={
  title: "Linded Stations",
  totalNumber:6,
  icon:"",
  color:"",
}

export default function index() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
           <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Box className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          <SingleCard item={stationObj} />
          <SingleCard item={lindedStations} />
          <SingleCard item={clientObj} />
          <SingleCard item={busesObj} />
        </Box>
        <Box className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          <Box className="p-7 rounded-md h-[320px] pb-[50px]">
            <h3 className="text-lg font-semibold mb-[20px]">Active Station</h3>
            <StationChart />
          </Box>

          <Box className="p-7 rounded-md h-[320px] pb-[50px]">
            <h3 className="text-lg font-semibold mb-[20px]">Active Buses</h3>
            <BusChart />
          </Box>
        </Box>
    </Box>
  )
}
