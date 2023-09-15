import React,{useState} from 'react'
import { Box} from "@mui/material";
import Images from '../../scenes/CarRental/RentingImageDisplay'
import CarDetails from '../../scenes/CarRental/CarDetails'
import Form from '../../scenes/CarRental/RentingForm'
import CommentForm from '../../scenes/CarRental/Commentform'

export default function Main() {
   // eslint-disable-next-line
  const [isSidebar, setIsSidebar] = useState(true);
  return (
      <Box className='content px-2'>
          <Box  className="w-[80vw] mx-auto">
            <Images/>
          </Box>
          <CarDetails />
          <Form />
          <CommentForm />
      </Box>
  )
}
