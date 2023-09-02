import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import SideBar from '../../scenes/CarRental/Sidebar';
import { Outlet } from'react-router-dom';

import Footer from '../../components/Footer';


export default function Main() {
  // eslint-disable-next-line 
  const [isSidebar, setIsSidebar] = useState(true);
  // eslint-disable-next-line 
  const [data, setData] = useState({})
  // eslint-disable-next-line 
  const [error, setError] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const token =localStorage.getItem("token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        
        const response = await Axios.get('http://localhost:3050/api/station/dashboard');
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
  
  return (
   <div className='app'>
    <SideBar isSidebar={isSidebar}/>
      <main className='content min-h-screen h-auto relative'>
        <Outlet/>
       <Footer/>
      </main>
   </div>
  )
}
