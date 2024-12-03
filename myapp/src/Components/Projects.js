import React from 'react'
import ProjectCard from './ProjectCard'
import Contact from "../Images/ContactForm.jpg"
import Todolist from "../Images/Todolist.jpg"
import Blogging from "../Images/Blogapp.png"
const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-[#005f73] '>
        <h1 className='text-2xl md:text-4xl text-[#005f73]  font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard image={Contact} title="ContactUS website" main="Contact Us form with a sleek design, proper field validation, and responsive
             styling, ensuring users can easily submit their inquiries."
             SourceCode={`https://github.com/Hussainansari-123/ContactForm`} />
            <ProjectCard image={Todolist} title="Todolist website" main="To-Do List website with React, 
            featuring task addition, deletion, and organization. The site is user-friendly,
             responsive, and enhances productivity with an intuitive interface for managing daily tasks efficiently."
             SourceCode={`https://github.com/Hussainansari-123/TodoList`} />
             
            <ProjectCard image={Blogging} title="Bloggingapp website" main="Blogging App website featuring a clean UI, 
            CRUD functionality, and user authentication, allowing users to create, edit,
             and manage blog posts seamlessly. 
            It’s fully responsive and built with modern web technologies." 
            SourceCode={`https://github.com/Hussainansari-123/Bloggingapp`}/>
             
        </div> 
      
    </div>
  )
}

export default Projects
