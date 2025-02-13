/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { useState } from "react";
import Modal from "./Modal";
import { FaGithub, FaLink } from "react-icons/fa";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const projectGridContainerStyle = "relative flex flex-col cursor-zoom-in";
const projectGridImageStyle = "inset-0 shadow-md ";
const projectGridInfosContainerStyle = "absolute flex flex-col items-start justify-end p-4 md:p-4 lg:p-6 xl:p-8 gap-2 bg-gradient-to-bl from-[#212121dd] via-[#212121] to-[#212121] h-full w-full transition-opacity duration-300 ease-in-out";
const projectGridInfosTitleStyle = "font-heading font-bold text-darkHeading";
const projectGridInfosTechStyle = "flex flex-row items-center gap-1 font-default font-normal text-darkText text-end";
const projectGridInfosDescriptionStyle = "font-default font-normal text-darkText text-xs max-w-sm text-justify";
const projectInfosLinksStyle = "flex flex-row gap-2 p-2 rounded-full font-default bg-lightPrimary text-black hover:text-darkPrimary hover:bg-lightText duration-200 text-black w-max items-center text-lg";


/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROJECT COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function Project({title, description, status, team, version, techs, thumbnail, screenshot, link, github}) {
    /* //////////////////////////////////////////////////
    STATE
    ////////////////////////////////////////////////// */
    const [showInfos, setShowInfos] = useState(false);
    const [showModal, setShowModal] = useState(false);

    /* //////////////////////////////////////////////////
    FUNCTIONS
    ////////////////////////////////////////////////// */
    function handleMouseEnter() {
        setShowInfos(true);
    }

    function handleMouseLeave() {
        setShowInfos(false);
    }

    function handleShowModal(e) {
        // Check if the target element or any of its children have the specified IDs
        if (
          !e.target.closest('#link-project') &&
          !e.target.closest('#github-project')
        ) {
          setShowModal(!showModal);
          if (showInfos) setShowInfos(false);
        }
      }

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={projectGridContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleShowModal(e)}>
            <img src={thumbnail} alt={title} className={projectGridImageStyle} />
            <div className={`${projectGridInfosContainerStyle} ${showInfos ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className={projectGridInfosTitleStyle}>{title}</h3>
                <p className={projectGridInfosDescriptionStyle}>{description}</p>
                {/* <p className={projectGridInfosTechStyle}><IoExtensionPuzzle size={12}/> {techs.at(0)}</p> */}
                <div className="flex flex-row gap-2">
                    {link && <a id="link-project" className={projectInfosLinksStyle} href={link} target="_blank" rel="noopener noreferrer" ><FaLink /></a>}
                    {github && <a id="github-project" className={projectInfosLinksStyle} href={github} target="_blank" rel="noopener noreferrer" ><FaGithub /></a>}
                </div>
            </div>
            <div className="absolute right-0 top-2 uppercase text-sm bg-stone-700 text-stone-300 pr-2 pl-6 py-1 [clip-path:polygon(100%_0,100%_50%,100%_100%,0%_100%,10%_50%,0%_0%)] shadow-md shadow-stone-900 font-bold font-default">{team}</div>
            {showModal && <Modal screenshot={screenshot} />}
        </div>
    );
}
