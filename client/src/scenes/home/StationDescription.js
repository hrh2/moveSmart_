import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import { tokens } from "../../theme";
import { Box,useTheme} from "@mui/material";
import RouteCard from "./RouteCard"

export default function StationDescription() {
    const theme = useTheme();
     const colors = tokens(theme.palette.mode);
    const [data,setData]=useState([])
    // eslint-disable-next-line
    const [error, setError] = useState('')
    useEffect(() => {
      async function fetchData() {
        try {
          const token =localStorage.getItem("token");
          Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          
          const response = await Axios.get('http://localhost:3050/api/station/linked');
          setData(response.data)
        } catch (error) {
          console.error(error);
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        }
      }
      fetchData()
    },[])
  return (
    <Box className=''>
      <Box>
         <h1 className='md:w-4/5 mx-auto w-5/6 py-3 text-xl font-bold'>Accessible BUS Routes</h1>
         <Box className="mx-auto md:w-4/5  sm:w-5/6 w-11/12 p-3 grid md:grid-cols-3 grid-cols-1 gap-3 box-shadow rounded-lg" backgroundColor={colors.primary[600]}>
          {data.map(station=>{
            // const links=data.filter(stationlinked=>stationlinked.=)
            const linksId=station.LinkedDestinationIDs
            return <RouteCard key={station._id} name={station.name} links={linksId} stations={data}/>
          })}
         </Box>
      </Box>
    </Box>
  )
}