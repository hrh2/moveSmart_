import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'
export default function Navbar() {
  return (
      <ul class="nav nav-tabs border-bottom-0 pt-3">
          <li class="nav-item">
               <a class="book-a nav-link fw-bolder  border-0 active" aria-current="page" href="-">Book a car</a>
          </li>
          <li class="nav-item">
                 <a class="nav-link fw-bolder border-0" aria-current="page" href="-">Link</a>
          </li>
          <li class="nav-item">
                 <a class="nav-link fw-bolder border-0" aria-current="page" href='-'>Link</a>
          </li>
     </ul>
  )
}

