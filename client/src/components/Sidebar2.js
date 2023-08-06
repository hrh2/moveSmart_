import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../img/logo.png'
import { FaHome } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'

export default function SideBar() {
    return (
        <div className="bg-blue-950 md:w-[5%] sm:w-[8%] w-[15%] border-r-2 border-blue-700 flex flex-column justify-content-center align-items-center  min-h-screen fixed top-0 left-0 z-10">
            <img src={logo1} alt="logo" className="aspect-square w-3/4" style={{ position: 'absolute', top: '.1em' }} />
            <Link to="/" className="btn btn-lg text-white fw-bold active py-3 border-0">
                <FaHome size={30} className=' hover:text-sky-900 ' />
            </Link>
            <Link to="/userProfile" className="btn btn-lg text-white fw-bold py-3 border-0">
                <RiDashboardFill size={30} className='hover:text-sky-900 ' />
            </Link>
            <Link to="/" className="btn btn-lg text-warning fw-bold py-3 border-0" style={{ position: 'absolute', bottom: ".1em" }}>
                <p className='sm:text-[.7em] text-[.5em]'>logout</p>
                <FiLogOut size={30} className='hover:text-sky-900 ' />
            </Link>
        </div>
    );
}
