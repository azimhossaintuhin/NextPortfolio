 "use client"
// importing moudles and components
import Lottie from "react-lottie-player";
import Card from "../Card"
import aboutME from "@/../public/lottie_files/aboutMe.json"

const About = ():JSX.Element => {
  // data interface
  interface CardData {
    title: string;
    description: string;
    image: string;
  }
  // cards data
  const cardsdata:CardData[] = [
    {
      title:"Card 1",
      description:"Card 1 description",
      image:"/images/card1.jpg"
    },
    {
      title:"Card 2",
      description:"Card 2 description",
      image:"/images/card2.jpg"
    },
    {
      title:"Card 3",
      description:"Card 3 description",
      image:"/images/card3.jpg"
    },
  ] 
  return (
 <section className="w-full  lg:px-28 px-10 py-24   flex  lg:flex-row flex-col justify-center lg:justify-normal items-center gap-14 bg-slate-900"> 
 {/* context */}
 <div className="lg:w-1/2 w-full flex flex-col justify-center lg:justify-start  lg:items-start items-center text-center lg:text-start  leading-7  ">
 <div className="">
 <Lottie
     loop={false}
     animationData={aboutME}
     play={true}
     style={{width:"60px",height:"60px" , display:"inline-block"}}
     />
 </div>
 
    <h2 className="text-5xl font-bold "><span className="text-white">About</span> <span className=" text-emerald-500">Me
    </span>
    {/* lottie animation */}
  
     </h2>
    <p className="text-white text-center lg:text-justify text-lg">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel libero. Dolore illo molestiae quod aliquam laborum aspernatur quas esse eos, sapiente nesciunt reprehenderit recusandae, eius beatae officia, repellendus facere!
    </p>
 </div>
 <div className="md:grid md:grid-cols-2 md:gap-4  lg:w-1/2  w-full">
 
       {/* cards */}
      {cardsdata.map((card:CardData , index:number):JSX.Element => ( <Card key={index}  title={card.title} description={card.description} image={card.image} counter={index}></Card>))}
      
    </div>
    </section>   
  )
}

export default About
