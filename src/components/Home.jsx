

import React from 'react';

import { GiPistolGun } from 'react-icons/gi'
import { GiHandcuffs } from 'react-icons/gi'
import { MdOutlineFamilyRestroom } from 'react-icons/md'
import { FaBalanceScale } from 'react-icons/fa'
import { FaBriefcaseMedical } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaBusinessTime } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import TopPage from './TopPage';
import NavBar from './NavBar';
import BottomPage from './BottomPage';




function Home() {
    return (
        <div>
            <TopPage />
            <NavBar />
            
            <div className='w-100% h-fit   text-black px-20'>
                <div className=' p-4 flex flex-col justify-left w-full h-full text-sm font-light mx-auto'>
                    <div className='pb-4'>
                        <h2 className='inline font-bold text-4xl border-b-4 border-yellow-600 text-yellow-500'>About Us</h2>
                    </div>
                    <div className='pb-2 text-base font-medium'>
                        Spear-headed by Adv. Jayant Bhatt, the Chamber provides litigation-related diligence, counseling, and solutions. His office caters to varied clients comprising of Governmental and Non-Governmental Bodies, Multinationals, Financials Institutions and individuals in an array of matters.
                    </div>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa vitae tortor condimentum lacinia quis. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod.<br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className='w-full h-1/4 md:h-1/2'>
                <div className='grid grid-cols-1 md:grid-cols-4 px-20 py-48 '>


                    <div className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <div className='flex items-center justify-center'>
                            <RiTeamFill className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                        </div>
                        <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                            <p className='group-hover:text-yellow-500'>Business Law</p>
                        </div>
                        <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                            Our corporate services help dealing with the crucial and itricate matters efficiently.
                        </div>
                    </div>

                    <div className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <div className='flex items-center justify-center'>
                            < GiPistolGun className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                        </div>
                        <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                            <p className='group-hover:text-yellow-500'>Criminal Law</p>
                        </div>
                        <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                            Our corporate services help dealing with the crucial and itricate matters efficiently.
                        </div>
                    </div>


                    <div className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <div className='flex items-center justify-center'>
                            <GiHandcuffs className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                        </div>
                        <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                            <p className='group-hover:text-yellow-500'>White-Collar Crime</p>
                        </div>
                        <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                            Our corporate services help dealing with the crucial and itricate matters efficiently.
                        </div>
                    </div>


                    <div className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <div className='flex items-center justify-center'>
                            < FaBusinessTime className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                        </div>
                        <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                            <p className='group-hover:text-yellow-500'>Privacy & Data Protection</p>
                        </div>
                        <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                            Our corporate services help dealing with the crucial and itricate matters efficiently.
                        </div>
                    </div>


                    <div className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <div className='flex items-center justify-center'>
                            <MdOutlineFamilyRestroom className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                        </div>
                        <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                            <p className='group-hover:text-yellow-500'>Family Law</p>
                        </div>
                        <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                            Our corporate services help dealing with the crucial and itricate matters efficiently.
                        </div>
                    </div>


                    <div className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <div className='flex items-center justify-center'>
                            < FaBalanceScale className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                        </div>
                        <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                            <p className='group-hover:text-yellow-500'>Constitutional law</p>
                        </div>
                        <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                            Our corporate services help dealing with the crucial and itricate matters efficiently.
                        </div>
                    </div>


                    <div className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <div className='flex items-center justify-center'>
                            <FaBriefcaseMedical className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                        </div>
                        <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                            <p className='group-hover:text-yellow-500'>Medical Negligence</p>
                        </div>
                        <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                            Our corporate services help dealing with the crucial and itricate matters efficiently.
                        </div>
                    </div>

                    <div className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <div className='flex items-center justify-center'>
                            < FaHome className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                        </div>
                        <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                            <p className='group-hover:text-yellow-500'>Civil & Consumer Dispute</p>
                        </div>
                        <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                            Our corporate services help dealing with the crucial and itricate matters efficiently.
                        </div>
                    </div>

                </div>
            </div>



            <BottomPage />
        </div>

    );
}

export default Home;