"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { FlipWords } from "./ui/flip-words";
 
import {cn} from "@/utils/cn";

export default function Hero() {
  const words = ["Better", "Cute", "Beautiful" , "Responsive"];
  return (
    <div className=" absolute top-0  w-full  -z-20">
    <div className=" h-lvh relative f w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />
      {/* color bg components */}
      <Boxes />
      
      {/* content */}
      <div className="w-dvw flex justify-between px-32 gap-2 items-center   ">
      <div className="z-20 text-gray-100 flex flex-col gap-3 w-1/2  ">
        <span className=" text-emerald-400 text-2xl font-bold" >Hey, </span>
        <h4 className="text-3xl font-bold ">Want To Build <FlipWords words={words} className=" text-emerald-400 " /> </h4>
        <h1 className="text-5xl font-bold text-nowrap">Mordern Web Application</h1>
        

      </div>

    {/* image */}
    <div className="z-20">image</div>
      </div>
     
    </div>
    </div>
  );
}
