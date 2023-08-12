import React from 'react'

export default function BusDetails() {
  return (
      <div className=' text-white text-center'>
          <h4 className=' font-bold py-2'>Station Links Details</h4>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 p-2'>
              <div className='mx-auto md:aspect-square md:w-5/6 p-3 relative rounded-md text-base bg-blue-600'>
                  <h5 className=' font-bold text-xs'>All available Buses</h5>
                  <p className='py-3 text-xl'>count</p>
                  <a href='/' className='absolute right-1 bottom-1 text-[70%]'>view</a>
              </div>
              <div className='mx-auto  md:aspect-square md:w-5/6 relative p-3 rounded-md text-base bg-blue-600'>
                  <h5 className=' font-bold text-xs'>Bus in Rest Mode</h5>
                  <p className='py-3 text-xl'>count</p>
                  <a href='/' className='absolute right-1 bottom-1 text-[70%]'>view</a>
              </div>
              {/* <div className='mx-auto p-2 md:aspect-square md:w-5/6 sm:w-11/12 w-full md:col-span-1 col-span-2 relative rounded-md text-base bg-blue-600'>
                  <h5 className=' font-bold text-xs'>All Stations</h5>
                  <p className='py-3 text-xl'>count</p>
                  <a href='/' className='absolute right-1 bottom-1 text-[70%]'>view all</a>
              </div> */}
          </div>
      </div>
  )
}
