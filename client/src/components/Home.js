import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import SideBar from './Sidebar';
import BookForm from './BookingForm';
import History from './history';
import { HiMenu } from 'react-icons/hi';

const Home = () => {
     const [showSidebar, setShowSidebar] = useState(false);

     const toggleSidebar = () => {
          setShowSidebar(!showSidebar);
     };

     return (
          <div className="container-fluid row m-0 p-0">
               <div className="col-md-2 container-fluid p-0 m-0 d-none d-md-block">
                    <SideBar />
               </div>
               <div className="col-md-10 container-fluid p-0 m-0">
                    <div className="nav container-Fluid nav-tabs p-0 m-0">
                         <span className="nav-item">
                              <a className="book-a nav-link fw-bolder border-0 active text-truncate"
                                 aria-current="page"
                                 href="hope"
                              >Book a car</a>
                         </span>
                         <span className="Menu-btn nav-item d-md-none ms-auto px-2 px-md-5">
                              <HiMenu size="2em"className="text-white" onClick={toggleSidebar}/>
                         </span>
                    </div>
                    <div className="container-fluid p-2">
                         <BookForm />
                    </div>
                    <div className="container-fluid">
                         <History />
                    </div>
               </div>
               {showSidebar && (
                    <div
                         className="col-md-5 container-fluid w-50 p-0 m-0 d-md-none position-absolute"
                         style={{ top: 0, left: 0, height: '100vh', zIndex: 999 }}
                    >
                         <SideBar />
                    </div>
               )}
          </div>
     );
};

export default Home;
