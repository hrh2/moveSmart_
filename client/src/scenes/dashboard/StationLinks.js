import React from 'react'

export default function StationLinks(props) {
  return (
    <div className=' text-white text-center'>
        <h4 className=' font-bold py-2'>Station Links Details</h4>
          <div className='grid grid-cols-3 gap-3 p-2'>
              <div className='mx-auto p-2 aspect-[1/1] flex items-center justify-center flex-column relative rounded-md text-base bg-blue-600'>
                <h5 className=' font-bold text-xs'>Currently linked Stations</h5>
                <p className='py-3 text-3xl font-extrabold'>{props.linked}</p>
                  <a href='/station/linked' className='absolute right-1 bottom-1 text-[70%]'>view</a>
            </div>
            <div className='mx-auto p-2 aspect-square flex items-center justify-center flex-column relative rounded-md text-base bg-blue-600'>
                <h5 className=' font-bold text-xs'>Station with no Link</h5>
                <p className='py-3 text-3xl font-extrabold'>{props.notLinked}</p>
                <a href='/station/notLinked' className='absolute right-1 bottom-1 text-[70%]'>view</a>
            </div>
              <div className='mx-auto p-2 aspect-square flex items-center justify-center flex-column  relative rounded-md text-base bg-blue-600'>
                <h5 className=' font-bold text-xs'>All Stations</h5>
                <p className='py-3 text-3xl font-extrabold'>{props.all}</p>
                <a href='/station' className='absolute right-1 bottom-1 text-[70%]'>view all</a>
            </div>
        </div>
    </div>
  )
}
