// importing modules and components
import { Meteors } from "./ui/meteors";
import Image from "next/image";
import React from "react";

// creating props interface
interface CardProps {
  title: string;
  description: string;
  image: string;
  counter: number;
}

const Card: React.FC<CardProps> = ({ title, description, image, counter }): JSX.Element => {
  return (
    <div className={`relative overflow-hidden border-2 px-28 py-2 border-emerald-400 rounded bg-gray-900 flex flex-col justify-center items-center ${counter === 2 ? "col-span-2" : ""}  shadow-lg md:mb-0 mb-4` }>
      <Image src={image} alt="card image" width={100} height={100} className="rounded-full" />
      <h2 className="text-white text-2xl font-bold mt-4">{title}</h2>
      <p className="text-white text-lg mt-4">{description}</p>
      <Meteors number={20} />
    </div>
  );
}

export default Card;
