import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link } from 'react-router-dom';

export default function SideBar() {
     return (
          <div className="sidebar container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
               <Link to="/" className="btn btn-lg text-white fw-bold active py-2 border-0">
                    HOME
               </Link>
               <hr className="w-75 m-1" />
               <Link to="/ContactUs" className="btn btn-lg text-white fw-bold py-2 border-0">
                    Contact Us
               </Link>
          </div>
     );
}
