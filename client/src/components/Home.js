import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import React from 'react';
import Navbar from './Navbar';
import SideBar from './Sidebar';
import BookForm from './BookingForm';
//import Test from './test';
const Home = () => {
     return (
        <div className='container-fluid vh-100 w-100'>
          <div className='row'>
               <div className='SideBar_container  col-2 bg-info vh-100'>
                <SideBar/>
               </div>
               <div className='Content_container col bg-white'>
                <Navbar/>
                <BookForm/>
               </div>
          </div>
        </div>
     );
};

export default Home;
