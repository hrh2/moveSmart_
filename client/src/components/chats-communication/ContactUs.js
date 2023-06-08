import React from 'react'
import Questions from './questions'
import Feedback from './feedback'
import { FaRegUserCircle } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md'
import { BsInstagram, BsTwitter } from 'react-icons/bs';

export default function ContactUs() {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <h1 className='Chat-h1 px-1 my-2'>GOT ANY QUESTION</h1>
      </div>
      <div className='container'>
        <h1 className='Chat-h1-2 px-2 float-end'>Our Chatbot is ready to help</h1>
      </div>
      <div className='container' style={{ position: 'relative' }}>
        <form class="was-validated my-5">
          <span className=''><FaRegUserCircle size="2.5em" /> <span className='fw-bold'>User</span></span>
          <div class="my-1" style={{ position: 'relative' }}>
            <label for="validationTextarea" class="form-label"></label>
            <div style={{ position: 'relative' }}>
              <input 
                class="form-control message-input" 
              id="validationTextarea" 
              placeholder="Type the message" 
              required>
              </input>
              <button 
              type="submit" 
              className='p-2 border-0 bg-white bg-opacity-10' 
              style={{ position: 'absolute', bottom: '1em', right: '1em' }}>
              <GrSend 
              size="2.2em" 
              />
              </button>
            </div>
          </div>
        </form>
      </div>
      <Questions/>
      <Feedback/>
      <div className='container'>
        <h1 className='Chat-h1 px-1'>Reach out to us via our PlatForms</h1>
        <div className='container fw-bold py-5 row'>
          <div className='col'>
            <a href='-' className='a text-decoration-none'><MdEmail size="2em"/> movesmart@gmail.com</a>
          </div>
          <div className='col'>
            <a href='-' className='a text-decoration-none'><BsTwitter size="2em" />moveSmart_Rwanda</a>
          </div>
          <div className='col'>
            <a href='-' className='a text-decoration-none'><BsInstagram size="2em" />move_smart</a>
          </div>
        </div>
      </div>
    </div>
  )
}

