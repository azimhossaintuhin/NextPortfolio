"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import {cn} from "@/utils/cn";

export default function Hero() {
  return (
    <div className=" absolute top-0  w-full  -z-20">
    <div className=" h-lvh relative f w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="md:text-4xl text-xl text-white relative z-20">
        Hi I Am Azim Hossain Tuhin
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
    </div>
  );
}
