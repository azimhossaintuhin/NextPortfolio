"use client";
import React from "react";
// Components library 
import { Boxes } from "./ui/background-boxes";
import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { cn } from "@/utils/cn";
// Third-party library
import Lottie from 'react-lottie-player';
// Importing assets
import hero_animation from "../../public/lottie_files/hero.json";

export default function Hero() {
  const words = ["Better", "Cute", "Beautiful", "Responsive"];
  return (
    <div className="absolute top-0 w-full -z-20">
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        {/* Background components */}
        <Boxes />

        {/* Content */}
        <div className="w-full h-full flex flex-col md:flex-row justify-between px-4 md:px-32 items-center mt-[18rem] md:mt-[5rem] z-20 text-wrap md:text-nowrap ">
          <div className="text-gray-100 flex flex-col gap-3 w-full md:w-1/2 text-center md:text-left">
            <span className="text-emerald-400 text-2xl font-bold">Hey,</span>
            <h4 className="text-2xl md:text-3xl  font-bold text-wrap md:text-nowrap">
              Want To Build <FlipWords words={words} className="text-emerald-400" /> 
            </h4>
            <h1 className="text-3xl md:text-5xl font-bold">Modern Web Application</h1>
            <p className="text-lg text-gray-300 mt-2 text-wrap">
              Join us in creating stunning, responsive web applications with beautiful designs and seamless performance.
            </p>

            {/* buttons */}
            <div className="flex  gap-3 justify-center md:justify-start">
              <HoverBorderGradient
                containerClassName="rounded-full bg-transparent outline-none focus:outline-none"
                as="button"
                className="text-white flex items-center space-x-2"
              >
                Contact Me
              </HoverBorderGradient>

              <HoverBorderGradient
                containerClassName="rounded-full outline-none focus:outline-none"
                as="button"
                className="bg-emerald-500 text-white flex items-center space-x-2"
              >
                Download CV
              </HoverBorderGradient>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="z-20 mt-8 md:mt-0">
            <Lottie
              loop
              animationData={hero_animation}
              play
              style={{ width: '100%', maxWidth: 500, height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}