import React from 'react';
import sarif from '../Images/sarif.jpg';
import TextChanger from './TextChanger';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className='text-[#005f73] flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChanger />
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
          FullStack Developer .Passionate 
          web developer skilled in React, JavaScript, 
          and modern web technologies. Eager to craft responsive, 
          user-friendly applications and continuously enhance my skills in delivering innovative 
          digital solutions.
        </p>
        <div className="flex gap-6 mt-5">
          <a href="https://github.com/Hussainansari-123" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} color="#333" />
          </a>
          <a href="https://www.linkedin.com/in/mohd-hussain-ansari-97909931b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} color="#0077B5" />
          </a>
        </div>
       <a href="https://drive.google.com/file/d/1bcVbKPgO0B4Bu3Ud1xtxaygcwbpSlHHB/view?usp=sharing" target='_blank' rel='noopener noreferrer'>
       <button className='mt-5 bg-gradient-to-r
        from-[#00ADB5] to-[#005F73] text-white font-semibold
         py-2 px-4 md:py-3 md:px-6 rounded-3xl shadow-md shadow-[#B1D4E0]
          hover:scale-105 hover:shadow-lg duration-300 '>
          Download Cv
        </button></a>
      </div>
      <div>
        <img src={sarif} alt="Myimage" className="w-full md:w-auto rounded-full" />
      </div>
    </div>
  );
}

export default Home;
