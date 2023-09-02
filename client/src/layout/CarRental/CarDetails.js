import React,{useState} from 'react'
 // eslint-disable-next-line
import { Box,useTheme } from "@mui/material";
import SideBar from '../../scenes/CarRental/Sidebar'
import Images from '../../scenes/CarRental/RentingImageDisplay'
import CarDetails from '../../scenes/CarRental/CarDetails'
import Form from '../../scenes/CarRental/RentingForm'
import CommentForm from '../../scenes/CarRental/Commentform'
import Footer from '../../components/Footer'

export default function Main() {
   // eslint-disable-next-line
  const [isSidebar, setIsSidebar] = useState(true);
  return (

    <div className='app'>
    <SideBar isSidebar={isSidebar}/>
      <main className='content p-3'>
          <Box  className="w-[80vw] mx-auto">
            <Images/>
          </Box>
          <CarDetails />
          <Form />
          <CommentForm />
      </main>
   </div>
  )
}
