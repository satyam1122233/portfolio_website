import React from 'react'
import { Button } from 'react-scroll'
import './project.css';

function ProjectCard(props) {
  return (
    <div className='project  mb-6 md:mb-0 w-full p-[5px] md:w-[30%] md:p-[10px]
    '>
        <div className="image">

      <img src={props.img} alt=""/>
        </div>
<div className="projDtls flex flex-col md:flex-row mt-4 mx-auto md:mt-[1.5rem] md:mb-[0.5rem] md:text-[18px] text-md
  md:h-[7rem] h-fit p-[5px] md:p-[10px]
    md:w-[70%] w-fit">
    <h1 className='proTl text-green-500 md:flex-1 md:max-w-[50%] w-fit'>{props.prTitle}</h1> <h1 className='proTxt text-white ml-2 md:flex-1 md:max-w-[50%] max-w-full '>{props.prName}</h1>
</div>
      <div className='btns flex gap-4 '>
        <Button className='prBtn p-2 text-sm bg-green-800 hover:bg-green-700 md:py-[10px] md:px-[15px]  
        md:text-lg  

   ' onClick={() => window.open(props.codeUrl, '_blank')} >{props.codeBtn}</Button>

        <Button onClick={() => window.open(props.videoUrl, '_blank')}  
        className='prBtn p-2 text-sm bg-green-800 hover:bg-green-700 md:py-[10px] md:px-[15px]  
        md:text-lg '>{props.videoBtn}</Button>

      </div>
    </div>
  )
}

export default ProjectCard
