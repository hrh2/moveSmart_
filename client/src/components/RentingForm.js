import React from 'react'

export default function BookPolicyI() {
  return (
    <form>
          <div className='md:text-base sm:text-sm text-xs bg-slate-300 bg-opacity-30 py-2'>
          <div className='grid grid-cols-2 font-bold '>
              <h2 className='md:w-3/5 sm:w-4/5 w-5/6 mx-auto text-center text-[60%]'>Please select if your book a car with a Driver or no Driver</h2>
              <h2 className='text-right border-r-4 py-2 px-2 w-5/6'>OWNER</h2>
          </div>
              <div className='mx-auto grid grid-flow-row gap-2 my-2 md:w-3/5 sm:w-4/5 w-5/6 text-[80%]'>
              <div className='grid grid-cols-3 gap-3'>
                  <div className=' col-span-2 grid grid-cols-2 border-2 rounded-sm'>
                      <div className='py-1 text-center border-r-2'>With Driver</div>
                      <div className='py-1 text-center'>23000 frw a day</div>
                  </div>
                  <button type="button" className='border-2 rounded-sm'>Select</button>
              </div>
              <div className='grid grid-cols-3 gap-3'>
                  <div className=' col-span-2 grid grid-cols-2 border-2 rounded-sm'>
                      <div className='py-2 text-center border-r-2'>With Driver</div>
                      <div className='py-2 text-center'>23000 frw a day</div>
                  </div>
                  <button type="button" className='border-2 rounded-sm'>Select</button>
              </div>
          </div>
      </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 w-5/6 mx-auto'>
              <div className=''>
                  <h1 className='flex gap-3 border-l-4 px-2 font-bold my-2 md:text-base sm:text-sm text-xs mx-auto'>
                      DISCOUNTS
                      <span className='text-[80%] font-light italic'>we have discount for your</span>
                  </h1>
                  <div className='mx-auto grid grid-cols-2 md:w-5/6 p-2 text-[80%]'>
                      <div className='flex gap-1'>
                          <input type='radio' name='discount' id='week1' value="10%" />
                          <span className='p-[.5rem]'>10%</span>
                          <label for="week1" className='bg-gray-400 p-[.5rem] rounded-md'>1 week</label>
                      </div>
                      <div className='flex gap-1'>
                          <input type='radio' name='discount' id='week2' value="20%" />
                          <span className='p-[.5rem]'>20%</span>
                          <label for="week2" className='bg-gray-400 p-[.5rem] rounded-md'>2 week</label>
                      </div>
                  </div>
              </div>
              <div className=''>
                  <h1 className='border-r-4 px-2 font-bold my-2 md:text-base sm:text-sm text-xs text-right grid grid-flow-col gap-1'>
                      <span className='text-[80%] font-light italic text-justify'>choose a deadline for your request  </span>
                      DEADLINE
                  </h1>
                  <div className='grid grid-cols-2 gap-4 md:w-5/6 mx-auto p-2'>
                      <div className='grid grid-flow-row'>
                          <label for="date" >Date</label>
                          <input type='date' name='date' id='date' className='bg-gray-400 p-[.5rem] rounded-md' />
                      </div>
                      <div className='grid grid-flow-row'>
                          <label for="time" >Time</label>
                          <input type='time' name='time' id='time' className='bg-gray-400 p-[.5rem] rounded-md' />
                      </div>
                  </div>
              </div>
          </div>
          <div className='w-full py-3 flex'>
              <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'>Request</button>
          </div>
    </form>
  )
}
