import React from 'react'
// import { FaDownload } from 'react-icons/fa'
import {useTheme} from '@mui/material'
import {tokens} from '../../Contexts/theme'
export default function TicketCard({ticket,used,suspended}) {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  return (
    <>
      <div className='p-1  px-3 grid grid-flow-col gap-4 text-center border-b-4' style={{backgroundColor:`url(${colors.grey[500]})`}}>
          <span className='font-extralight text-[75%] py-1'>{ticket.time} <br/>  {ticket.date}</span>
          <span>Ticket to {ticket.to}<br/>from {ticket.from}</span>
          {/* {<a href='/' className='font-bold text-[80%]'>view</a>} */}
          {!used&&<a href='/' className='p-1'>view</a>}
          <div>
            
          </div>
      </div>
    </>
  )
}
