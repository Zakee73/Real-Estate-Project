import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
 <div className='pt-10 px-4 w-full md:px-20 lg:px-32 bg-gray-900 overflow-hidden ' id='Footer'> 
  <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
<div className='w-full md:w-1/3 mb-8 md:mb-0'>
  <img src={assets.logo_dark} alt="" />
<p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto nostrum ipsa consequuntur unde similique. Laudantium illum rerum facilis natus excepturi velit? </p>
</div>
<div className='w-full md:w-1/5 mb-8 md:mb-0 '>
  <h3 className='text-white text-lg font-bold mb-4 ml-23 md:ml-10'>Company</h3>
  <ul className='flex flex-col text-[25px] font-bold text-gray-400'>
    <a href="#Header" className='hover:text-white '>Home</a>
    <a href="#About" className='hover:text-white '>About Us</a>
    <a href="#Contact" className='hover:text-white '>Contact Us</a>
    <a href="#" className='hover:text-white'>Privacy Policy</a>
  </ul>
</div>
<div className='w-full md:w-1/3'>
  <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
  <p className='text-gray-400 mb-4 max-w-80'>The latest news,articles,and resources,sent to your inbox weekly</p>

  <div className='flex gap-2'>
    <input type="email" placeholder='Enter your email'
    className='p-2 bg-gray-700 rounded-xl text-gray-300 border border-gray-700 focus:outline-none w-full md:w-auto  '/>
    <button className='bg-blue-400 rounded-xl text-black font-bold py-2 px-4'>Subscribe</button>
  </div>
</div>
  </div>
  <div className='text-gray-300 text-center border-t border-gray-700 py-4 mt-10 '>
Copyright 2024 © Real Estate. All rights Reserved.
  </div>
 </div>
  )
}

export default Footer

