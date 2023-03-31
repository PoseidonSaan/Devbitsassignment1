

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
            <div className='flex row'>


                <div className='w-4/5 h-fit   text-black px-20'>
                    <div className=' p-4 flex flex-col justify-left w-full h-full text-sm font-light mx-auto'>
                        <div className='pb-4'>
                            <h2 className='inline font-bold text-4xl border-b-4 border-yellow-600 text-yellow-500'>About Us</h2>
                        </div>
                        <div className='pb-2  font-medium text-xl'>
                            We pioneered the discount broking model in India.
                            Now, we are breaking ground with our technology.
                        </div>
                        <p className='mt-3'>
                            We are a team of experienced professionals dedicated to providing top-quality brokerage services to our clients. With years of industry experience and a deep understanding of the markets, we are committed to helping our clients achieve their financial goals.<br></br>
                            Our company is built on a foundation of integrity, transparency, and trust. We believe in putting our clients first and providing them with personalized solutions that meet their unique needs. We take the time to listen to our clients, understand their goals and concerns, and work with them to develop customized investment strategies that align with their objectives.<br></br>
                            At our brokerage company, we offer a wide range of services, including investment management, retirement planning, tax planning, and more. Our team is highly skilled and dedicated to staying up-to-date with the latest industry trends and market developments. We use a variety of tools and resources to analyze market trends, identify opportunities, and manage risk.<br></br>
                            We pride ourselves on our commitment to exceptional customer service. We understand that our clients trust us with their financial futures, and we take that responsibility seriously. Our team is available to answer questions, provide guidance, and offer support whenever our clients need us.<br></br>
                            Thank you for considering our brokerage company. We look forward to working with you to help you achieve your financial goals.







                        </p>
                    </div>

                </div>
                <div className='w-1/5 mr-6 mt-10'>
                    <img
                        src="https://www.logogarden.com/wp-content/uploads/2020/09/mortgage-broker-logo-2.png"
                        alt="logo"
                        className='cursor-pointer'
                    />
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

        </div>

    );
}

export default Home;