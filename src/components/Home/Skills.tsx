// importing third party  modeuls  or libararies
"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiDjango, SiRedis, SiFastapi } from "react-icons/si";

const Skills: React.FC = (): JSX.Element => {
  // // Define interface for skills
  // interface Skill {
  //     title: string;
  //     icon : JSX.Element;
  // }

  const skills = [
    {
      title: <FaHtml5 className="text-5xl text-emerald-400 text-center" />,
      description: "HTML 5",
    },
    {
      title: <FaCss3 className="text-5xl text-emerald-400 " />,
      description: "CSS 3",
    },
    {
      title: <FaBootstrap className="text-5xl text-emerald-400" />,
      description: "Bootstrap",
    },
    {
      title: <BiLogoTailwindCss className="text-5xl text-emerald-400" />,
      description: "Tailwind CSS",
    },
    {
      title: <FaJs className="text-5xl text-emerald-400" />,
      description: "Javascript",
    },
    {
      title: <DiJqueryLogo className="text-5xl text-emerald-400" />,
      description: "Jquery",
    },
    {
      title: <FaReact className="text-5xl text-emerald-400" />,
      description: "React JS",
    },
    {
      title: <RiNextjsLine className="text-5xl text-emerald-400" />,
      description: "Next JS",
    },
    {
      title: <FaPython className="text-5xl text-emerald-400" />,
      description: "Python",
    },
    {
      title: <SiDjango className="text-5xl text-emerald-400" />,
      description: "Django",
    },
    {
      title: <SiFastapi className="text-5xl text-emerald-400" />,
      description: "Fast Api",
    },
    {
      title: <SiRedis className="text-5xl text-emerald-400" />,
      description: "Redis",
    },
  ];

  return (
    <section id="skills" className=" w-full h-auto lg:px-28 py-20 md:py-24  px-4  flex  lg:flex-row flex-col justify-center lg:justify-normal items-center gap-14 bg-slate-900 mt-64 md:mt-10">
      <div className="container  ">
        {/* content */}
        <div className="flex justify-center flex-col items-center mb-10">
          <h3 className="text-white text-5xl  font-bold mb-3">
            My <span className="text-emerald-400">Skills</span>
          </h3>
          <p className="text-slate-100 font-semibold text-center">
            Here are my skills which I have working on for 4+ years
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-3">
          <HoverEffect items={skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
