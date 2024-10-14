/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { LuCode2 } from "react-icons/lu";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectGridContainerStyle = "relative flex flex-col";
const projectGridImageStyle = "inset-0 rounded-lg shadow-md ";
const projectGridInfosContainerStyle = "absolute flex flex-col items-end justify-end p-4 gap-2 rounded-lg bg-gradient-to-tl from-[#212121] via-[#212121dd] to-[#212121dd] h-full w-full";
const projectGridInfosTitleStyle = "font-heading font-bold text-darkValidation";
const projectGridInfosTechStyle = "flex flex-row items-center gap-1 font-default font-normal text-darkValidation text-end";
const projectGridInfosDescriptionStyle = "font-default font-normal text-white text-end text-xs";
const projectInfosLinksStyle = "flex flex-row gap-2 px-1 font-default bg-darkValidation hover:bg-white duration-200 text-black w-max items-center text-sm";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECT COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Project({title, description, status, version, techs, thumbnail, link, github}) {
    const [showInfos, setShowInfos] = useState(false);

    function handleMouseEnter() {
        setShowInfos(true);
    }

    function handleMouseLeave() {
        setShowInfos(false);
    }

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={projectGridContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={thumbnail} alt={title} className={projectGridImageStyle} />
            {showInfos && <div className={projectGridInfosContainerStyle}>
                <h3 className={projectGridInfosTitleStyle}>{title}</h3>
                {/* <p className={projectGridInfosTechStyle}><IoExtensionPuzzle size={12}/> {techs.at(0)}</p> */}
                <p className={projectGridInfosDescriptionStyle}>{description}</p>
                {link && <a className={projectInfosLinksStyle} href={link} target="_blank"><HiExternalLink /> Live version</a>}
                {github && <a className={projectInfosLinksStyle} href={github} target="_blank"><LuCode2 /> Source code</a>}
            </div>}
        </div>
    );
}
