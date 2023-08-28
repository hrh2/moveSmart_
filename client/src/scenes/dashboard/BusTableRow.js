 import React from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { BsFillPenFill } from 'react-icons/bs';
 export default function BusTableRow(props) {
   return (
       <tr>
           <td>{props.plate}</td>
           <td>{props.price} Frw</td>
           <td>{props.point1}</td>
           <td>{props.point2}</td>
           <td><BsFillPenFill size={32} className='border-0' /></td>
           <td><RiDeleteBin2Fill size={35} className='border-0 text-rose-700' /></td>
       </tr>
   )
 }
 