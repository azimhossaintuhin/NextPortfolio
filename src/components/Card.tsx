// importing modules and components
import { Meteors } from "./ui/meteors";
import Image, { StaticImageData } from "next/image";
import React from "react";

// creating props interface
interface CardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  counter: number;
}

const Card: React.FC<CardProps> = ({ title, description, image, counter }): JSX.Element => {
  return (
   
    <div className={`relative overflow-hidden border-2  px-2 py-2 border-emerald-400 rounded bg-gray-900 ${counter === 2 ? "col-span-1 md:col-span-2" : "col-span-1"}  shadow-lg md:mb-0 mb-4` }>
      <div className={`z-10 px-3 py-2 ${counter===2?" flex flex-col justify-normal md:items-center md:justify-center": ""}`}>
      <Image src={image} alt="card image" width={60} height={60} className="rounded z-50" />
      <h2 className="text-white text-xl font-bold mt-4">{title}</h2>
      <p className="text-white text-md mt-4">{description}</p>
      </div>
     
      <Meteors number={20}/>
    </div>
  );
}

export default Card;
