import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className="bg-gradient-to-br from-white bg-[#e8f5f6] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <footer className='className="flex justify-around bg-[#161627] text-white p-10 md:p-12 items-center'>
<p className='text-center text-sm'>@ 2024 Portfolio.All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
