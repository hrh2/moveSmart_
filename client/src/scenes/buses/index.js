import { Box,useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataBuses } from "../../data/mockData";
import Header from "../dashboard/Header";

import React from 'react'

export default function Index() {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
    const columns=[
            {
                field: "plate",
                headerName: "Plate No",
                flex: 1,
                cellClassName: "name-column--cell",
              },
              {
                field: "price",
                headerName: "Price",
                flex: 1,

              },
              {
                field: "location1",
                headerName: "Route",
                flex: 1,
              },
              {
                field: "location2",
                headerName: "Route",
                flex: 1,
              },
    ]
  return (
    <Box m="20px" >
      <Header
        title="BUSES"
        subtitle="List of All Buses"
      />
      <Box
      m="40px 0 0 0"
      height="75vh"
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
         <DataGrid checkboxSelection rows={mockDataBuses} columns={columns} components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  )
}
