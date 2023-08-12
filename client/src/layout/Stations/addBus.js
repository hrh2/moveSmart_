import React from 'react'
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";
export default function addStation() {
    return (
        <Form>
        <div className='text-center text-white'>
            <h2 className='py-4 font-bold'>Add a Bus</h2>
            <div className='grid grid-flow-row gap-2'>
                <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label for="tyre" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Plate No</label>
                    <input type='text' name="tyres" id='tyre' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                </div>
                <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label for="color" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Price</label>
                    <input type='text' name="color" id='color' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                </div>
                <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label for="use" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Exposed Sits</label>
                    <input type='text' name="use" id='use' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                </div>
                    <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                        <label for="use" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Normal starting time</label>
                        <input type='time' name="use" id='use' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                    </div>
                <h4 className=' text-xs'>Destination Points(Operation stations)</h4>
                <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label for="seats" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Point 1</label>
                    <input type='number' name="seats" id='seats' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                </div>
                <div className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label for="price" className='absolute top-[-0.5rem] left-4 px-2 bg-blue-950'>Point 2</label>
                    <input type='text' name="price" id='price' className='w-full h-full rounded-lg bg-transparent border-white border-2' />
                </div>
                    <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'>POST</button>
            </div>
        </div>
        </Form>
    )
}
