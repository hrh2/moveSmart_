import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import BusTableRow from './BusTableRow'


export default function AllBus() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const token = await localStorage.getItem("token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('http://localhost:3050/api/bus');
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
  }, [])
  return (
    <div className=' text-center text-white p-3'>
      <h5 className=' font-extrabold py-3'>All Bus</h5>
        <table className='md:text-sm sm:text-xs text-[.7rem] table bg-white  table-bordered table-hover text-center  rounded-md'>
            <tr className=''>
                  <th rowSpan={2}>Plate No</th>
                  <th rowSpan={2}>Price</th>
                  <th colSpan={2}>Operating routes</th>
                  <th></th>
                  <th></th>
            </tr>
            <tr>
                  <th >location 1</th>
                  <th >location 2</th>
                  <th>-</th>
                  <th>-</th>
            </tr>
        {data.map(({ _id, plate, price, point1, point2, images }, index) => (
          <BusTableRow key={index + 1} plate={plate} price={price} point1={point1.stationName} image={images} point2={point2.stationName} id={_id} />
        ))}
        </table>
    </div>
  )
}
