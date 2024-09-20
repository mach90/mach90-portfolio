/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { Cpu, Link, Code } from "lucide-react";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectContainerStyle = "font-default grid grid-cols-4 gap-2 h-[600px]";

const projectInfosStyle = "flex flex-col gap-4 col-span-1";

const projectInfosTitleStyle = "font-heading font-black uppercase text-3xl";

const projectInfosProgressContainerStyle = "flex flex-row w-max font-heading";
const projectInfosProgressStatusStyle = "bg-dark text-textlight px-2 py-1";
const projectInfosProgressPercentageStyle = "bg-medium text-textdark px-2 py-1";
const projectInfosDescriptionStyle = "font-medium text-lg";
const projectInfosTechsStyle = "flex flex-col gap-2";
const projectInfosTechStyle = "flex flex-row gap-2 font-medium";
const projectInfosLinksStyle = "flex flex-row gap-2 bg-dark px-2 py-1 text-textlight w-max";

const projectScreenshotBigContainerStyle = "col-span-2 h-full";
const projectScreenshotSmallContainerStyle = "col-span-1 h-full";

const projectScreenshotImage = "";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECT COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Project({title, description, status, version, techs, src1, src2, link, github}) {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={projectContainerStyle}>
            
            <div className={projectInfosStyle}>
                <h1 className={projectInfosTitleStyle}>{title}</h1>
                
                <div className={projectInfosProgressContainerStyle}>
                    <p className={projectInfosProgressStatusStyle}>{status}</p>
                    <p className={projectInfosProgressPercentageStyle}>{version}</p>
                </div>

                <p className={projectInfosDescriptionStyle}>{description}</p>

                <div className={projectInfosTechsStyle}>
                    {techs.map((tech) => {
                        return <div key={tech} className={projectInfosTechStyle}><Cpu /> {tech}</div>
                    })}
                </div>

                {link && <a className={projectInfosLinksStyle} href={link} target="_blank"><Link /> See live version</a>}
                {github && <a className={projectInfosLinksStyle} href={github} target="_blank"><Code /> See source code</a>}
            </div>

            <div className={projectScreenshotBigContainerStyle}>
                <img src={src1} alt={title} className={projectScreenshotImage}/>
            </div>

            <div className={projectScreenshotSmallContainerStyle}>
                <img src={src2} alt={title} className={projectScreenshotImage}/>
            </div>

        </div>
    );
}
