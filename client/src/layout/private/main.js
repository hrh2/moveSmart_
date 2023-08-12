import React from 'react'
import SideBar from '../../components/Sidebar2'
import Images from '../../components/RentingImageDisplay'
import CarDetails from '../../components/CarDetails'
import Form from '../../components/RentingForm'
import CommentForm from '../../components/Commentform'
import Footer from '../../components/Footer'

export default function main() {
  return (
    <div className='w-full'>
        <SideBar/>
      <div className='md:w-[95%] sm:w-[92%] w-[85%] float-right min-h-screen  bg-blue-950'>
        <Images />
        <div className='text-white md:w-4/5 sm:w-5/6 w-11/12 mx-auto pb-2'>
          <CarDetails />
          <div className=''>
            <Form />
            <CommentForm />
          </div>
        </div>
        <Footer />
        </div>
    </div>
  )
}
