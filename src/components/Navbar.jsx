import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(true)

    function handleNav(){
        setNav(!nav)
    }


  return (
    <div className='bg-[#000000] h-24 mx-auto w-full text-white flex items-center justify-between md:px-20 px-6'>
        <div className="flex items-center h-full">
        <img src={Logo} alt="Logo" />
        <h1 className='border-l-[2px] font-bold pl-2 text-[1.2rem]'>Help Center</h1>
        </div>
        <ul className='hidden md:flex items-center text-white'>
            <li className='mr-4 border rounded-md py-2 px-3 text-[22px] bg-gray-950'><a href="/">Submit a Request</a></li>
            <li className='py-2 px-5 text-[22px] bg-[#4C5FD5] rounded-md hover:bg-white hover:text-black duration-200'><a href="/">Sign in</a></li>
        </ul>
        <div onClick={handleNav} className='flex md:hidden'>
        {!nav ?  <AiOutlineSearch size={25} className='mr-2' /> : ''}
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className={!nav ? 'fixed top-24 left-0 w-full h-[120px] md:hidden bg-[#191a1b] border-t border-t-[rgba(255,255,255,.5)] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='flex flex-col justify-center items-center h-full text-center'>
                <li className='border-b border-b-[rgba(255,255,255,.5)] w-[60%] py-3 text-2xl'><a href="/">Submit a Request</a></li>
                <li className='py-3 text-2xl'><a href="/">Sign in</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar