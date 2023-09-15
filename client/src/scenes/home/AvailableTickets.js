import React from 'react'
import { FaChair} from 'react-icons/fa'

export default function AvailableTickets() {
  return (
    <div className='text-white'>
      <h1 className=' font-bold border-l-4 p-2 text-[.5em] sm:text-[.8em] md:text-[1.245em] my-1'>Tickets available on 26 june 2022</h1>
      <div className='grid grid-flow-row gap-1'>
        {/* cards */}
        <div className='bg-white rounded-md text-[.7em] text-black grid grid-cols-4'>
          <div className="col-span-2 p-1">
            <h2 className=" font-bold">Nyabugogo  To Musanze</h2>
            <p>14:00 -14:30</p>
            <p className='flex gap-2'>Remaining Sits : 23 <FaChair/></p>
          </div>
          <div className=' border-2 p-1 grid grid-flow-row'>
            <h2 className=" font-bold">passengers</h2>
            <input type='number' className='w-11/12 bg-slate-400 h-8 rounded-lg' placeholder='No' name='passengers'/>
          </div>
          <div className='p-1 grid grid-flow-row'>
            <span>Price:</span>
            <span className='font-bold'>2000Frw</span>
            <button className='bg-blue-500 p-2 rounded-lg h-7 mx-auto md:w-4/6 sm:w-5/6'>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
