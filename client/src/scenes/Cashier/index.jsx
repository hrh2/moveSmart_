import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Header from '../global/Header'
// eslint-disable-next-line 
import SingleCard from "../global/SingleCard";
import BusesDetails from "./BusSizeDetails"
// eslint-disable-next-line 
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

export default function StationIndex() {
  // eslint-disable-next-line 
   const [data,setData] = useState()
   // eslint-disable-next-line 
   const [error,setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("moveSmart_cashier_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('http://localhost:3050/api/station/admin');
        setData(response.data);
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(()=>{
          setError(null)
        },3000)
      }
    }
    fetchData();
  }, []);
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
           <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Box className=" w-[80vw] mx-auto overflow-x-scroll ">
          <Typography variant='h3' className='text-center'>Bus sits statsticts</Typography>
          <BusesDetails buses={[{bus:"bus1" ,num:12},{bus:"bus2" ,num:16},{bus:"bus4" ,num:56}]}/>
        </Box>
        <Box>
          
        </Box>
    </Box>
  )
}