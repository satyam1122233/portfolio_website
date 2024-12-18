import React, { useState } from 'react'
import pic from '../../public/pic.png'
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';


function Navbar() {
const[menuBtn, setMenuBtn]=useState(false);
const navItems=[
  { id: 1, text: "Home", path: "/" },
{ id: 2, text: "About", path: "/about" },
{ id: 3, text: "Skills/Certifications", path: "/skills" },
{ id: 4, text: "Projects", path: "/projects" },
{ id: 5, text: "Contacts", path: "/contacts" },

  
]
  return (
    <>
      <div className='pera max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 'style={{ backgroundColor:'black',boxShadow: '0 0px 12rem 0px cadetblue', width:'100%'}}>
        <div className='flex justify-between h-16 items-center'>
            <div className="flex space-x-2">
                <img src={pic} alt=""  className='h-12 w-12 rounded-full flex'/>
                <h1 className='font-bold text-lg cursor-pointer'>Satyam <span>Kumar</span>
                <p className='text-sm flex justify-start'>Web Developer</p>
                </h1>
               
            </div>
            {/* dekstop nav bar */}
            <div>


            <ul className="hidden md:flex space-x-10">
  {navItems.map(({ id, text, path }) => (
    <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
      <Link to={path} 
      smooth={true}
      duration={500}
      offset={-70}
      activeClass='active'
      >
      
      {text}</Link> 
    </li>
  ))}
</ul>



  <div onClick={()=>setMenuBtn(!menuBtn)} className='md:hidden cursor-pointer bg-blue-500 hover:bg-blue-800'>
                  {menuBtn?<IoCloseSharp size={24}/>:<MdMenu size={24}/>}
              

                </div>

            </div>
        </div>

{/* mobile nav bar */}
      {menuBtn && <div >
        <ul className='bg-black w-fit h-fit  m-auto md:hidden flex flex-col items-center justify-center p-8 my-2 space-y-4  top-0 left-0 right-0' style={{borderRadius:'15px', boxShadow:'0 -4px 8px 2px white'}}>
        {
                    navItems.map(({id,text,path})=>(
                      <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                        <Link to={path}>{text}</Link>
                        
                        </li>
                    ))
                    }
                </ul>
        </div>}
        
      </div>
    </>
  )
}

export default Navbar
