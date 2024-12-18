import React from 'react'
import './educationCard.css';

function EducationCard(props) {
  return (
    <>
      <div className="pera section w-full md:w-1/3 p-4 rounded-xl ">
      <div className='mt-2 mb-4'>
            <h1 className='font-semibold  text-xl underline'>{props.certificationName}</h1>
            </div>
          <div className="space-y-4">


              <div className="flex space-x-4">
                
              <div className="div w-1/2"><p className='font-semibold text-green-600 text-lg'>{props.orgNameHdng}</p>
                </div>
                

              <div className="div w-1/2">
              <p className='font-semibold text-lg '>
                  {props.schoolName}</p>   
              </div>

              </div>

              <div className="flex space-x-4">
                
              <div className="div w-1/2"><p className='font-semibold text-green-600 text-lg'>{props.orgBoardHdng}</p>
                </div>
                

              <div className="div w-1/2">
              <p className='font-semibold  text-lg '>
                  {props.board}</p>   
              </div>

              </div>


              <div className="flex space-x-4">
              <div className="div w-1/2"> <p className='font-semibold text-green-600 text-lg'>{props.orgYrHdng} </p>
                </div>
              <div className="div w-1/2">
              <p className='font-semibold  text-lg'>
              {props.year}</p> 
              </div>
              </div>

              <div className="flex space-x-4">
              <div className="div w-1/2">    
              <p className='font-semibold text-green-600 text-lg'>{props.percHdng} </p>
                </div>
              <div className="div w-1/2">
              <p className='font-semibold  text-lg'>
              {props.percentage}</p>
              </div>
              </div>

          </div>
         
          </div>

    </>
  )
}

export default EducationCard
