import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from '../../public/profPr.jpg'


function Home() {
  return (
    <>
    <div name="/" className='max-w-screen-2xl container mx-auto px-4 my-20' >

      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
      <span className='text-lg'>Welcome In My Feed</span>

    <div className='flex gap-2 text-2xl md:text-4xl'>  <h1>Hello! I am a</h1>
    <h1>
    <ReactTyped
    className='text-red-600'
          strings={["Web Developer","Java Developer","Android Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </h1>
    </div>

<br />
      <p className='text-sm md:text-lg text-justify'>Highly motivated and proficient software developer with a strong commitment to contributing to innovative and impactful projects. A collaborative team player with a dedication to continuous learning and professional growth. Driven to deliver exceptional, high-quality results within established timelines in the dynamic and fast-paced field of software development.</p>
      <br />
      {/* social media icons */}
      <div className='space-y-2'>

        <h1>Available on</h1>
        <div className="socialMediaIcon flex gap-2 "><FaYoutube size={24}/>
<FaLinkedin size={24}/>
<FaInstagramSquare size={24}/>
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
