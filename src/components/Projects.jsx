import React from 'react'
import ProjectCard from './CardView/ProjectCard'
import javaImg from '../Images/java.png'
import reactImg from '../Images/react.png'
import htmlImg from '../Images/html.png'
import phpImg from '../Images/php.png'

function Projects() {
  return (
    <>    
<div Name="/projects" className='mainH px-4'>
<h1  className='text-2xl md:text-3xl font-bold shadow-md p-4  rounded-lg bg-[darkcyan] my-20 '>Projects</h1>


<div className='projectContainer flex flex-col gap-10'>
<h1 className='mainH subHdng text-xl md:text-2xl mt-4 mb-4 shadow-md px-4 py-2 rounded-lg'>Android Projects</h1><div className="projectMain flex flex-col md:flex-row md:justify-between">
 
  <ProjectCard img={javaImg} prTitle={"Project Name:"} prName={"Vehicle Maintenance App"} videoUrl={"https://www.loom.com/share/d2ae9254aba747e38213bf490aeeedcc?sid=8f1ae442-7aaf-4d80-a3e0-b780d92ef326"} codeUrl={"https://github.com/satyam1122233/CodeAlpha_AD_VEHICLE-MAINTENANCE-AND-MILEAGE-TRACKER-APP.git"} codeBtn={"Source Code"} videoBtn={"View Video"}/>

  <ProjectCard img={javaImg} prTitle={"Project Name:"} prName={"Temperature Converter App"} videoUrl={"https://www.loom.com/share/5a083ab473b84a269b0e012276b2df06?sid=ec356498-f0df-467e-b49e-b672ae6c811b"} codeUrl={"https://github.com/satyam1122233/Temperature-Converter-App-.git"}codeBtn={"Source Code"} videoBtn={"View Video"}/>

  <ProjectCard img={javaImg} prTitle={"Project Name:"} prName={"Tic-Tac-Toe-Game"} videoUrl={"https://www.loom.com/share/98b21b3649e743d990243abea1529380?sid=ddfd5f84-4705-4429-a837-e98e5618a430"} codeUrl={"https://github.com/satyam1122233/Tic-Tac-Toe-Game.git"}codeBtn={"Source Code"} videoBtn={"View Video"}/>
</div>

<div className="projectMain flex flex-col md:flex-row md:justify-between">
 
   <ProjectCard img={javaImg} prTitle={"Project Name:"} prName={"To-Do-List App"} videoUrl={"https://www.loom.com/share/dce575067ca34e8593a2e2deb4788423?sid=2008ba42-477e-4901-9486-e90fb51ff2cd"} codeUrl={"https://github.com/satyam1122233/PRODIGY_AD_02.git"}codeBtn={"Source Code"} videoBtn={"View Video"}/>

   <ProjectCard img={javaImg} prTitle={"Project Name:"} prName={"Food For Train"} videoUrl={"https://www.loom.com/share/0c09ec5e4f5c4396954a3d11fa5ab193?sid=37ee403b-89a7-4854-aad8-c20cf3f7472c"} codeUrl={"https://github.com/satyam1122233/CodeAlpha_AD_FOOD-FOR-TRAIN-APP.git"}codeBtn={"Source Code"} videoBtn={"View Video"}/>

   <ProjectCard img={javaImg} prTitle={"Project Name:"} prName={"Online Exam App"} videoUrl={"https://www.loom.com/share/a45477e4a0254972835bd9212f18558e?sid=2252440a-c463-4673-b6c7-05756fb7621d"} codeUrl={"https://github.com/satyam1122233/OnlineExamApplication.git"}codeBtn={"Source Code"} videoBtn={"View Video"}/>
</div>
</div>




<div className='projectContainer flex flex-col gap-10'>
<h1 className='mainH subHdng text-2xl mt-20 mb-4 shadow-md px-4 py-2 rounded-lg'>Web Development Projects</h1><div className="projectMain flex flex-col md:flex-row md:justify-between">
 
  <ProjectCard img={reactImg} prTitle={"Project Name:"} prName={"To-Do-List"}videoUrl={"https://satyam1122233.github.io/To-Do-List/"}  codeUrl={"https://github.com/satyam1122233/To-Do-List.git"}codeBtn={"Source Code"} videoBtn={"Visit Website"}/>
  <ProjectCard img={htmlImg} prTitle={"Project Name:"} prName={"Check Palindrome"} videoUrl={""} codeUrl={"https://github.com/satyam1122233/check_palindrome_Website.git"}codeBtn={"Source Code"} videoBtn={"View Video"} />


  <ProjectCard img={phpImg} prTitle={"Project Name:"} prName={"chatBot-Website"} videoUrl={""} codeUrl={"https://github.com/satyam1122233/chatBot-Website.git"}codeBtn={"Source Code"} videoBtn={"View Video"}/>

 
</div>


</div>



</div>
    </>
  )
}

export default Projects
