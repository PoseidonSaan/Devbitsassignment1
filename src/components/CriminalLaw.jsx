import React from 'react'
import { AiOutlineMinus } from "react-icons/ai"
import BusinessLaws from '../assets/Business-Laws.jpg'
import { IoChevronForwardSharp } from 'react-icons/io5'
const CriminalLaw = () => {
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
            background: "url('https://jayantbhatt.in/wp-content/uploads/2018/10/criminal-law-1.png') no-repeat center center fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backgroundSize: "cover",
          }}
        >

          {/* Left half */}
          <div className="md:w-1/2 p-4">
            <img
              src='https://jayantbhatt.in/wp-content/uploads/2018/10/criminal-law-1.png'
              alt="businesslaws"
              className="w-full mb-4"
            />
            <ul>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">FIR AND COMPLAINTS </span>
              </div>
              </li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">QUASHING OF FIR </span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">BAIL – REGULAR AND ANTICIPATORY</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">EVIDENCE</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">CRIMINAL APPEAL</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">CRIMINAL REVISION</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">FINANCIAL INSTITUTIONS FRAUDS</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">JUVENILE JUSTICE</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">POCSO</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">IMMORAL TRAFFIC PREVENTION</span>
              </div></li>
              <li className="mb-2"><div className="inline-flex items-center ">
                <IoChevronForwardSharp size={20} className="mr-1" />
                <span className="text-sm  uppercase">DRAFTING </span>
              </div></li>
              


            </ul>
          </div>

          {/* Right half */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold font-[sans-serif] mb-4">Unmatched Strategic Counselling for Trial and Appeal</h1>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            India, as a nation, is growing rapidly, which is a result of technological advancements, pooling of scientific resources, scaling high on globalization parameters, and proliferation of global markets. This has caused myriad opportunities for new anti-social activities to grow and impact human existence. With the change in social structures and the composition of the society, the nature, cause, manner, rate, and impact of crime have also completely changed. Of late, it has become quite a challenge to combat the changing dynamics of crime and criminality.
 
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            Renowned for our experience in complex litigation, our focus on readiness drives successful and more cost-effective and time-efficient results for clients. Our services include drafting notices, applications, complaints, petitions, and rejoinders  in consonance with the Criminal Procedural Code, 1973 and the Indian Evidence Act, 1872.




            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            The Chamber has extensive experience in representing clients in all types of criminal matters at the PAN India level, including the Supreme Court of India, High Courts, and District Courts. The team comprises efficient professionals and qualified advocates, who have excellent skills to handle cases of murder, rape, kidnapping, and other heinous offenses covered by the Indian Penal Code, 1860.
            </p>
            <p className="mb-4 font-[sans-serif] text-justify font-thin">
            The team is well-equipped to handle critical aspects and consequences that form a part of criminal litigation. The team investigates all angles of a case and offers ideal solutions to ensure a fair trial. The Chamber offers services for every stage of a Criminal trial – starting with the filing of FIR’s to Appeal against an unfavorable order/judgment in a higher authority.
            </p>
            

          </div>
        </div>






      </div>
    </div>
  )
}

export default CriminalLaw