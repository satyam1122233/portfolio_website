import React from 'react'
import SkillsCard from './CardView/SkillsCard'
import { FaJava } from 'react-icons/fa';
import { SiKotlin } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import CertificateCard from './CardView/certificateCard';
import javaForAndroidImg from '../Images/javaForAndroid.jpeg';
import javaIntemediate from '../Images/javaIntemediate.jpg';
import ma from '../Images/ma.jpg';
import mp from '../Images/mp.jpg';
import gl from '../Images/gl.jpg';
import ij from '../Images/ij.jpg';

function Skills() {
  return (
    <>
    
    <div name="/skills" className=' m-auto my-20  w-full'>
  
    
<h1  className='text-3xl font-bold mb-5 shadow-md p-4  rounded-lg bg-[darkcyan] my-20'>Skills</h1>
   
   
    <div className="flex justify-between px-12 mx-4">

<SkillsCard skillName={"Java"} icon={FaJava} iconColor="yellow" />
<SkillsCard skillName={"php"} icon={SiPhp} iconColor={"#6884ba"} />
<SkillsCard skillName={"React"} icon={FaReact} iconColor={"#12d6fa"}/>
<SkillsCard skillName={"Kotlin"} icon={SiKotlin} iconColor={"#9b34ea"}/>


</div>
<div className="flex justify-between px-12 mx-4">

<SkillsCard skillName={"MySql"} icon={SiMysql} iconColor={"#3263a0"}/>
<SkillsCard skillName={"Html"} icon={FaHtml5} iconColor={"#e5532d"}/>
<SkillsCard skillName={"CSS"} icon={FaCss3} iconColor={"#2d53e5"}/>
<SkillsCard skillName={"Javascript"} icon=
{TbBrandJavascript} iconColor={"#ffe008"} />


</div>

<div className="certificationContainer ">
<h1 className='text-2xl font-bold mt-20 shadow-md px-4 py-2 rounded-lg bg-[cadetblue] mb-6'>Certification</h1>

<div className="certiMain ">
<CertificateCard img={javaForAndroidImg} CrsNane={"Java For Android"}/>
<CertificateCard img={javaIntemediate} CrsNane={"Java Intemediate"}/>

</div>
<div className="certiMain ">
<CertificateCard img={ma} CrsNane={"Microsoft Certified: Azure Fundamentals"}/>
<CertificateCard img={mp} CrsNane={"Microsoft: Power Plateform Fundamentals "}/>

</div>

<div className="certiMain ">
<CertificateCard img={gl} CrsNane={"OOPs in Java"}/>
<CertificateCard img={ij} CrsNane={"Introduction to Java "}/>

</div>

</div>

</div>
    </>
  )
}

export default Skills
