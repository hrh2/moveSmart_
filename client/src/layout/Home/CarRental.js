import React from 'react'
import SideBar from '../../components/Sidebar2'
import Navbar from '../../components/Navbar2'
import CarCard from '../../components/subcomponents/CarCard'
import Footer from '../../components/Footer'

export default function CarRental() {
  return (
    <div className='w-full'>
      {/* <Notification/> */}
        <SideBar/>
      <div className='md:w-[95%] sm:w-[92%] w-[85%] float-right min-h-screen  bg-blue-950'>
            <Navbar/>
            <p className='text-white p-1 px-4 font-extrabold'>Coup</p>
            <div className='grid grid-flow-col gap-2 max-w-full overflow-x-scroll p-2'>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
            </div>
            <p className='text-white p-1 px-4 font-extrabold'>SUV</p>
            <div className='grid grid-flow-col gap-2 max-w-full overflow-x-scroll p-2'>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
            </div>
            <p className='text-white p-1 px-4 font-extrabold'>MiniVans</p>
            <div className='grid grid-flow-col gap-2 max-w-full overflow-x-scroll p-2'>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
            </div>
            <Footer/>
        </div>
    </div>
  )
}
