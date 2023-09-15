import React,{useState} from 'react'
import Axios from 'axios'
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Dropzone from "react-dropzone";
import {FaPlus} from "react-icons/fa"
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";

export default function AddStation() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        name: '',
        commonName: '',
        location:'',
        stationDescription: '',
        images:[],
    });
    const [imageArray, setImageSrcArray] = useState([null, null, null,null]);
    const handleDrop = (index, acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
          const updatedArray = [...imageArray];
          updatedArray[index] = event.target.result;
          setImageSrcArray(updatedArray);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
      const renderImageUploader = (index) => {
        const divStyles = {
          backgroundImage: `url(${imageArray[index]})`,
        };
    
        return (
          <div key={index} className={`mx-auto  w-[8rem] aspect-square`} >
            <Dropzone onDrop={(acceptedFiles) => handleDrop(index, acceptedFiles)} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="w-full h-full rounded-lg bg-cover bg-center bg-white text-center flex items-center"
                  style={divStyles}
                >
                  <input {...getInputProps()} />
                  {imageArray[index] ? null : (
                    <p className="text-black text-center w-full grid grid-flow-row">
                      <FaPlus size={25} className="mx-auto text-slate-500" />
                    </p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
        );
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        try {
            data.images=imageArray
            const response = await Axios.post('http://localhost:3050/api/station', data);
            setMessage(response.data.msg)
            const token=localStorage.getItem('token');
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
             window.location = "/station/allStations";
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.msg);
            } else {
                setError(error.response.data.msg);;
            }
        }
    };
    
  return (
    <Form  className='py-2' onSubmit={handleSubmit}>
      <Box className='text-center h-auto relative rounded-md py-3' m="20px" color={colors.grey[100]} backgroundColor={colors.primary[400]}>
          <h2 className='py-4 font-bold'>ADD new Station</h2>
          
          <Box className='grid grid-flow-row gap-2'>
                  {error&&<Alert variant="success" className='text-xs '>{message}</Alert>}
              <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
              <label for="name" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Name</label>
                  <input 
                  type='text' 
                  name="name" 
                  value={data.name}
                  id='name' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} />
              </Box>
              <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
              <label for="common" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Common known Name</label>
                  <input 
                  type='text' 
                  name="commonName" 
                  value={data.commonName}
                  id='common' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} />
              </Box>
              <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                  <label for="location" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >location</label>
                  <input 
                  type='text' 
                  name="location" 
                  value={data.location}
                  onChange={handleChange}
                  id='location' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}} />
              </Box>
              <Box className="md:flex grid grid-cols-2 gap-2">
                    {renderImageUploader(0)} {/* Render the second image as half */}
                    {renderImageUploader(1)} {/* Render the third image as half */}
                    {renderImageUploader(2)} {/* Render the third image as half */}
                    {renderImageUploader(3)} {/* Render the third image as half */}
              </Box>
              <Box className=' mx-auto w-5/6 relative my-3'>
              <label for="description" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Description</label>
                  <textarea 
                  type="text"
                  name="stationDescription"
                  value={data.stationDescription} 
                  onChange={handleChange}
                  rows="4" 
                  id='description' 
                  className='w-full rounded-lg bg-transparent  border-2 p-4'
                  style={{borderColor:`${colors.grey[100]}`}}></textarea>
              </Box>
              <button type="submit" className='mx-auto p-2 px-5  rounded-md'  
              style={{backgroundColor:`${colors.blueAccent[500]}`}}>POST</button>
          </Box>
      </Box>
      </Form>
  )
}
