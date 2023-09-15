import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";

import {FaCloudUploadAlt,FaPlus} from "react-icons/fa"

const ImageUploader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [imageSrc, setImageSrc] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const imageDivStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "10rem", // Adjust the width and height as needed
    height: "10rem",
  };

  return (
    <form className=" p-2 md:w-4/5 w-full  mx-auto">
      <div className="mx-auto w-[10rem] aspect-square">
        <Dropzone onDrop={handleDrop} accept="image/*" >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="w-full h-full rounded-full relative bg-white text-center flex items-center"
              style={imageDivStyle}
            >
              <input {...getInputProps()} />
              {imageSrc ? null : (
                <p className="text-black text-center w-full grid grid-flow-row">
                    <FaCloudUploadAlt size={30} className="mx-auto"/>
                   <span className="italic">Drop or Tap to upload</span>
                   
                </p>
              )}<FaPlus size={25} className=" absolute bottom-3 right-2 text-slate-500"/>
              <FaPlus size={25} className=" absolute bottom-3 right-2 text-slate-500"/>
            </div>
          )}
        </Dropzone>
      </div>
      <div>
      <Box className='text-center py-4 rounded-lg mt-4' backgroundColor={colors.primary[400]}>
                  <h2 className='py-4 font-bold'>Personal</h2>
                  <Box className='grid grid-flow-row gap-2'>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="name" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Name</label>
                          <input type='text' name="name" id='name' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="email" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Email</label>
                          <input type='email' name="email" id='email' className='w-full h-full rounded-lg bg-transparent  border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="phone" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Phone</label>
                          <input type='number' name="phone" id='phone' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="Card" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Card</label>
                          <input type='text' name="Card" id='Card' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label for="confirmPassword" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Confirm Password</label>
                          <input type='passsword' name="confirmPassword" id='confirmPassword' className='w-full h-full rounded-lg bg-transparent border-2' />
                      </Box>
                      <Box className=' mx-auto w-5/6 flex justify-center  my-3'>
                         <button type="submit" className="py-3 px-9 bg-blue-500 rounded-lg font-bold">Update</button>
                      </Box>
                  </Box>
        </Box>
      </div>
    </form>
  );
};

export default ImageUploader;
