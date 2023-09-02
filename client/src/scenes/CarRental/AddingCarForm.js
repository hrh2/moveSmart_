import React,{useState} from 'react'
import Axios from 'axios';
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";

export default function Form() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
      <form className='w-full grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 text-teal-50 md:text-base sm:text-sm text-xs '>
        <Box className='border-white md:border-r-2 sm:border-r-2 py-4 px-3' >
              <Box className=' grid grid-cols-1 gap-4 p-4'>
                  <input type="file" name="Photo" placeholder='Upload Photo' id='file' className='' />
                  <Box>
                      <input type="file" name="Photo" placeholder='Upload Photo' className='' />
                      <input type="file" name="Photo" placeholder='Upload Photo' className='' />
                  </Box>
              </Box>
              <Box className='text-center py-4 rounded-lg' backgroundColor={colors.primary[400]}>
                  <h2 className='py-4 font-bold'>SPECIFICATION</h2>
                  <Box className='grid grid-flow-row gap-2'>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="tyre" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Tyres</label>
                          <input type='number' name="tyres" id='tyre' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="seats" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Seats</label>
                          <input type='number' name="seats" id='seats' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="price" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Price</label>
                          <input type='text' name="price" id='price' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="color" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Color</label>
                          <input type='text' name="color" id='color' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="use" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Use</label>
                          <input type='text' name="use" id='use' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                  </Box>
              </Box>
        </Box>
        <Box>
            <h1 className='text-center font-extrabold py-3'>WHERE TO FIND</h1>
            <Box className='grid grid-cols-1 text-center'>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label for="name" className='col-span-2'>Name:</label>
                      <input type="text" name="name" id='name' className='col-span-3 p-2 rounded-lg text-black' />
                </Box>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label for="street" className='col-span-2'>Street(optional)</label>
                      <input type="address" name="street" id='street' className='col-span-3 p-2 rounded-lg text-black' />
                </Box>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                    <label for="description" className='col-span-2'>Description:</label>
                    <textarea name="description" id='description' rows={3}  className='col-span-3 p-2 rounded-lg text-black'></textarea>
                </Box>
            </Box>
            <Box className=''>
                <h1 className='text-center py-2'>Discount (Optional) </h1>
                <Box className='grid grid-flow-row'>
                    <Box className='grid grid-cols-3 gap-4 p-4'>
                        <input type="number" className=" p-2 rounded-lg text-black" placeholder="..%"/>
                        <input type="text" className="p-2 rounded-lg col-span-2 text-black" placeholder="description"/>
                    </Box>
                </Box>
            </Box>
            <Box className='p-2 grid grid-cols-3'>
                <p>Will You Proovide Drive</p>
                <Box className=' col-span-2 grid grid-cols-2 p-3 gap-2'>
                    <Box className='bg-blue-500 relative p-1 rounded-lg'>
                        <label for="yes" className='absolute w-full h-full px-4'>Yes</label>
                        <input type="radio" className="px-2" name="driverP" id='yes' value="yes" />
                    </Box>
                      <Box className='bg-blue-500 relative p-1 rounded-lg'>
                          <label for="no" className='absolute w-full h-full px-4'>No</label>
                          <input type="radio" className="px-2" name="driverP" id='no' value="no" />
                      </Box>
                </Box>
            </Box>
            <Box className='w-full py-3 flex'>
                  <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'>POST</button>
            </Box>
        </Box>
    </form>
  )
}
