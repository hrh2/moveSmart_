import React from 'react'
// eslint-disable-next-line 
import AddingStation from './addStation'
import AllStations from './AllStations'
// eslint-disable-next-line 
import AddBus from './addBus'
import StationLinks from './StationLinks'
import BusDetails from './BusDetails'
import UserGraph from './UserbilityGraph'

export default function main() {
  return (
   <div className='grid grid-flow-row'>
      <div className=''>
        
      </div>
      <div className=' bg-blue-950 min-h-screen w-full grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
        <div className=''>
          <StationLinks />
          <BusDetails />
          <UserGraph />
        </div>
        <div className='border-r-2 border-white '>
          {/* <AddBus/> */}
          <AllStations />
        </div>
      </div>
   </div>
  )
}
