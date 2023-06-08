import React from 'react'

export default function Products() {
  return (
    <div className='container-fluid p-0'>
      <ul className=''>
        <li className='list-item'>
            <div className='container row d-flex justify-content-center align-items-center'>
                <div>
                    {/* image */}
                </div>
                <div className=''>
                    <p></p>
                    {/* ratings */}
                </div>
                <div className=''>
                    Edit
                </div>
                <div>
                    Delete
                </div>
            </div>
        </li>
      </ul>
    </div>
  )
}
