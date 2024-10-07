/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { IoExtensionPuzzle } from "react-icons/io5";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectGridContainerStyle = "font-default flex flex-col gap-2 border border-medium p-2 rounded-md hover:bg-white hover:shadow-md";
const projectGridInfosContainerStyle = "relative flex flex-col z-0";
const projectGridInfosTitleStyle = "font-heading font-black uppercase text-lg flex flex-row w-[50%]";
const projectGridInfosTechStyle = "flex flex-row items-center text-xs text-textdark absolute top-1 right-0 font-bold gap-1 z-0";
const projectGridInfosDescriptionStyle = "font-medium text-sm border-t border-medium pt-2";

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
                    <span className={projectGridInfosTechStyle}><IoExtensionPuzzle size={12}/> {techs}</span>
                </h3>
                <p className={projectGridInfosDescriptionStyle}>{description}</p>
            </div>
        </div>
    );
}
