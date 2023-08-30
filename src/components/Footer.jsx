import React from 'react'
import Logo from '../assets/logo_imagen.png'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white pb-[8rem]'>
        <div className='max-w-[1100px] flex mx-auto relative pb-[10rem]'>

            <div className='pt-9 ml-3 w-[10rem]'>
                <h1 className='text-[24px] font-bold' >Abstract</h1>
                <ul className='mt-7'>
                    <li className='py-1 hover:underline'><a href="/">Start Trial</a></li>
                    <li className='py-1 hover:underline'><a href="/">Pricing</a></li>
                    <li className='py-1 hover:underline'><a href="/">Download</a></li>
                </ul>
            </div>

            <div className='pt-9 ml-3 w-[10rem]'>
                <h1 className='text-[24px] font-bold' >Resources</h1>
                <ul className='mt-7'>
                    <li className='py-1 hover:underline'><a href="/">Blog</a></li>
                    <li className='py-1 hover:underline'><a href="/">Help Center</a></li>
                    <li className='py-1 hover:underline'><a href="/">Release Notes</a></li>
                    <li className='py-1 hover:underline'><a href="/">Status</a></li>
                </ul>
            </div>

            <div className='pt-9 ml-3 w-[10rem]'>
                <h1 className='text-[24px] font-bold' >Community</h1>
                <ul className='mt-7'>
                    <li className='py-1 hover:underline'><a href="/">Twitter</a></li>
                    <li className='py-1 hover:underline'><a href="/">Linkedln</a></li>
                    <li className='py-1 hover:underline'><a href="/">Facebook</a></li>
                    <li className='py-1 hover:underline'><a href="/">Dribbble</a></li>
                    <li className='py-1 hover:underline'><a href="/">Podcast</a></li>
                </ul>
            </div>

            <div className='pt-9 ml-3 w-[10rem]'>
                <h1 className='text-[24px] font-bold' >Company</h1>
                <ul className='mt-7'>
                    <li className='py-1 hover:underline'><a href="/">About Us</a></li>
                    <li className='py-1 hover:underline'><a href="/">Careers</a></li>
                    <li className='py-1 hover:underline'><a href="/">Legal</a></li>
                </ul>
                <h3 className='mt-4 font-bold'>Contact Us</h3>
                <p>info@abstract.com</p>
            </div>


            <div className='absolute right-0 bottom-0'>
                <img src={Logo} className='pb-4' />
                <h4 className='font-bold'>Copyright 2023</h4>
                <h4 className='font-bold'>Abstract Studio Design, Inc</h4>
                <h4 className='font-bold'>All rights reversed</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer