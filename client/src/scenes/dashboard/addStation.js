import React,{useState} from 'react'
import Axios from 'axios'
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";

export default function AddStation() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState({
        name: '',
        commonName: '',
        location:'',
        stationDescription: '',
        imageOne:null,
        imageTwo:null,
        imageThree:null,
    });

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        try {
            const response = await Axios.post('http://localhost:3050/api/station', data);
            setMessage(response.data.msg)
            const token=localStorage.getItem('token');
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            // window.location = "/";
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.msg);
            } else {
                setError(error.response.data.msg);;
            }
        }
    };
    const convertToBase64=(file)=>{
        let reader = new FileReader();
        reader.readAsDataURL(file.target.files[0]);
        reader.onload = (result) => {
            // console.log(reader.result);
            setData({ ...data, imageOne: reader.result });
        }
        reader.onerror = () => { setError(reader.result); }
    }
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
              <Box class="mx-auto w-5/6 grid grid-flow-row gap-1">
                    <label for="profile-pic" class="form-label">Station Profiles </label>
                    <input class="form-control bg-transparent" style={{borderColor:`${colors.grey[100]}`}} type="file" name='imageOne' accept="image/" id="profile-pic" onChange={convertToBase64}></input>
                    <input class="form-control bg-transparent" style={{borderColor:`${colors.grey[100]}`}} type="file" name='imageTwo' accept="image/" id="profile-pic" onChange={convertToBase64}></input>
                    <input class="form-control bg-transparent" style={{borderColor:`${colors.grey[100]}`}} type="file" name='imageThree' accept="image/" id="profile-pic" onChange={convertToBase64}></input>
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
