import React from 'react'
import './skills.css';

function certificateCard(prop) {
  return (
    <>
    <div className="CertiCard
    p-[60px]
    max-w-[80%]
    md:p-[80px] 
    md:max-w-[40%]
     ">
    
    
    <div className="CertiImg ">

    <img src={prop.img} alt="" className='' />
    <p className='h1Certi text-center'>{prop.CrsNane}</p>
    </div>
    
    </div>
      </>    
  )
}

export default certificateCard

