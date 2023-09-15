import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { mockDataStation } from "../../data/mockData";
import Header from "../global/Header";

import React,{useState,useEffect} from 'react'
import Axios from 'axios'

export default function Index() {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
    const columns=[
            { field: "id", headerName: "No" },
            {
                field: "name",
                headerName: "Station",
                flex: 1,
                cellClassName: "name-column--cell",
              },
              {
                field: "location",
                headerName: "Location",
                flex: 1,

              },
              {
                field: "numberOfDestinations",
                headerName: "No Destination",
                flex: 1,
              },
     
    ]
    const [data,setData]=useState({})
    const [error, setError] = useState('')
    useEffect(() => {
      async function fetchData() {
        try {
          const token =localStorage.getItem("token");
          Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          
          const response = await Axios.get('http://localhost:3050/api/station');
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
  return (
    <Box m="20px" >
      <Header title="STATIONS" subtitle="Managing the Stations" />
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
         <DataGrid checkboxSelection rows={data} columns={columns} components={{ Toolbar: GridToolbar }} className="md:w-full sm:w-full w-[600px]"/>
      </Box>
    </Box>
  )
}
