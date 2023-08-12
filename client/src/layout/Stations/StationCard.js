import React from 'react'

export default function StationCard() {
  return (
      <div className='p-3 bg-opacity-50 bg-blue-600 md:text-base sm:text-sm text-xs'>
          <h6 className=' text-center font-extrabold'>Name: Lorem</h6>
          <div className='grid grid-flow-col gap-1'>
              <div className='w-[5rem] aspect-square bg-white bg-center bg-cover rounded-lg'></div>
              <div className=' text-justify'>
                  <p className=' font-extrabold'><span className=' font-extralight italic'>Location:</span> lorem</p>
                  <p className=' font-extrabold'><span className=' font-extralight italic'>Number of Destination :</span> lorem</p>
                  <p className='text-[80%]'>
                      lorem ipsum dolor sit amet, consectetur adipiscing el aspect sem non pro  id urna et
                  </p>
              </div>
              <div className='grid grid-flow-row px-2 gap-1'>
                  <button type="" className='p-1 bg-warning rounded-lg h-[80%]'>Edit</button>
                  <button type="" className='p-1 px-2 bg-danger rounded-lg h-[80%]'>Delete</button>
              </div>
          </div>
      </div>
  )
}
