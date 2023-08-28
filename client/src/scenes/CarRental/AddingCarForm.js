import React from 'react'

export default function Form() {
  return (
      <form className='w-full grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 text-teal-50 md:text-base sm:text-sm text-xs '>
        <div className='border-white md:border-r-2 sm:border-r-2 py-4'>
              <div className=' grid grid-cols-1 gap-4 p-4'>
                  <input type="file" name="Photo" placeholder='Upload Photo' id='file' className='' />
                  <div>
                      <input type="file" name="Photo" placeholder='Upload Photo' className='' />
                      <input type="file" name="Photo" placeholder='Upload Photo' className='' />
                  </div>
              </div>
              <div className='text-center'>
                  <h2 className='py-4 font-bold'>SPECIFICATION</h2>
                  <div className='grid grid-flow-row gap-2'>
                      <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="tyre" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Tyres</label>
                          <input type='number' name="tyres" id='tyre' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                      </div>
                      <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="seats" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Seats</label>
                          <input type='number' name="seats" id='seats' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                      </div>
                      <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="price" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Price</label>
                          <input type='text' name="price" id='price' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                      </div>
                      <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="color" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Color</label>
                          <input type='text' name="color" id='color' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                      </div>
                      <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="use" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Use</label>
                          <input type='text' name="use" id='use' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                      </div>
                  </div>
              </div>
        </div>
        <div>
            <h1 className='text-center font-extrabold py-3'>WHERE TO FIND</h1>
            <div className='grid grid-cols-1 text-center'>
                <div className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label for="name" className='col-span-2'>Name:</label>
                      <input type="text" name="name" id='name' className='col-span-3 p-2 rounded-lg text-black' />
                </div>
                <div className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label for="street" className='col-span-2'>Street(optional)</label>
                      <input type="address" name="street" id='street' className='col-span-3 p-2 rounded-lg text-black' />
                </div>
                <div className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                    <label for="description" className='col-span-2'>Description:</label>
                    <textarea name="description" id='description' rows={3}  className='col-span-3 p-2 rounded-lg text-black'></textarea>
                </div>
            </div>
            <div className=''>
                <h1 className='text-center py-2'>Discount (Optional) </h1>
                <div className='grid grid-flow-row'>
                    <div className='grid grid-cols-3 gap-4 p-4'>
                        <input type="number" className=" p-2 rounded-lg text-black" placeholder="..%"/>
                        <input type="text" className="p-2 rounded-lg col-span-2 text-black" placeholder="description"/>
                    </div>
                </div>
            </div>
            <div className='p-2 grid grid-cols-3'>
                <p>Will You Proovide Drive</p>
                <div className=' col-span-2 grid grid-cols-2 p-3 gap-2'>
                    <div className='bg-blue-500 relative p-1 rounded-lg'>
                        <label for="yes" className='absolute w-full h-full px-4'>Yes</label>
                        <input type="radio" className="px-2" name="driverP" id='yes' value="yes" />
                    </div>
                      <div className='bg-blue-500 relative p-1 rounded-lg'>
                          <label for="no" className='absolute w-full h-full px-4'>No</label>
                          <input type="radio" className="px-2" name="driverP" id='no' value="no" />
                      </div>
                </div>
            </div>
            <div className='w-full py-3 flex'>
                  <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'>POST</button>
            </div>
        </div>
    </form>
  )
}
