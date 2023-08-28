import React from 'react'

export default function BusDetails(props) {
  return (
      <div className=' text-white text-center'>
          <h4 className=' font-bold py-2'>Station Links Details</h4>
          <div className='grid md:grid-cols-3 grid-cols-2 gap-3 p-2'>
              <div className='mx-auto md:aspect-square w-full flex items-center justify-center flex-column p-3 relative rounded-md text-base bg-blue-600'>
                  <h5 className=' font-bold text-xs'>All available Buses</h5>
                  <p className='py-3 text-3xl font-extrabold'> {props.all} </p>
                  <a href='/station/allBuses' className='absolute right-1 bottom-1 text-[70%]'>view</a>
              </div>
              <div className='mx-auto  md:aspect-square w-full flex items-center justify-center flex-column relative p-3 rounded-md text-base bg-blue-600'>
                  <h5 className=' font-bold text-xs'>Bus in Rest Mode</h5>
                  <p className='py-3 text-3xl font-extrabold'> {props.inRest} </p>
                  <a href='/station/inRest' className='absolute right-1 bottom-1 text-[70%]'>view</a>
              </div>
          </div>
      </div>
  )
}
