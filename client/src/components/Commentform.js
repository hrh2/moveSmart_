import React from 'react'

export default function Commentform() {
  return (
    <form className='md:text-base sm:text-sm text-xs bg-slate-300 bg-opacity-30 py-2'>
        <h2 className='w-5/6 text-right border-r-4 py-2 px-2 mb-3 mx-auto'>Any Comment?</h2>
        <div className='mx-auto flex'>
            <textarea type="text" name = "comment" placeholder=' '  className='mx-auto p-1 md:w-3/5 sm:w-4/5 w-5/6 py-2 md:h-[4rem] sm:h-[2.5rem] bg-white border-0 rounded-xl text-black'></textarea>
        </div>
    </form>
  )
}
