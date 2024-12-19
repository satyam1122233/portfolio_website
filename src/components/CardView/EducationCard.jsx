import React from 'react'
import './educationCard.css';

function EducationCard(props) {
  return (
    <>
      <div className="pera section w-full md:w-1/3 p-4 rounded-xl ">
      <div className='mt-2 mb-4'>
            <h1 className='font-semibold  text-lg md:text-xl underline'>{props.certificationName}</h1>
            </div>
          <div className="space-y-4">


              <div className="md:flex md:space-x-4">
                
              <div className="div md:w-1/2"><p className='font-semibold text-green-600 text-md md:text-lg'>{props.orgNameHdng}</p>
                </div>
                

              <div className="div md:w-1/2">
              <p className='font-semibold text-md md:text-lg '>
                  {props.schoolName}</p>   
              </div>

              </div>

              <div className="md:flex md:space-x-4">
                
              <div className="div md:w-1/2"><p className='font-semibold text-green-600 text-md md:text-lg'>{props.orgBoardHdng}</p>
                </div>
                

              <div className="div md:w-1/2">
              <p className='font-semibold  text-md md:text-lg '>
                  {props.board}</p>   
              </div>

              </div>


              <div className="md:flex md:space-x-4">
              <div className="div md:w-1/2"> <p className='font-semibold text-green-600 text-md md:text-lg'>{props.orgYrHdng} </p>
                </div>
              <div className="div md:w-1/2">
              <p className='font-semibold  text-md md:text-lg'>
              {props.year}</p> 
              </div>
              </div>

              <div className="md:flex md:space-x-4">
              <div className="div md:w-1/2">    
              <p className='font-semibold text-green-600 text-md md:text-lg'>{props.percHdng} </p>
                </div>
              <div className="div md:w-1/2">
              <p className='font-semibold  text-md md:text-lg'>
              {props.percentage}</p>
              </div>
              </div>

          </div>
         
          </div>

    </>
  )
}

export default EducationCard
