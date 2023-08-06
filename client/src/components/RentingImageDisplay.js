import React from 'react'


import Image from '../img/prof.jpg'


const data = [

    {

        review: 'lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet lore mauris   sed diam non pro id el met     else temp id elit lore mauris sed diam non pro id'
    },
    {
        
        review: 'lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet lore mauris   sed diam non pro id el met     else temp id elit lore mauris sed diam non pro id'
    },
    {
        review: 'lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet lore mauris   sed diam non pro id el met     else temp id elit lore mauris sed diam non pro id'
    }
   
]
export default function Images() {
  return (
      <div className='w-full gap-2 overflow-x-scroll grid grid-flow-col p-2'>
          {
              data.map(({ avatar, name, review }, index) => {
                  return (
                      <div key={index} className='md:w-[35rem] md:h-[25rem] sm:w-[25rem] sm:aspect-square w-[20rem] h-[20rem] rounded-xl'>
                          <div className='w-full h-full bg-cover bg-center rounded-xl' style={{backgroundImage:`url(${Image})`}}>
                          </div>
                      </div>
                  );
              })
          }
      </div>
  )
}
