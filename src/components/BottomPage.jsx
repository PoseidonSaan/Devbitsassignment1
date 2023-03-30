import React from 'react'
import whitelogo from '../assets/logo.png'
import logo from '../assets/plainlogo.png'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { BsFillTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'

const BottomPage = () => (
    <div>
        <footer className="bg-[#242A36] text-white py-10">
            <div className="flex flex-wrap flex-col justify-center md:flex-row md:justify-between">
                <div className="mx-4 mb-8 md:mb-0 flex flex-col items-center flex-1 w-full">
                    <img src={whitelogo} alt="Company Logo" className="h-20 w-auto mb-4" />
                    <div className="max-w-xs text-left ">
                        <p className="text-m overflow-hidden text-gray-400 pb-4" style={{ textOverflow: 'ellipsis' }}>
                            Chambers of Jayant Bhatt caters to varied clients comprising of Governmental and Non-Governmental Bodies, Multinationals, Financial Institutions and individuals in an array of matters.
                        </p>
                    </div>
                </div>
                <div className="mx-4 mb-8 md:mb-0 uppercase item-center flex-1 w-full">
                    <h4 className="text-lg mb-10 capitalize">Useful Links</h4>
                    <ul>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer">areas of practice</span>
                        </div>
                        </li>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer">publication & media</span>
                        </div></li>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer">contact us</span>
                        </div></li>
                        <li className="mb-2 text-sm"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer">career</span>
                        </div></li>
                    </ul>
                </div>
                <div className="mx-4 mb-8 md:mb-0 flex-1 w-full">
                    <h4 className="text-lg mb-4">Contact Us</h4>
                    <div className="flex flex-col mb-4 md:mb-4">
                        <BsFillTelephoneFill size={10} /> <a href="tel:+18002162020" className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold '> 011-41324533 |  +91 8447185912</a>

                    </div>
                    <div className="flex flex-col mb-4 md:mb-4">
                        <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'> <BsFillClockFill></BsFillClockFill>Mon - Sat: 10.00 am - 8.00 pm</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'><IoLocationSharp></IoLocationSharp>A71, New Friends Colony, New Delhi – 110025</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
)

export default BottomPage