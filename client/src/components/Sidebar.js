import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
export default function SideBar() {
     return (
          <div className="sidebar container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
               <a href="-" className="btn btn-lg text-white fw-bold active py-2 border-0">HOME</a>
               <hr className="w-75 m-1" />
               <a href="-" className="btn btn-lg  text-white fw-bold py-2 border-0">Contact Us</a>
          </div>
     )
}

