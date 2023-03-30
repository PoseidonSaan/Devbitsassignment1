import React from 'react'
import { AiOutlineMinus } from "react-icons/ai"
import BusinessLaws from '../assets/Business-Laws.jpg'
import { IoChevronForwardSharp } from 'react-icons/io5'
const CivilDispute = () => {
  return (
    <div>
      <div className='pt-20'>
        <div
          className='uppercase text-5xl bg-yellow-5G00 bg-opacity-80 text-white text-left font-black font-[sans-serif]  pt-10 pl-20 mx-10 pb-0 mb-32 h-52'
          style={{
            background: "url('https://jayantbhatt.in/wp-content/uploads/2019/01/header_bg-copyright.png') no-repeat center center fixed",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(232, 150, 19, 0.5)",
            minHeight: "100%",
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundAttachment: "local",
          }}>
          <h1 className='pt-5 pb-0'>CIVIL & CONSUMER DISPUTE</h1>
          <AiOutlineMinus size={150} pt-0 />
        </div>

        <div
          className="flex flex-col md:flex-row md:px-[10vw] px:auto mx-24"
          style={{
            background: "url('https://jayantbhatt.in/wp-content/uploads/2022/04/CivilLitigation.jpg') no-repeat center center fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backgroundSize: "cover",
          }}
        >

          {/* Left half */}
          <div className="md:w-1/2 p-4">
            <img
              src='https://jayantbhatt.in/wp-content/uploads/2022/04/CivilLitigation.jpg'
              alt="businesslaws"
              className="w-full mb-4"
            />
            <ul>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">SUITS </span>
              </div>
              </li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">CONSUMER PROTECTION</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">PROPERTY DISPUTES</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">COMMERCIAL DISPUTES</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">TRIAL AND APPEAL</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">POWER AND ENERGY</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">AVIATION</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">HOSPITALITY AND TOURISM</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">INFRASTRUCTURE</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">STEEL </span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">HIGHWAYS AND RAILWAYS</span>
              </div></li>


            </ul>
          </div>

          {/* Right half */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold font-[sans-serif] mb-4">Result Oriented Dispute Resolution</h1>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            A rising consumer culture and booming economy in India can only lead to a boom in consumption of goods and services in the Indian market. However, with an increase in consumption also comes an exponential rise in the number of cases related to consumer protection. Especially, now with the coming into force of the new Consumer Protection Act, 2019, consumer disputes are set to see a further rise in such cases being filed. The consumer law practice has seen huge evolution with the service providers put in place to be more accountable and responsible for their commitments. Consequently, the consumers are at a front foot today with getting their grievances redressed in a time-bound manner.
 
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            Just like the Consumer Protection Act, 2019, we also aim at “better protection of interests of consumers” from unfair and restrictive trade practices as well as deficient services by the traders as well as the service providers.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            Civil litigation is typically divided into a series of different stages, including investigation, pleadings, discovery, pretrial proceedings, potential settlement, trial, and even appeal. 
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            We are actively engaged in representing companies as well as individuals in their disputes relating to civil litigation. We assist and advice our clients in various civil and arbitral proceedings. The Chamber’s diverse practice in the field of civil litigation includes handling matters such as suit for recovery, executions, matrimonial disputes such as divorce, maintenance, matters relating to guardianship.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            We also provide services to handle disputes arising out of a contract between the parties, both, before the courts and arbitral tribunals. Given the wide variety of complex civil litigation issues the Chamber deals with, we practice effective legal strategies for timely redressal of their grievance
            </p>

          </div>
        </div>






      </div>
    </div>
  )
}

export default CivilDispute