import React from 'react'
import SideBar from '../layout/Pr_Sidebar'
import Footer from '../layout/Footer'

export default function Main() {
  return (
    <div>
      <div className='container-fluid p-0'>
        <div className='col-1 d-sm-none'>
          <SideBar/>
        </div>
        <div className='col-11'>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
