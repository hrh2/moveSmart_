import React from 'react'

export default function StationCard(props) {
  return (
      <div className='p-3 bg-opacity-50 bg-blue-600 md:text-base sm:text-sm text-xs'>
          <h6 className=' text-center font-extrabold'>{props.name}</h6>
          <div className='grid grid-flow-col gap-1'>
              <div className='w-[5rem] aspect-square bg-white bg-center bg-cover rounded-lg' style={{backgroundImage:`url(${props.image[0]})`}} ></div>
              {/* <img src={props.image[0]}  alt='imag'/> */}
              <div className=' text-justify'>
                  <p className=' font-extrabold'><span className=' font-extralight italic'>Location:</span>{props.location}</p>
                  <p className=' font-extrabold'><span className=' font-extralight italic'>Number of Destination :</span> {props.numODest} </p>
                  <p className='text-[80%]'>
                      {props.desc}
                  </p>
              </div>
              <div className='grid grid-flow-row px-2 gap-1'>
                  <button type="" className='p-1 bg-warning rounded-lg h-[80%]'>Edit</button>
                  <a href={`/`} className='p-1 px-2 bg-danger rounded-lg h-[80%]'>Delete</a>
              </div>
          </div>
      </div>
  )
}
