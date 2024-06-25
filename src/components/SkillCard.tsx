"use client";

import { IconType } from "react-icons";

interface SkillCardProps {
    title: string;
    icon :  JSX.Element;
}

const SkillCard: React.FC<SkillCardProps> =  ({title , icon}):JSX.Element => {
    return (
        <div className="px-10 py-5 border-2 border-green-400 rounded-md " >
            <div className="flex justify-center items-center">
                {icon}
            </div>
            <h3 className="text-white text-center text-2xl font-semibold mt-2">{title}</h3>
        </div>
    )
}

export default SkillCard