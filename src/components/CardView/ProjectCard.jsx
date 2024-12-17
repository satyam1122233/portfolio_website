import React from 'react'
import { Button } from 'react-scroll'
import './project.css';

function ProjectCard(props) {
  return (
    <div className='project'>
        <div className="image">

      <img src={props.img} alt=""/>
        </div>
<div className="projDtls">
    <h1 className='proTl text-green-500'>{props.prTitle}</h1> <h1 className='proTxt text-white ml-2'>{props.prName}</h1>
</div>
      <div className='btns flex gap-4 '>
        <Button className='prBtn bg-green-800 hover:bg-green-700 ' onClick={() => window.open(props.codeUrl, '_blank')} >{props.codeBtn}</Button>

        <Button onClick={() => window.open(props.videoUrl, '_blank')}  
 className='prBtn bg-green-800 hover:bg-green-700'>{props.videoBtn}</Button>

      </div>
    </div>
  )
}

export default ProjectCard