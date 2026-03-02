import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../../assets/assets'
import {motion} from "framer-motion"

function Projects() {

  const[currIndex,setcurrIndex] = useState(0);
  const[cardstoShow,setcardsToShow] = useState(1)

  useEffect(()=>{
    const updateCardToShow =()=>{
      if(window.innerWidth>=1024){
        setcardsToShow(projectsData.length)
      }
      else{
        setcardsToShow(1)
      };
      updateCardToShow();
      window.addEventListener('resize',updateCardToShow);
      return()=>window.removeEventListener('resize',updateCardToShow);
    }
  },[])

  const nextProject = ()=>{
  setcurrIndex((prevIndex) =>(prevIndex + 1) % projectsData.length)
  }
  
   const PrevProject = ()=>{
  setcurrIndex((prevIndex) => prevIndex === 0 ?  projectsData.length - 1:
  prevIndex-1
) 
  }
  return (
    <motion.div
    initial = {{opacity:0,x:-200}}
      transition={{duration:1.2}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
    className=' container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ' id='project'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces,Building Legacies-Explore Our Portfolio</p>

      {/* slider buttons */}

      <div className='flex justify-end items-center mb-8'>
        <button onClick={PrevProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
            <img src={assets.left_arrow} alt="Previous" />
        </button>
            <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next Project'>
            <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project slider container */}
      <div className='overflow-hidden '>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform:`translateX(-${(currIndex * 35)/cardstoShow}%)`}}>
          {projectsData.map((project,index)=>(
            <div key={index} className='relative flex shrink-0 w-full sm:w-1/4'>
              <img src={project.image} alt={project.title}className='w-full h-auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md
                '>
                 <h2 className='text-xl font-semibold text-gray-800 '>{project.title}</h2>
                 <p className='text-gray-500 text-sm'>{project.price} <span>|</span>
                 {project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
