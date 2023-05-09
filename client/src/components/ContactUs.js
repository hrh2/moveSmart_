import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';

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
              <textarea class="form-control" id="validationTextarea" placeholder="Type the message" required></textarea>
              <button type="submit" className='p-2 border-0 bg-white bg-opacity-10' style={{ position: 'absolute', bottom: '1em', right: '1em' }}><GrSend size="2.2em" /></button>
            </div>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
        </form>
      </div>
      <div className='container'>
        <h1 className='Chat-h1 px-1'>Reach out to us via our PlatForms</h1>
      </div>
    </div>
  )
}

