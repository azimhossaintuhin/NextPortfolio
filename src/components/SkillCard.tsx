"use client";

import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons";

interface SkillCardProps {
    title: string;
    icon :  IconType;
}

const SkillCard: React.FC<SkillCardProps> =  ({title , icon}):JSX.Element => {
    return (
        <div>
            <p className="text-white">Cards data </p>
        </div>
    )
}

export default SkillCard