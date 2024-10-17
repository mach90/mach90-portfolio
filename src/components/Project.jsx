/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { LuCode2 } from "react-icons/lu";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const projectGridContainerStyle = "relative flex flex-col";
const projectGridImageStyle = "inset-0 shadow-md ";
const projectGridInfosContainerStyle = "absolute flex flex-col items-end justify-end p-4 gap-2 bg-gradient-to-tl from-[#212121] via-[#212121dd] to-[#212121dd] h-full w-full transition-opacity duration-300 ease-in-out";
const projectGridInfosTitleStyle = "font-heading font-bold text-lightTertiaryAccent";
const projectGridInfosTechStyle = "flex flex-row items-center gap-1 font-default font-normal text-lightTertiaryAccent text-end";
const projectGridInfosDescriptionStyle = "font-default font-normal text-white text-end text-xs";
const projectInfosLinksStyle = "flex flex-row gap-2 px-1 font-default bg-lightTertiaryAccent hover:bg-darkTertiaryAccent duration-200 text-black w-max items-center text-sm";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROJECT COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function Project({title, description, status, version, techs, thumbnail, link, github}) {
    /* //////////////////////////////////////////////////
    STATE
    ////////////////////////////////////////////////// */
    const [showInfos, setShowInfos] = useState(false);

    /* //////////////////////////////////////////////////
    FUNCTIONS
    ////////////////////////////////////////////////// */
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
            <div className={`${projectGridInfosContainerStyle} ${showInfos ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className={projectGridInfosTitleStyle}>{title}</h3>
                <p className={projectGridInfosDescriptionStyle}>{description}</p>
                {/* <p className={projectGridInfosTechStyle}><IoExtensionPuzzle size={12}/> {techs.at(0)}</p> */}
                {link && <a className={projectInfosLinksStyle} href={link} target="_blank" rel="noopener noreferrer"><HiExternalLink /> Live version</a>}
                {github && <a className={projectInfosLinksStyle} href={github} target="_blank" rel="noopener noreferrer"><LuCode2 /> Source code</a>}
            </div>
        </div>
    );
}
