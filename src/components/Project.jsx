/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { IoExtensionPuzzle } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";
import { LuCode2 } from "react-icons/lu";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectContainerStyle = "font-default grid grid-cols-3 gap-8 px-12";

const projectInfosStyle = "flex flex-col gap-4 col-span-full lg:col-span-1";

const projectInfosTitleStyle = "font-heading font-black uppercase text-3xl";

const projectInfosProgressContainerStyle = "flex flex-row w-max font-heading";
const projectInfosProgressStatusStyle = "bg-dark text-textlight px-2 py-1";
const projectInfosProgressPercentageStyle = "bg-medium text-textdark px-2 py-1";
const projectInfosDescriptionStyle = "font-medium text-lg";
const projectInfosTechsStyle = "flex flex-col gap-2";
const projectInfosTechStyle = "flex flex-row gap-2 font-medium";
const projectInfosLinksStyle = "flex flex-row gap-2 bg-dark px-2 py-1 text-textlight w-max hover:bg-alternatedark";

const projectScreenshotBigContainerStyle = "col-span-4 md:col-span-3 lg:col-span-2 h-full";
// const projectScreenshotSmallContainerStyle = "col-span-0 md:col-span-1 h-full";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECT COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Project({title, description, status, version, techs, src1, link, github}) {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={projectContainerStyle}>
            
            <div className={projectScreenshotBigContainerStyle}>
                <img src={src1} alt={title} />
            </div>

            <div className={projectInfosStyle}>
                <h3 className={projectInfosTitleStyle}>{title}</h3>
                
                <div className={projectInfosProgressContainerStyle}>
                    <p className={projectInfosProgressStatusStyle}>{status}</p>
                    <p className={projectInfosProgressPercentageStyle}>{version}</p>
                </div>

                <p className={projectInfosDescriptionStyle}>{description}</p>

                <div className={projectInfosTechsStyle}>
                    {techs.map((tech) => {
                        return <div key={tech} className={projectInfosTechStyle}><IoExtensionPuzzle /> {tech}</div>
                    })}
                </div>

                {link && <a className={projectInfosLinksStyle} href={link} target="_blank"><HiExternalLink /> See live version</a>}
                {github && <a className={projectInfosLinksStyle} href={github} target="_blank"><LuCode2 /> See source code</a>}
            </div>

        </div>
    );
}
