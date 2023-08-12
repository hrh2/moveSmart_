import React from 'react'
import StationCard from './StationCard'

export default function AllStations() {
  return (
    <div className='text-white text-center'>
        <h5 className=' font-extrabold py-3'>Stations</h5>
        <div className=' grid grid-flow-row gap-2 p-2'>
            <StationCard/>
            <StationCard/>
            <StationCard/>
            <StationCard/>
        </div>
    </div>
  )
}
