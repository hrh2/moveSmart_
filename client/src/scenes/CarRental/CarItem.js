import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/CarItem.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Box lg="4" md="4" sm="6" className="mb-5">
      <div className="border-2 border-gray-700 p-2 rounded-md">
        <div className="car__img bg-cover bg-center w-full h-[16rem]" style={{backgroundImage:`url(${imgUrl})`}}>
          {/* <img src={imgUrl} alt="" className="w-100" /> */}
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Box>
  );
};

export default CarItem;
