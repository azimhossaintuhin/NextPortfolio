// importing moudles and components
import Card from "../Card"

const About = ():JSX.Element => {
  
  // cards data
  const cardsdata = [
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
 <section className="w-full  px-28   flex justify-center items-center gap-14 bg-slate-900"> 
 {/* context */}
 <div className="w-1/2">
    <h2 className="text-5xl font-bold"><span className="text-white">About</span> <span className=" text-emerald-500">Me</span></h2>
    <p className="text-white text-justify text-lg">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel libero. Dolore illo molestiae quod aliquam laborum aspernatur quas esse eos, sapiente nesciunt reprehenderit recusandae, eius beatae officia, repellendus facere!
    </p>
 </div>
 <div className="grid grid-cols-2 gap-4 w-1/2 ">
      {/* cards */}
      {cardsdata.map((card , index) => ( <Card key={index}  title={card.title} description={card.description} image={card.image} counter={index}></Card>))}
     
      
    </div>
    </section>   
  )
}

export default About
