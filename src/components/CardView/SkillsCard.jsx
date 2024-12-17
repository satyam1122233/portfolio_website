import React from 'react'
import './skills.css';
function SkillsCard(props) {
  return (
    <div  className=' flex flex-col gap-4 justify-center text-center my-10 mx-4 w-1/6 '>
        <div className="skillIC w-full rounded-full  shadow-xl p-12 hover:p-7   cursor-pointer overflow-hidden">
        
       
        <props.icon className="reactI w-full h-full "style={{ color: props.iconColor }} />
        </div>
        <div className="text-2xl font-bold ">{props.skillName}</div>
        
    </div>
  )
}

export default SkillsCard
