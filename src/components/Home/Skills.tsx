// importing third party  modeuls  or libararies 
"use client"
import SkillCard from '@/components/SkillCard'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { FaBootstrap , FaHtml5 , FaCss3 , FaJs , FaPython , FaReact   } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiDjango , SiRedis , SiFastapi} from "react-icons/si";


const  Skills: React.FC = ():JSX.Element => {
    // // Define interface for skills
    // interface Skill {
    //     title: string;
    //     icon : JSX.Element;
    // }

    const skills = [
        {
            title:<FaHtml5 className='text-5xl text-white text-center'/>,
            description :  "HTML 5",
            link : '#'
        },
        {
            title:<FaCss3 className='text-5xl text-white'/>,
            description :  "CSS 3",
            link : '#'
        },
        {
            title:<FaBootstrap className='text-5xl text-white'/>,
            description :  "Bootstrap",
            link : '#'
        },
        {
            title:<BiLogoTailwindCss className='text-5xl text-white'/>,
            description :  "Tailwind CSS",
            link : '#'
        },
        {
            title:<FaJs className='text-5xl text-white'/>,
            description :  "Javascript",
            link : '#'
        },
        {
            title:<DiJqueryLogo className='text-5xl text-white'/>,
            description :  "Jquery",
            link : '#'
        },
        {
            title:<FaReact className='text-5xl text-white'/>,
            description :  "React JS",
            link : '#'
        },
        {
            title:<RiNextjsLine className='text-5xl text-white'/>,
            description :  "Next JS",
            link : '#'
        },
        {
            title:<FaPython className='text-5xl text-white'/>,
            description :  "Python",
            link : '#'
        },
        {
            title:<SiDjango className='text-5xl text-white'/>,
            description :  "Django",
            link : '#'
        },
        {
            title:<SiFastapi className='text-5xl text-white'/>,
            description :  "Fast Api",
            link : '#'
        },
        {
            title:<SiRedis className='text-5xl text-white'/>,
            description :  "Redis",
            link : '#'
        }
        

    ]

    return(
       <section id="skills" className="w-full h-dvh py-12 px-32">
        
        <div className="container  ">
            {/* content */}
            <div className="flex justify-center flex-col items-center mb-20">
                <h3 className="text-white text-5xl  font-bold ">My <span className="text-emerald-400">Skills</span></h3>
                <p className="text-slate-100 font-semibold ">Here are my skills which I have working on for 4+ years</p>
            </div>

            <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={skills} className='bg-transparent' />
    </div>
        </div>

       </section>
    )
}


export default Skills