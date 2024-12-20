import React, { useEffect, useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { ReactTyped } from "react-typed";
import pic from '../../public/profPr.jpg'
import resumeImg from '../Images/resume.jpg'
import { IoCloseSharp } from "react-icons/io5";
// import pic from '../../public/pic.png'
import './CardView/educationCard.css';



function Home() {
  let [resumeState,SetresumeState]=useState(false)

  function ToggleResumeState(){
    SetresumeState((prevState)=>!prevState)

    console.log(resumeState)
    }

useEffect(()=>{
  document.body.style.overflow=resumeState?'hidden':''
},[resumeState])


  return (
    <>




    <div name="/" className='max-w-screen-2xl container mx-auto px-4 my-20' >



    {resumeState&&(

<div className='resumeDiv '>

  <div className="img flex md:flex-row-reverse flex-col no-scrollbar">
  <div onClick={ToggleResumeState}
 className='closeBtn ml-auto'>
   <IoCloseSharp size={30}/>
   </div>
  <img src={resumeImg} alt="" />
  </div>

</div>

)}

      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
      <span className='pera text-lg'>Welcome In My Feed</span>

    <div className='flex gap-2 text-2xl md:text-5xl flex-row'>  <h1 className='typeTxt'>Hello! <span className='mx-2 md:mr-4 md:ml-2'>I am a</span>

    <ReactTyped
    className='typeTxt text-red-600'
          strings={["Web Developer","Java Developer","Android Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

     </h1>
    <h1>
    
        </h1>
    </div>

<br />
      <p className='pera text-sm md:text-lg text-justify'>Highly motivated and proficient software developer with a strong commitment to contributing to innovative and impactful projects. A collaborative team player with a dedication to continuous learning and professional growth. Driven to deliver exceptional, high-quality results within established timelines in the dynamic and fast-paced field of software development.</p>
      <br />
      {/* social media icons */}
      <div className='space-y-2'>

        <h1 className='pera'>Available on</h1>

        <div className="flex flex-row justify-between">
        <div className="socialMediaIcon flex gap-2 ">
          
        <a href="https://www.youtube.com/@TechLearnerrr" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={32} />
      </a>
        <a href="https://www.linkedin.com/in/satyamkumar11222/" target="_blank" rel="noopener noreferrer">
<FaLinkedin size={32}/>
      </a>
      
        <a href="https://github.com/satyam1122233" target="_blank" rel="noopener noreferrer">
<FaGithub size={32}/>

      </a>
        {/* <a href="https://github.com/satyam1122233" target="_blank" rel="noopener noreferrer">
<FaInstagramSquare size={32}/>


      </a> */}
         
</div>

<button onClick={ToggleResumeState} className='text-md  md:text-xl  color: white;
py-[7px] px-[20px] rounded-2xl
bg-[#962503]
 shadow-[0px_3px_0_1px]
shadow-white
transition-all duration-[0.15s] ease-linear w-fit hover:shadow-[0px_1.5px_1px_1px] hover:bg-[#6d1c03]' >Resume</button>

</div>
      </div>

      </div>

      <div className='md:w-1/2 order-1 md:order-2'>
      <img src={pic} alt="" className='rounded-[50%] mt-4 w-[15rem] h-[15rem]
      md:w-[60%] md:h-[80%] m-auto' style={{boxShadow:"0px 2px 4px 1px white"}}/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home
