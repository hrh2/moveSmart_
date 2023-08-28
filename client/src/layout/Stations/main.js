import React, { useEffect,useState} from 'react';
import TopBar from '../../scenes/global/TopBar'
import SideBar from '../../scenes/global/SideBar';
// eslint-disable-next-line 
import { useLocation,Outlet } from "react-router-dom";
import Axios from 'axios'
// eslint-disable-next-line 
import AddingStation from '../../scenes/dashboard/addStation'
// eslint-disable-next-line 
import StationLinks from '../../scenes/dashboard/StationLinks'
// eslint-disable-next-line 
import BusDetails from '../../scenes/dashboard/BusDetails'
// eslint-disable-next-line 
import UserGraph from '../../scenes/dashboard/UserbilityGraph'
// import Sidebar from '../../scenes/global/SideBar'



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
      <main className='content'>
      <TopBar setIsSidebar={setIsSidebar} />

      <Outlet/>
      </main>
   </div>
  )
}
