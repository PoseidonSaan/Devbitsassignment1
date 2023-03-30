import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/plainlogo.png'
import Whitelogo from '../assets/logo.png'


const NavBar = () => {

  const [nav, setNav] = useState(false)


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black">
      <div className=' w-28'>
        <img src="https://as1.ftcdn.net/v2/jpg/02/95/44/22/1000_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg" alt="logo" className='cursor-pointer' />
      </div>

      <ul className='hidden md:flex text-black'>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200 hover:text-yellow-400 focus:text-yellow-400'><a href="https://as1.ftcdn.net/v2/jpg/03/15/66/92/1000_F_315669239_tvFWEffY96UtU2xT5uccdSlIJ2s0E9Ux.jpg" alt="hehe" target={'_blank'}>sex</a></li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'><a href='https://as2.ftcdn.net/v2/jpg/00/74/15/95/1000_F_74159556_67n5823V7Ei87a4g6JJnYHC0yMSo1AEy.jpg' alt="hehehe" target={'_blank'}>cam girls</a></li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>LGBTQ+</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'><a href = "/loginpage"> login</a> </li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>contact us</li>

      </ul>


      <div
        onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} color="white" /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col items-left text-left absolute top-0 left-0 w-full h-screen bg-stone-800 text-white'>
          <li><img src={Whitelogo} alt="logo" /></li>
          <li className='cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 mt-20 focus:text-yellow-400'>Home</li>
          <li className=' cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 focus:text-yellow-400'>areas of practice</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
              hover:scale-105 duration-200 focus:text-yellow-400'>publication & media</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'>career</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'>contact us</li>


        </ul>
      )}



    </div>
  )
}

export default NavBar