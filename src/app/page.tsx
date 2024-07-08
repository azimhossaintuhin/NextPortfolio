// importing components
import Image from "next/image";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Portfolio from "@/components/Home/Portfolio";
import Reviews from "@/components/Home/Reviews";

export default function Home() : JSX.Element {
return (
<>
{/* hero components */}
<Hero></Hero>
<About></About>
<Skills></Skills>
<Portfolio></Portfolio>
<Reviews></Reviews>
</>
)
}
