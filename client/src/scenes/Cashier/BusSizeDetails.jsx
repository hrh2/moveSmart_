import React from "react";
// import { Box, Typography } from "@mui/material";
// import { LiaMapPinSolid } from "react-icons/lia";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const MileChart = ({ buses }) => {
  const busesData = [
    { bus: "Bus A", num: 10 },
    { bus: "Bus B", num: 16 },
    { bus: "Bus B", num: 18 },
    { bus: "Bus B", num: 15 },
    { bus: "Bus B", num: 16 },
    { bus: "Bus B", num: 19 },
    { bus: "Bus B", num: 11 },
  ];
    return (
        <ResponsiveContainer width="100%" className="md:h-[300px] h-[280px]">
          <BarChart data={busesData}>
            <XAxis dataKey="bus" stroke="#2884ff" />
            <Bar dataKey="num" stroke="#2884ff"  fill="#2884ff" barSize={30} />
            <Tooltip wrapperClassName="tooltip__style" cursor={false} />
          </BarChart>
        </ResponsiveContainer>
  );
};

export default MileChart;
