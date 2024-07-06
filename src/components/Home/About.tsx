"use client";
// importing moudles and components
import Lottie from "react-lottie-player";
import Card from "../Card";
// importing images and lottie files
import aboutME from "@/../public/lottie_files/aboutMe.json";
import ux from '@/../public/images/ux.png'
import web from '@/../public/images/backend.png'
import cyber_security from '@/../public/images/cyber-security.png'
import { StaticImageData } from "next/image";


const About = (): JSX.Element => {
  // data interface
  interface CardData {
    title: string;
    description: string;
    image: StaticImageData | string; //give image or any link of the image 
  }
  // cards data
  const cardsdata: CardData[] = [
    {
      title: "Frontend Development",
      description: "Responsive and interactive web design.",
      image: ux ,
    },
    {
      title: "Backend Development",
      description: "Backend development with Django and Fast Api.",
      image: web ,
    },
    {
      title: "Cyber Security",
      description: "Cyber security and Web Security.",
      image: cyber_security,
    },
  ];
  return (
    <section id="aboutME" className="w-full max-h-dvh lg:px-28 py-20 md:py-24  px-4  flex  lg:flex-row flex-col justify-center lg:justify-normal items-center gap-14 bg-slate-900 mt-64 md:mt-10">
      {/* context */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center lg:justify-start  lg:items-start items-center text-center lg:text-start  leading-7  ">
        <div className="">
          <Lottie
            loop={false}
            animationData={aboutME}
            play={true}
            style={{ width: "60px", height: "60px", display: "inline-block" }}
          />
        </div>

        <h2 className="text-5xl font-bold ">
          <span className="text-white">About</span>{" "}
          <span className=" text-emerald-500">Me</span>
          {/* lottie animation */}
        </h2>
        <p className="text-white text-center lg:text-justify text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          vel libero. Dolore illo molestiae quod aliquam laborum aspernatur quas
          esse eos, sapiente nesciunt reprehenderit recusandae, eius beatae
          officia, repellendus facere!
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4    w-full">
        {/* cards */}
        {cardsdata.map(
          (card: CardData, index: number): JSX.Element => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              counter={index}
            ></Card>
          )
        )}
      </div>
    </section>
  );
};

export default About;
