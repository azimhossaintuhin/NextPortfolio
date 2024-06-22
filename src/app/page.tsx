// importing components
import Image from "next/image";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";



export default function Home() : JSX.Element {
return (
<>
{/* hero components */}
<Hero></Hero>
<About></About>
</>
)
}
