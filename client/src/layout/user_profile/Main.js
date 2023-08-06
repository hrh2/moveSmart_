import React from 'react'
import Footer from '../../components/Footer'
import Profile from '../../components/profile_discription'
import Products from '../../components/products'

export default function Main() {
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
