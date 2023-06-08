import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlineDislike } from 'react-icons/ai'
export default function Feedback() {
  return (
       <div className='container ' style={{ position: 'relative' }}>
            <h1 className='Chat-h1 px-1'>Feedback and reviews</h1>
            <form class=" my-3">
                 <div class="my-1" style={{ position: 'relative' }}>
                      <label for="validationTextarea" class="form-label"></label>
                      <div style={{ position: 'relative' }}>
                           <input type="text"
                                class="form-control feedback-input"
                                id="validationTextarea"
                                placeholder=""
                                required>
                           </input>
                           <button
                                type="submit"
                                className='px-3  py-1 border-0 book-btn'
                                style={{ position: 'absolute', bottom: '.5em', right: '4em' }}>
                                send
                           </button>
                           <button
                                type="button"
                                className='p-2 border-0 bg-white bg-opacity-10'
                                style={{ position: 'absolute', top: '0', left: '8em' }}>
                                <AiOutlineDislike size="2em" class="custom-icon" />
                           </button>
                           <button
                                type="button"
                                className='p-2 border-0 bg-white bg-opacity-10'
                                style={{ position: 'absolute', top: '0', left: '5em' }}>
                                <AiOutlineLike size="2em" />
                           </button>
                      </div>
                 </div>
            </form>
       </div>
  )
}
