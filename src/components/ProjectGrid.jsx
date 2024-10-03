/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { Cpu, Link, Code } from "lucide-react";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectGridContainerStyle = "font-default flex flex-col gap-2";
const projectGridInfosContainerStyle = "relative";
const projectGridInfosTitleStyle = "font-heading font-black uppercase text-lg flex flex-row gap-2 w-[50%]";
const projectGridInfosDescriptionStyle = "font-medium text-sm";
const projectGridInfosTechStyle = "flex flex-row gap-2 items-center text-xs border-2 rounded-lg border-dark text-textdark px-2 py-1 absolute top-0 right-0";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECT COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function ProjectGrid({title, description, status, version, techs, src1, src2, link, github}) {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={projectGridContainerStyle}>
            <img src={src1} alt={title} />
            <div className={projectGridInfosContainerStyle}>
                <h3 className={projectGridInfosTitleStyle}>
                    {title}
                    <span className={projectGridInfosTechStyle}><Cpu size={12}/> {techs}</span>
                </h3>
                <p className={projectGridInfosDescriptionStyle}>{description}</p>
            </div>
        </div>
    );
}
