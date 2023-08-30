import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full h-[400px] bg-[#dadbf1]'>
        <h1 className='pb-8 md:text-7xl sm:text-6xl text-5xl'>How can we help?</h1>
        <div className='md:w-[60%] sm:w-[90%]  h-[10%] relative'>
            <input type="text" className='w-full h-full  p-[2rem] border-black border rounded-md placeholder:text-black text-[1.3rem]'  placeholder='Search' />
            <AiOutlineArrowRight size={25} className='absolute top-[1.3rem] right-4' />
        </div>
    </div>
  )
}

export default Hero