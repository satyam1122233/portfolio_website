import React from 'react'
import EducationCard from './CardView/EducationCard'
import { ReactTyped } from "react-typed";

import './CardView/educationCard.css';


function About() {
  return (
    <div name="/about" className='max-w-screen-2xl container mx-auto px-4  my-20'>
      <h1 className='mainH text-3xl  mb-5 shadow-md p-4 rounded-lg bg-[darkcyan]'>About</h1>
      <p className='pera text-lg'>I'm <span className='font-bold'>Satyam Kumar</span>, a passionate software developer skilled in 
      <span className='text-red-500 font-bold'> Web Development</span> and <span className='text-red-500 font-bold'>Android development</span>. With a keen interest in exploring new technologies, I focus on building innovative and efficient applications. I also enjoy sharing my knowledge and insights with the tech community, always striving to push the limits of what's possible.</p>

       <br />

   <div className='space-y-14 my-4 '>

<div className="educationContainer space-y-4">
      <h1 className='mainH subHdng text-2xl mt-20 shadow-md px-4 py-2 rounded-lg '>Education And Training</h1>
  <div className="educationSections flex space-x-6 p-4">
        
          <EducationCard orgNameHdng={"School Name:"} orgBoardHdng={"Educational Boards:"} orgYrHdng={"Year of Passing:"} percHdng={"Year of Percentage:"}  certificationName={"Secondary School Certificate (10th)" }schoolName={"Kendriya Vidyalaya Punjab Lines"} year={"2018"} percentage={"77.80%"} board={'CBSE'}/>

          <EducationCard orgNameHdng={"School Name:"} orgBoardHdng={"Educational Boards:"} orgYrHdng={"Year of Passing:"} percHdng={"Year of Percentage:"} certificationName={"High School Certificate (12th)" }schoolName={"Kendriya Vidyalaya Punjab Lines"} year={"2020"} percentage={"79.4%"} board={'CBSE'}/>

          <EducationCard orgNameHdng={"School Name:"} orgBoardHdng={"Educational Boards:"} orgYrHdng={"Year of Passing:"} percHdng={"Year of Percentage:"}  certificationName={"Graduation(B.TECH)" }schoolName={"Meerut Institute of Engineering and Technology"} year={"2024"} percentage={"73%"} board={'AKTU'}/>

    </div>
   </div>
      

   <div className="experienceContainer space-y-4">
      <h1 className='mainH subHdng text-2xl mt-20 shadow-md px-4 py-2 rounded-lg'>Experience</h1>
      <div className="div p-4 overflow-hidden">
  <div className="experienceSections flex space-x-6 ">
        

  <EducationCard certificationName={"Android Development Internship" } orgNameHdng={"Company Name:"} orgYrHdng={"Duration:"}   schoolName={"Vishanka Technologies pvt ltd"} year={"1 Month"}  />

  <EducationCard certificationName={"Software Development Internship" } orgNameHdng={"Company Name:"} orgYrHdng={"Duration:"}   schoolName={"SYNC"} year={"1 Month"}  />

  <EducationCard certificationName={"Android Development Internship" } orgNameHdng={"Company Name:"} orgYrHdng={"Duration:"}   schoolName={"VYZA Solutions"} year={"6 Month"}  />
    </div>
    </div>

   </div>




      </div>

    </div>
  )
}

export default About
