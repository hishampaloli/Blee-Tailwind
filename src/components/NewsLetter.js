import React from 'react'
import {newsletterH1,newsletterP1} from '../constants/constants'

const NewsLetter = () => {
  return (
    <div className='w-full max-w-[1440px] p-10 flex flex-col items-center bg-[#f6f9ff]'>
        <h1 className='text-2xl font-medium text-[#012970]'>{newsletterH1}</h1>
        <p className='text-[#444444] mt-3'>{newsletterP1}</p>
        <div>
            <input className='p-3 w-[300px]' type="text" name="" id="" />
            <button className='p-3 bg-[#4154f1] text-white px-10 py-3 rounded-sm mt-6 shadow-xl mt-4'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter