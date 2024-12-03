import React from 'react'
import {IoArrowForward} from "react-icons/io5"
import sarif from "../Images/sarif.jpg"
const About = () => {
  return (
    <div id="About" className='text-[#005f73] md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gradient-to-br from-white bg-[#E8F1F6] bg-opacity-45  shadow-xl shadow-slate-600 rounded-2xl mx-0 md:mx-20   p-12'>

        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center self-start '>
                <img src={sarif} alt='AboutImage' className='md:h-80   w-32 h-32 rounded-md mx-6'/>
                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>High School</h1>
                            <h6 className='text-sm md:text-2xl font-thin leading-normalb whitespace-nowrap text-black'>
                                Jesus & Mary School and College,Balrampur
                            </h6>
                            <p className='text-sm md:text-md leading-tight text-black'>
                              Completed my HighSchool from ICSE Board 2019
                            </p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Intermediate</h1>
                            <h6 className='text-sm md:text-2xl font-thin leading-normal  whitespace-nowrap text-black'>
                                Jesus & Mary School and College,Balrampur 
                            </h6>
                            <p className='text-sm md:text-md leading-tight text-black'>
                            Completed my HighSchool from ISC Board 2021
                            </p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Graduation BCA</h1>
                            <h6 className='text-sm md:text-2xl font-thin leading-normal  whitespace-nowrap text-black'>
                                MLKPG.College,Balrampur
                            </h6>
                            <p className='text-sm md:text-md leading-tight text-black'>
                              Completed my Graduation From State Board in 2024
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
