import React from 'react'
import './skills.css';

function certificateCard(prop) {
  return (
    <>
    <div className="CertiCard  ">
    
    
    <div className="CertiImg ">

    <img src={prop.img} alt="" className='' />
    <p className='h1Certi text-center'>{prop.CrsNane}</p>
    </div>
    
    </div>
      </>    
  )
}

export default certificateCard

