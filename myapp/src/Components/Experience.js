import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import internlogo from '../Images/Intern-logo.jpg';
import Textlogo from '../Images/Textlogo.png';

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-[#005f73] font-bold mb-8 text-center">Experience</h1>
      <div className="flex flex-wrap items-start justify-between gap-8">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8">
          {[
            { icon: <FaHtml5 color="#E34F26" size={50} />, bgColor: 'bg-zinc-950' },
            { icon: <FaCss3 color="#1572b6" size={50} />, bgColor: 'bg-zinc-950' },
            { icon: <FaJs color="#F7DF1E" size={50} />, bgColor: 'bg-zinc-950' },
            { icon: <FaReact color="#61DAF8" size={50} />, bgColor: 'bg-zinc-950' },
            { icon: <FaBootstrap color="#61DAF8" size={50} />, bgColor: 'bg-zinc-950' },
            { icon: <FaFigma color="#F24E1E" size={50} />, bgColor: 'bg-zinc-950' },
            { icon: <SiMongodb color="#47A248" size={50} />, bgColor: 'bg-zinc-950' },
          ].map((item, index) => (
            <span
              key={index}
              className={`p-3 ${item.bgColor} flex items-center rounded-2xl hover:scale-105 hover:shadow-lg duration-300"`}
            >
              {item.icon}
            </span>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 items-center md:w-full">
          {/* Internshala Training */}
          <div className="flex gap-6 bg-gradient-to-br from-white bg-[#E8F1F6] bg-opacity-45 rounded-lg p-6 items-center shadow-xl shadow-slate-900 w-full max-w-4xl">
            <a
              href="https://drive.google.com/file/d/1FNTc7NahpfECDsaZ2tk6Ouu0NqxhZhlW/view?usp=sharing"
              className="flex-shrink-0"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                src={internlogo}
                alt="Internshala Logo"
                className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
              />
            </a>
            <div className="text-[#005f73]">
              <h2 className="text-lg md:text-xl font-bold leading-tight">
                React.js Training
              </h2>
              <p className="text-sm font-thin leading-tight">
                September 21, 2024 - October 21, 2024
              </p>
              <ul className="text-sm pl-4 list-disc">
                <li>
                  Learned and implemented React concepts, including hooks,
                  props, and component lifecycle.
                </li>
                <li>
                  Built a functional task management web application as part of
                  the training.
                </li>
              </ul>
            </div>
          </div>

          {/* Text Utilities Website */}
          <div className="flex gap-6 bg-gradient-to-br from-white bg-[#E8F1F6] bg-opacity-45 rounded-lg p-6 items-center shadow-xl shadow-slate-900  w-full max-w-4xl">
            <a
              href="https://sariftextutils.netlify.app/"
              className="flex-shrink-0"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                src={Textlogo}
                alt="Text Utilities Logo"
                className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
              />
            </a>
            <div className="text-[#005f73]">
              <h2 className="text-lg md:text-xl font-bold leading-tight">
                Text Utilities Website
              </h2>
              <ul className="text-sm pl-4 list-disc">
                <li>
                  Developed a text utility website using React.js and Bootstrap
                  for real-time text analysis and manipulation.
                </li>
                <li>
                  Implemented features like text reversal, word count, and
                  theme customization.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
