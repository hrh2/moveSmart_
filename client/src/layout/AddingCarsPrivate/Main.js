import React from 'react'
import AddingCarForm from './AddingCarForm'
import Footer from '../../components/Footer'
import SideBar from '../../components/Sidebar2'



export default function main() {
  return (
    <div className='w-full'>
      <SideBar />
      <div className='md:w-[95%] sm:w-[92%] w-[85%] float-right min-h-screen  bg-blue-950'>
        <AddingCarForm/>
        <Footer />
      </div>
    </div>
  )
}
