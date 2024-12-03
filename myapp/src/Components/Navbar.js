import React, { useState } from 'react'
import {RiCloseLine, RiMenu2Line} from "@remixicon/react"
const Navbar = () => {
    const [menu,setMenu]=useState(false)
    const [showmenu,setShowmenu]=useState(true)
  return (
    <>
    <nav className='flex flex-wrap justify-between md:items-center text-[#005f73] px-10 pt-6 md:px-20'>
        <span className='text-xl font-bold tracking-wide'>Portfolio</span>
        <ul className={`${menu ?"block":"hidden"} mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-blacck px-2 rounded-xl bg-opacity-30 md:border-none text-center
        md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
           <a href="#About"> <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li></a>
           <a href="#Experience"> <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li></a>
            <a href="#Projects"><li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li></a>
            <a href="#Contact"><li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li></a>
        </ul>
        {showmenu?(
            <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all 
            duration-300' 
           onClick={()=>{setMenu(!menu);setShowmenu(!showmenu)}}/>
        ):<RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all 
            duration-300' 
            onClick={()=>{setMenu(!menu);setShowmenu(!showmenu)}}/>}
    </nav>
    </>
  )
}

export default Navbar
