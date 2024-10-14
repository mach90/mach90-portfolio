/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { IoExtensionPuzzle } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";
import { LuCode2 } from "react-icons/lu";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectContainerStyle = "relative font-default";

const projectInfosStyle = "absolute bottom-0 right-0 p-4 text-xs md:text-xl flex flex-col items-end gap-2 md:gap-4 col-span-full lg:col-span-full";

const projectInfosTitleStyle = "font-heading font-black uppercase text-3xl";

const projectInfosProgressContainerStyle = "flex flex-row w-max font-heading";
const projectInfosProgressStatusStyle = "bg-dark text-textlight px-2 py-1";
const projectInfosProgressPercentageStyle = "bg-medium text-textdark px-2 py-1";
const projectInfosDescriptionStyle = "font-medium text-lg";
const projectInfosTechsStyle = "flex flex-col gap-2";
const projectInfosTechStyle = "flex flex-row gap-2 font-medium";
const projectInfosLinksStyle = "flex flex-row gap-2 bg-accent px-2 py-1 text-textdark w-max  items-center hover:bg-light border border-dark";

const projectScreenshotBigContainerStyle = "col-span-4 md:col-span-3 lg:col-span-2 h-full";
// const projectScreenshotSmallContainerStyle = "col-span-0 md:col-span-1 h-full";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECT COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function ProjectOld({title, description, status, version, techs, src1, link, github}) {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={projectContainerStyle}>
            
            <div className={projectScreenshotBigContainerStyle}>
                <img src={src1} alt={title} />
            </div>

            <div className={projectInfosStyle}>
                {/* <h3 className={projectInfosTitleStyle}>{title}</h3> */}
                
                {/* <div className={projectInfosProgressContainerStyle}>
                    <p className={projectInfosProgressStatusStyle}>{status}</p>
                    <p className={projectInfosProgressPercentageStyle}>{version}</p>
                </div> */}

                {/* <p className={projectInfosDescriptionStyle}>{description}</p> */}

                {/* <div className={projectInfosTechsStyle}>
                    {techs.map((tech) => {
                        return <div key={tech} className={projectInfosTechStyle}><IoExtensionPuzzle /> {tech}</div>
                    })}
                </div> */}

                {link && <a className={projectInfosLinksStyle} href={link} target="_blank"><HiExternalLink /> Live version</a>}
                {github && <a className={projectInfosLinksStyle} href={github} target="_blank"><LuCode2 /> Source code</a>}
            </div>

        </div>
    );
}
