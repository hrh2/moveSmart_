import React,{useState,useEffect} from 'react'
import Axios from 'axios'

import StationCard from './StationCard'
import {FaDownload} from 'react-icons/fa'
import StationTableRow from './StationTableRow'

export default function AllStations() {
  const [showMore,setShowMore] =useState(true)
  const toggleMoreInfo=()=>{
     setShowMore(!showMore);
  }

  const [data, setData] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const token = await localStorage.getItem("token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('http://localhost:3050/api/station');
        setData(response.data)
        console.log(`these are data ${data}`)
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
    <div className='text-white text-center relative px-3'>
        <h5 className=' font-extrabold py-3'>Stations</h5>
      {showMore ? <button onClick={toggleMoreInfo} className='text-xs absolute right-6 top-8 flex'>see short Details</button>:
        <div className='absolute right-6 top-4 flex gap-2'>
          <button className='text-xs' onClick={toggleMoreInfo}>see more</button>
          <a href='/' className='py-2'><FaDownload size={20} /></a>
        </div>
        }
        {showMore &&<div className=' grid grid-flow-row gap-2 p-2'>
        {data.map(({_id, name, location, numberOfDestinations, stationDescription,images },index)=>(
            <StationCard key={index} name={name} location={location} numODest={numberOfDestinations} image={images} desc={stationDescription} id={_id}/>
          ))}
        </div>}
      {!showMore && <table className=' md:text-sm sm:text-xs text-[.7rem] table bg-white  table-bordered table-hover text-center  rounded-md'>
        <tr className=''>
          <th>No</th>
          <th>Station</th>
          <th>location</th>
          <th>No of Destination</th>
        </tr>
        {data.map(({ _id, name, location, numberOfDestinations, stationDescription, images }, index) => (
          <StationTableRow key={index+1} name={name} location={location} numODest={numberOfDestinations} image={images} desc={stationDescription} id={_id} />
        ))}
      </table>}
    </div>
  )
}
