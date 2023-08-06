import React from 'react'
import { FaBus,FaCar,FaTicketAlt,FaTaxi,} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='grid md:grid-flow-col sm:grid-flow-row grid-cols-3 gap-4 w-4/6 text-white mx-auto md:h-[4.5em] sm:h-[3em] h-2em'>
        <a href='/' className='p-2 rounded-lg bg-blue-300 bg-opacity-40 w-16 h-full'>
            <FaBus size={"2.5em"} className='text-blue-950 m-auto'/>
            <p className='p-1 text-[.5em] text-center font-bold'>Bus</p>
        </a>
        <a href='/' className='p-2 rounded-lg bg-blue-300 bg-opacity-40 w-16 h-full'>
            <FaCar size={"2.5em"} className=' m-auto'/>
            <p className='p-1 text-[.5em] text-center font-bold'>Cabs</p>
        </a>
        <a href='/' className='p-2 rounded-lg bg-blue-300 bg-opacity-40 w-16 h-full'>
            <FaTicketAlt size={"2.5em"} className=' m-auto' />
            <p className='p-1 text-[.5em] text-center font-bold'>Tickets</p>
        </a>
        <div className=' col-span-3 bg-blue-300 bg-opacity-40 p-1 md:w-[20rem] sm:w-[15em] md:h-4/6 sm:h-5/6 grid grid-cols-2 text-center rounded-lg'>
            <a href='/' className='p-1 grid gap-2 grid-flow-col rounded-lg bg-blue-950'>
                <FaTaxi size={"2em"}/>
                <span className='text-[.5em] sm:text-[.8em]'>Booking</span>
            </a>
            <a href='/carRental' className='p-1 grid gap-2 grid-flow-col rounded-lg'>
                <FaTaxi size={"2em"}/>
                <span className='text-[.5em] sm:text-[.8em]'>Car Rental</span>
            </a>
        </div>
    </div>
  )
}
