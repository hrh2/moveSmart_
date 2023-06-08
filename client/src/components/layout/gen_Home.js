import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import SideBar from './gen_Sidebar';
import { HiMenu } from 'react-icons/hi';
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
     const [showSidebar, setShowSidebar] = useState(false);
     const toggleSidebar = () => {
          setShowSidebar(!showSidebar);
     };

     const location = useLocation();
     const currentPath = location.pathname;

     return (
          <div className="container-fluid row m-0 p-0 ">
               <div className="col-md-2 container-fluid p-0 m-0 d-none d-md-block">
                    <SideBar />
               </div>
               <div className="Main col-md-10 container-fluid p-0 m-0">
                    <div className="nav container-Fluid nav-tabs p-0 m-0">
                         <span className={`nav-item book-a fw-bolder border-0 ${currentPath === '/' ? 'active' : ''}`}>
                             {currentPath === '/' ? 'Home' :currentPath}
                         </span>
                         <span className="Menu-btn nav-item d-md-none ms-auto px-2 px-md-5">
                              <HiMenu size="2em" className="text-white" onClick={toggleSidebar} />
                         </span>
                    </div>
                    <div className="container-fluid p-2">
                         <Outlet />
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
