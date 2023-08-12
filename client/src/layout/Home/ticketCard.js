import React from 'react'
import { FaDownload } from 'react-icons/fa'


export default function ticketCard() {
  return (
      <div className='bg-gray-300 p-1 px-3 grid grid-flow-col gap-4 rounded-3xl text-center'>
          <span className='font-extralight text-[75%] py-1'>19:30pm <br/>  23 june</span>
          <span>Ticket to Musanze</span>
          <a href='/' className='font-bold text-[80%]'>view</a>
          <a href='/' className='p-1'><FaDownload /></a>
      </div>
  )
}
