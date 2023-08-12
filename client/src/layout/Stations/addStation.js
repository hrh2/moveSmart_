import React from 'react'
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";

export default function addStation() {
  return (
    <Form  className='py-2'>
      <div className='text-center text-white h-auto relative'>
          <h2 className='py-4 font-bold'>ADD new Station</h2>
          <div className='grid grid-flow-row gap-2'>
              <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                  <label for="tyre" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Name</label>
                  <input type='number' name="tyres" id='tyre' className='w-full h-full rounded-lg bg-transparent border-white border-2 p-1' />
              </div>
              <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                  <label for="seats" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Common known Name</label>
                  <input type='number' name="seats" id='seats' className='w-full h-full rounded-lg bg-transparent border-white border-2 p-1' />
              </div>
              <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                  <label for="price" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>location</label>
                  <input type='text' name="price" id='price' className='w-full h-full rounded-lg bg-transparent border-white border-2 p-1' />
              </div>
              <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                  <label for="use" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Use</label>
                  <input type='text' name="use" id='use' className='w-full h-full rounded-lg bg-transparent border-white border-2 p-1' />
              </div>
              <div class="mx-auto w-5/6 grid grid-flow-row gap-1">
                    <label for="profile-pic" class="form-label">Station Profiles </label>
                    <input class="form-control bg-transparent" type="file" accept="image/" id="profile-pic"></input>
                    <input class="form-control bg-transparent" type="file" accept="image/" id="profile-pic"></input>
                    <input class="form-control bg-transparent" type="file" accept="image/" id="profile-pic"></input>
              </div>
              <div className=' mx-auto w-5/6 relative my-3'>
                  <label for="color" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Description</label>
                  <textarea name="color" rows="4" id='color' className='w-full rounded-lg bg-transparent border-white border-2 p-4'></textarea>
              </div>
                    <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'>POST</button>
          </div>
      </div>
      </Form>
  )
}
