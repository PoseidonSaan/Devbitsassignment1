import React from 'react'
import { AiOutlineMinus } from "react-icons/ai"
import BusinessLaws from '../assets/Business-Laws.jpg'
import { IoChevronForwardSharp } from 'react-icons/io5'
const BusinessLaw = () => {
  return (
    <div>
      <div className='pt-20'>
        <div
          className='uppercase text-5xl bg-yellow-500 bg-opacity-80 text-white text-left font-black font-[sans-serif]  pt-10 pl-20 mx-10 pb-0 mb-32 h-52'
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
          <h1 className='pt-5 pb-0'>Business Law</h1>
          <AiOutlineMinus size={150} pt-0 />
        </div>

        <div
          className="flex flex-col md:flex-row md:px-[10vw] px:auto mx-24"
          style={{
            background: "url('https://jayantbhatt.in/wp-content/uploads/2019/02/Business-Laws.jpg') no-repeat center center fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backgroundSize: "cover",
          }}
        >

          {/* Left half */}
          <div className="md:w-1/2 p-4">
            <img
              src={BusinessLaws}
              alt="businesslaws"
              className="w-full mb-4"
            />
            <ul>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">INSURANCE AND RE-INSURANCE </span>
              </div>
              </li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">OIL AND GAS</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">AGRICULTURE</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">FEMA</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">SEBI</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">FOREIGN INVESTMENT</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">DEAL NEGOTIATION</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">ESTABLISHED BUSINESSES</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">CONTRACTS</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">ARBITRATION </span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">MEDIATION AND CONCILIATION</span>
              </div></li>


            </ul>
          </div>

          {/* Right half */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold font-[sans-serif] mb-4">Curated Expertise for Corporate Entities</h1>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
              A continuously evolving business environment necessitates reading between the lines, understanding the impact stemming from the disruptive changes, and respond with solutions that mitigate risks and maximize opportunities.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
              Our experience at the heart of the industry sectors including insurance, real estate, technology, media, and telecom amongst others, positions us effectively to help you adapt to the fast evolving landscape and make the most of the opportunities it brings.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
              Our office is ahead of the curve and we work with leading companies and financial institutions on enhancing the value for their businesses through a full spectrum of services for corporate and commercial issues. Our services help businesses enhance their reputation and take advantage of market opportunities through our value-driven, sustainable, relevant, and contemporary approach to corporate law.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
              We advise clients on every aspect of their business from entry strategies, complex tax-efficient structuring to exits. Advising new-age startups and the culture thereof have opened new arenas of services and have now become our expertise.
            </p>

          </div>
        </div>






      </div>
    </div>
  )
}

export default BusinessLaw