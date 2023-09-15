import React from "react";
import {Box} from "@mui/material"
import CarItem from "../../scenes/CarRental/CarItem";
import carData from "../../data/carData";
import Recommendeds from "../../scenes/CarRental/Recommendeds";
import Header from "../../scenes/global/Header";

const CarListing = () => {
  return (
    <Box>
       <Header title="Rent Cars" subtitle="Easy way to move Smart . Welcome!!" />
          <Box>
            <Recommendeds/>
          </Box>
          <Box className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4  p-2">
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Box>
    </Box>
  );
};

export default CarListing;
