import React from "react";
import SingleCard from "../global/SingleCard";
import MileChart from "../CarRental/MileChart";


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

const Dashboard = () => {
  return (
    <div className="">
      <div className="dashboard__wrapper">
        <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3">
          <SingleCard item={stationObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={busesObj} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
