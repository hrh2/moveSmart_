import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='Footer container-fluid bg-slate-950'>
      <div className='container-fluid d-flex justify-content-center align-items-center'>
        <div className='col-3 py-2'>
          <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' src={logo} alt='logo' />
          <p className='text-indigo-700'>
            “Transportation should be a convenient, stress-free experience for everyone.”
          </p>
        </div>
        <div className='col-2'>
          <h3 className='text-yellow-400'>MoveSmart</h3>
          <p>
            <Link to='/userProfile' className='text-white'>
              Home
            </Link>
          </p>
          <p>
            <Link to='/userProfile' className='text-white'>
              About Us
            </Link>
          </p>
          <p>
            <Link to='/userProfile' className='text-white'>
              Contact Us
            </Link>
          </p>
        </div>
        <div className='col-2'>
          <h3 className='text-yellow-400'>Help</h3>
          <p>
            <Link to='/userProfile' className='text-white'>
              ChatBot
            </Link>
          </p>
          <p>
            <Link to='/ContactUs' className='text-white'>
              Contact Us
            </Link>
          </p>
        </div>
        <div className='col-2'>
          <h3 className='text-yellow-400'>Account</h3>
          <p>
            <Link to='/userProfile' className='text-white'>
              Switch Account
            </Link>
          </p>
          <p>
            <Link to='/userProfile' className='text-white'>
              Forgot password
            </Link>
          </p>
        </div>
        <div className='col-3'>
          <h3 className='text-yellow-400'>Get our app</h3>
          <p>
            <Link to='/userProfile' className='text-white'>
               Google play
            </Link>
          </p>
          <p>
            <Link to='/userProfile' className='text-white'>
              App store
            </Link>
          </p>
        </div>
      </div>
      <hr />
      <div className='row container-fuid py-2'>
        <div className='col-8'>
          <div className='row'>
            <Link to='/userProfile' className='col text-white border-r-2 border-white px-2 py-2'>
              Terms and Privacy Policy
            </Link>
            <span className='col text-white row'>
              <FaRegCopyright
                size='1.5em'
                className='col-1'
              />
              MoveSmart2023.All right reserved
            </span>
          </div>
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
}
