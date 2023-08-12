import React, { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Axios from 'axios'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import BookForm from '../../components/BookingForm'
import Details from '../../components/Details';
import Footer from '../../components/Footer';

const Home = () => {
    const [data,setData]=useState({})
    // eslint-disable-next-line 
    const [error,setError]=useState('')
    useEffect(()=>{
       async function fetchData(){
           try {
               const token =await localStorage.getItem("token");
               Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
               const response = await Axios.get('http://localhost:3050/api/home');
               setData(response.data)
               console.log(response.data)
           } catch (error) {
               console.error(error);
               if (
                   error.response &&
                   error.response.status >= 400 &&
                   error.response.status <= 500
               ) {
                   setError(error.response.data.message);
               }
           }
       }
      fetchData()
    },[])
    const location = useLocation();
    // eslint-disable-next-line
    const currentPath = location.pathname;
    return (
        <div className=' min-h-screen bg-blue-950 w-full'>
            <Header image={data.userImage}/>
            <Navbar tickets={data.tickets}/>
            <BookForm />
            <Details />
            <Footer/>
        </div>
    );
};

export default Home;
