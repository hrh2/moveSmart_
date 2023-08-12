import React,{useState} from 'react'
import TicketCard from './ticketCard'
import { FaHistory} from 'react-icons/fa'
export default function Tickets() {
    const [showUsedTickets, setShowUsedTickets] = useState(true);
    const [showUnUsedTickets, setShowUnUsedTickets] = useState(false);
    const [showSuspended, setShowSuspended] = useState(false);
    // eslint-disable-next-line
    const toggleUsed = () => {
        setShowUsedTickets(true)
        setShowSuspended(false)
        setShowUnUsedTickets(false)
    };
    const toggleUnUsed = () => {
        setShowUsedTickets(false)
        setShowSuspended(false)
        setShowUnUsedTickets(true)
    };
    const toggleSuspended = () => {
        setShowUsedTickets(false)
        setShowSuspended(true)
        setShowUnUsedTickets(false)
    }
  return (
    <div className='h-screen w-full bg-slate-600 bg-opacity-70 fixed top-0 left-0 flex justify-center items-center z-10'>
        <button type="" className='w-[2rem] h-[2rem] text-center font-extrabold text-white absolute top-2 right-5 rounded-full bg-slate-600 aspect-square'>x</button>
        <div className='w-full h-screen md:h-auto sm:h-auto md:w-2/5 sm:w-3/5 bg-white rounded-lg p-1'>
            <div>
                <h2 className='font-bold text-center py-2'>Booked Tickets</h2>
            </div>
            <div className='grid grid-cols-3 text-black mt-2 p-1'>
                <button type="" className='p-2 hover:bg-green-700 rounded-lg' onClick={toggleUnUsed}>UnUsed</button>
                <button type="" className='p-2 hover:bg-green-700 rounded-lg' onClick={toggleUsed}>Used</button>
                <button type="" className='p-2 hover:bg-green-700 rounded-lg' onClick={toggleSuspended}>Suspended</button>
            </div>
            {showUsedTickets&&<div className='grid grid-flow-row p-2 border-t-2 gap-2'>
                {/* cards */}
                <TicketCard/>
                <TicketCard/>
                <TicketCard/>
            </div>}
              {showUnUsedTickets && <div className='grid grid-flow-row p-2 border-t-2 gap-2'>
                  {/* cards */}
                  <TicketCard />
                  <TicketCard />
                  <TicketCard />
                  <TicketCard />
                  <TicketCard />
              </div>}
              {showSuspended && <div className='grid grid-flow-row p-2 border-t-2 gap-2'>
                  {/* cards */}
                  <TicketCard />
              </div>}
              <div className="w-4/5 flex flex-column justify-content-center align-items-center py-5">
                  <p className=" font-extralight text-center italic">
                      <FaHistory size={20} />
                      <span className="text-muted">
                          your car booking history will be displayed here.
                      </span>
                  </p>
              </div>
        </div>
    </div>
  )
}
