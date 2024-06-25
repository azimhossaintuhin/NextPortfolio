// importing third party  modeuls  or libararies 
import SkillCard from '@/components/SkillCard'

const  Skills: React.FC = ():JSX.Element => {
    return(
       <section id="skills" className="w-full h-dvh py-9 px-32">
        
        <div className="container  ">
            {/* content */}
            <div className="flex justify-center flex-col items-center mb-20">
                <h3 className="text-white text-5xl  font-bold ">My <span className="text-emerald-400">Skills</span></h3>
                <p className="text-slate-100 font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div className="grid grid-cols-4 w-full gap-y-10">
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
            </div>
        </div>

       </section>
    )
}


export default Skills