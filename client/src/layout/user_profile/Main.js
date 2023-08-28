import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Footer from '../../components/Footer'
import Profile from '../../components/profile_discription'
import Products from '../../components/products'

export default function Main() {
  const [data, setData] = useState({})
  // eslint-disable-next-line 
  const [error, setError] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const token = await localStorage.getItem("token");
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
  }, [])
  return (
    <div>
      <div className='container-fluid p-0 bg-indigo-950'>
        <div>
          <Profile/>
          <Products/>
        </div>
        <div className='col-11'>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
