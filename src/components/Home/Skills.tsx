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
      title: <FaHtml5 className="text-5xl text-white text-center" />,
      description: "HTML 5",
    },
    {
      title: <FaCss3 className="text-5xl text-white" />,
      description: "CSS 3",
    },
    {
      title: <FaBootstrap className="text-5xl text-white" />,
      description: "Bootstrap",
    },
    {
      title: <BiLogoTailwindCss className="text-5xl text-white" />,
      description: "Tailwind CSS",
    },
    {
      title: <FaJs className="text-5xl text-white" />,
      description: "Javascript",
    },
    {
      title: <DiJqueryLogo className="text-5xl text-white" />,
      description: "Jquery",
    },
    {
      title: <FaReact className="text-5xl text-white" />,
      description: "React JS",
    },
    {
      title: <RiNextjsLine className="text-5xl text-white" />,
      description: "Next JS",
    },
    {
      title: <FaPython className="text-5xl text-white" />,
      description: "Python",
    },
    {
      title: <SiDjango className="text-5xl text-white" />,
      description: "Django",
    },
    {
      title: <SiFastapi className="text-5xl text-white" />,
      description: "Fast Api",
    },
    {
      title: <SiRedis className="text-5xl text-white" />,
      description: "Redis",
    },
  ];

  return (
    <section id="skills" className="w-full h-dvh mt-15 px-2">
      <div className="container  ">
        {/* content */}
        <div className="flex justify-center flex-col items-center mb-10">
          <h3 className="text-white text-5xl  font-bold mb-3">
            My <span className="text-emerald-400">Skills</span>
          </h3>
          <p className="text-slate-100 font-semibold">
            Here are my skills which I have working on for 4+ years
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
