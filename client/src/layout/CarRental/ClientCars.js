import React from 'react'
import {Box} from '@mui/material'
import SingleCard from '../../scenes/global/SingleCard'
import MileChart from '../../scenes/CarRental/MileChart'
import CarStatsChart from '../../scenes/CarRental/CarStatusChart'
import ViewClientCars from '../../scenes/CarRental/ViewClientCars'
import Header from '../../scenes/global/Header'
import Stars from '../../scenes/global/Stars'

const carObj = {
  title: "Total Cars",
  totalNumber: 2,
  icon: "ri-police-car-line",
  color:"bg-green-400"
};


const clientObj = {
  title: "Clients Last Year",
  totalNumber: "200+",
  icon: "ri-user-line",
  color:"bg-blue-400",
};

const distanceObj = {
  title: "Kilometers Covered",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
  color:"bg-yellow-400",
};
const ratingObj={
  title:"Rate",
  number:[1,2,3,5],
  color:"",
}

export default function ClientCars() {
  return (
    <Box className="">
       <Header title="MY cars" subtitle="welcome to your cars stock. view Statistics "/>
      <Box className="dashboard__wrapper">
        <Box className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 p-2">
          <Stars item={ratingObj}/>
          <SingleCard item={carObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </Box>

        <Box className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          <Box className="p-7 rounded-md h-[320px] pb-[50px]">
            <h3 className="text-lg font-semibold mb-[20px]">Miles Statistics</h3>
            <MileChart />
          </Box>

          <Box className="p-7 rounded-md h-[320px] pb-[50px]">
            <h3 className="text-lg font-semibold mb-[20px]">Car Statistics</h3>
            <CarStatsChart />
          </Box>
        </Box>
        <Box>
          <ViewClientCars/>
        </Box>
      </Box>
    </Box>
  )
}
