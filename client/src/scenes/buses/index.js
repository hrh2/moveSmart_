import { Box,useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataBuses } from "../../data/mockData";
import Header from "../global/Header";

import React,{useState,useEffect} from 'react'
import Axios from 'axios'

export default function Index() {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     const [data,setData]=useState({})
     const [error, setError] = useState('')
     useEffect(() => {
       async function fetchData() {
         try {
           const token =localStorage.getItem("token");
           Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
           
           const response = await Axios.get('http://localhost:3050/api/bus');
           setData(response.data)
           console.log(response.data)
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
     const columns = [
      {
        field: "plate",
        headerName: "Plate No",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "sits",
        headerName: "Total Sits",
        flex: 1,
      },
      {
        field: "price",
        headerName: "Price on Each",
        flex: 1,
      },
      {
        field: "point1",
        headerName: "Destination 1",
        flex: 1,
        renderCell: (params) => params.value.stationName,
      },
      {
        field: "point2",
        headerName: "Destination 2",
        flex: 1,
        renderCell: (params) => params.value.stationName,
      },
    ];
    
  return (
    <Box m="20px" className="">
      <Header
        title="BUSES"
        subtitle="List of All Buses"
      />
      <Box
      m="40px 0 0 0"
      height="75vh"
      className="mx-auto md:w-full sm:w-full w-[72vw] overflow-x-scroll"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
      }}>
         <DataGrid checkboxSelection rows={data} columns={columns} components={{ Toolbar: GridToolbar }} className="md:w-full sm:w-full w-[600px] max-w-[1600px] "/>
      </Box>
    </Box>
  )
}
