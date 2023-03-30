import React from 'react'
import { AiOutlineMinus } from "react-icons/ai"
import BusinessLaws from '../assets/Business-Laws.jpg'
import { IoChevronForwardSharp } from 'react-icons/io5'
const ConstitutionalLaw = () => {
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
          <h1 className='pt-5 pb-0'>CONSTITUTIONAL LAW</h1>
          <AiOutlineMinus size={150} pt-0 />
        </div>

        <div
          className="flex flex-col md:flex-row md:px-[10vw] px:auto mx-24"
          style={{
            background: "url('https://jayantbhatt.in/wp-content/uploads/2022/08/Constitutional-Law.gif') no-repeat center center fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backgroundSize: "cover",
          }}
        >

          {/* Left half */}
          <div className="md:w-1/2 p-4">
            <img
              src='https://jayantbhatt.in/wp-content/uploads/2022/08/Constitutional-Law.gif'
              alt="businesslaws"
              className="w-full mb-4"
            />
            <ul>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">WRIT PETITIONS </span>
              </div>
              </li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">PUBLIC INTEREST LITIGATIONS </span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">SPECIAL LEAVE PETITIONS</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">TRANSFER PETITIONS</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">ELECTION MATTERS</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">GOVERNANCE</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">POLICY MATTERS</span>
              </div></li>
              


            </ul>
          </div>

          {/* Right half */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold font-[sans-serif] mb-4">Effective crafting of innovative legal interpretations</h1>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            The Constitution of India, 1950, is the Supreme law of the country and is an instrument which governs the nation. It lays down the basic fundamental and political principles, institutes the structure, procedures, powers and duties of government institutions and outlines the fundamental rights and duties of citizens.
 
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            The Constitution guarantees all citizens thier fundamental rights as well as protects them from any unreasonable, arbitrary or unjust actions resulting from the laws or directions of executive/legislature.


            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            Accordingly, legal redressals are also routinely sought by citizens before the High Courts and the Supreme Court of India against infringement of their rights.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            Legal actions under the Constitution are generally technical in nature and to a large extent depend upon judicial precedents.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            We formulate legal arguments by adapting to the developing and advancing constitutional and policy amendments.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            We dwell into analysis and implications of legislative changes and offer advice in and drafting of Writs of Habeas Corpus, Mandamus, Quo Warranto, Certiorari and Prohibition along with providing policy advisory and Public Interest Litigation issues directly linked to Constitutional ethos.


            </p>

          </div>
        </div>






      </div>
    </div>
  )
}

export default ConstitutionalLaw