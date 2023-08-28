import React,{useState} from 'react'
import Axios from 'axios';
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";

export default function AddStation() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState({
        plate: '',
        price: '',
        sits: '',
        time: '',
        point1:'',
        point2: null,
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
            const response = await Axios.post('http://localhost:3050/api/bus', data);
            setMessage(response.data.msg)
            const token = localStorage.getItem('token');
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            window.location = "/station";
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.msg);
            } else {
                setError(error.response.data.msg);
            }
        }
    };
    return (
        <Form onSubmit={handleSubmit}>
        <Box className='text-center p-2 rounded-md' m="20px" color={colors.grey[100]} backgroundColor={colors.primary[400]} >
            <h2 className='py-4 font-bold'>Add a Bus</h2>
            <Box className='grid grid-flow-row gap-2'>
                {error && <Alert variant="danger" className='text-xs w-4/6 mx-auto'>{error}</Alert>}
                {message && <Alert variant="success" className='text-xs'>{message}</Alert>}
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label for="plate" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Plate No</label>
                    <input 
                    type='text' 
                    name="plate" 
                    id='plate' 
                    className='w-full h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.plate}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label for="price" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Price</label>
                    <input 
                    type='number' 
                    name="price" 
                    id='price' 
                    className='w-full h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.price}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label for="sits" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Exposed Sits</label>
                    <input 
                    type='number' 
                    name="sits" 
                    id='sits' 
                    className='w-full h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.sits}
                    onChange={handleChange} />
                </Box>
                    <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label for="time" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Normal starting time</label>
                        <input 
                        type='time' 
                        name="time" 
                        id='time' 
                        className='w-full h-full rounded-lg bg-transparent border-2'
                        style={{borderColor:`${colors.grey[100]}`}}
                        value={data.time}
                        onChange={handleChange} />
                    </Box>
                <h4 className=' text-xs'>Destination Points(Operation stations)</h4>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label for="point1" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Point 1</label>
                    <input 
                    type='text' 
                    name="point1" 
                    id='point1' 
                    className='w-full h-full rounded-lg bg-transparent  border-2' 
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.point1}
                    onChange={handleChange}/>
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label for="point2" className='absolute top-[-0.5rem] left-4 px-2'
                     style={{backgroundColor:`${colors.primary[400]}`}}
                    >Point 2</label>
                    <input 
                    type='text' 
                    name="point2" 
                    id='point2' 
                    className='w-full h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.point2}
                    onChange={handleChange} />
                </Box>
                    <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'
                    style={{backgroundColor:`${colors.blueAccent[500]}`}}>POST</button>
            </Box>
        </Box>
        </Form>
    )
}
