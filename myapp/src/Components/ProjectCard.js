import React from 'react'

const ProjectCard = ({title,main,image,SourceCode}) => {
  return (
    <div className='p-3 md:p-6 flex-col w-80 bg-gradient-to-br from-white bg-[#E8F1F6]  shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-4' src={image} alt="ProjectImage"/>
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>{title}</h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
      <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-2'>
     <a target="_blank"rel="noreferrer" href={SourceCode}>
      <button className='mt-4 bg-gradient-to-r from-[#00ADB5] to-[#005F73]
       text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-3xl shadow-md 
      shadow-[#B1D4E0] hover:scale-105 hover:shadow-lg duration-300'>SourceCode</button></a>
      </div> 
    </div>
  )
} 

export default ProjectCard
