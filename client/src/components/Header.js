import React from 'react'
import Logo from '../img/logo.png'
import Image from '../img/prof.jpg'
import { FaBell} from 'react-icons/fa'

export default function Header() {
  return (
    <div className=' h-16 bg-blue-950 w-full p-2 relative'>
        <div className=' aspect-square w-12 bg-cover bg-center'
        style={{backgroundImage:`url(${Logo})`}}
        ></div>
        <div className='grid grid-cols-2 gap-2  text-white  w-24 absolute right-4 top-3'>
          <FaBell size={30}/>
        <a href='/userProfile' className=' aspect-square w-10 bg-cover border-white border shadow-lg bg-center rounded-full'
          style={{ backgroundImage: `url(${Image})` }}
        > </a>
        </div>
    </div>
  )
}
