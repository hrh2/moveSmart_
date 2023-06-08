import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../img/logo.png'
import {FaHome} from 'react-icons/fa'
import{RiDashboardFill} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'

export default function SideBar() {
     return (
          <div className="sidebarPr container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
               <img src={logo1} alt="logo" className="mx-auto Logo" style={{ position: 'absolute', top: '.1em' }} />
               <Link to="/userProfile" className="btn btn-lg text-white fw-bold active py-3 border-0">
                    <FaHome size="2em" className=' hover:text-sky-900 '/>
               </Link>
               <Link to="/userProfile" className="btn btn-lg text-white fw-bold py-3 border-0">
                    <RiDashboardFill size="2em" className='hover:text-sky-900 '/>
               </Link>
               <Link to="/userProfile" className="btn btn-lg text-warning fw-bold py-3 border-0" style={{position:'absolute',bottom:".1em"}}>
                <p>logout</p>
                    <FiLogOut size="2em" className='hover:text-sky-900 '/>
               </Link>
          </div>
     );
}
