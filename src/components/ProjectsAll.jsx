/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
DEPENDENCIES
////////////////////////////////////////////////// */
import { useState } from 'react';

/* //////////////////////////////////////////////////
COMPONENTS
////////////////////////////////////////////////// */
import Project from './Project';

/* //////////////////////////////////////////////////
DATA
////////////////////////////////////////////////// */
import projectsData from "../data/projectsData";

/* //////////////////////////////////////////////////
ICONS
////////////////////////////////////////////////// */
import { FaPuzzlePiece, FaToolbox } from 'react-icons/fa';
import { TbDots, TbWorldWww } from 'react-icons/tb';
import { IoGameController, IoLayers } from 'react-icons/io5';
import { FaPaintbrush } from 'react-icons/fa6';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const projectsContainerStyle = "px-[10%] xl:px-[20%] py-40 flex flex-col gap-24 justify-center items-center bg-lightSecondary dark:bg-darkSecondary border-b border-lightSecondaryBorder dark:border-darkSecondaryBorder overflow-x-hidden";
const projectsContainerTitleContainerStyle = "gap-2 flex flex-col md:flex-row w-full gap-4 md:gap-12 md:items-start";
const projectsContainerTitleStyle = "text-5xl xl:text-6xl font-black uppercase font-heading text-lightText dark:text-darkText flex flex-col";
const projectsContainerTitleSpanStyle = "text-lightHeading dark:text-darkHeading";
const projectsContainerPhraseStyle = "text-xl md:text-2xl font-default font-normal italic text-lightText dark:text-darkText";
const projectsContainerMenuStyle = "flex flex-col justify-center items-center gap-4";
const projectsContainerMenuTabsStyle = "flex flex-row items-center border-2 border-lightSecondaryBorder dark:border-darkSecondaryBorder rounded-xl font-heading font-medium text-md md:text-2xl lg:text-3xl text-lightSubheading dark:text-darkSubheading";
const projectsContainerMenuTabSubtitleStyle = "font-medium font-heading text-lightSubheading dark:text-darkSubheading text-sm md:text-lg lg:text-xl"
const projectsContainerMenuTabInactiveStyle = "py-2 px-4 hover:text-lightHeading dark:hover:text-darkHeading duration-200";
const projectsContainerMenuTabActiveStyle = "py-2 px-4 text-lightHeading dark:text-darkHeading duration-200 h-full";
const projectsGridContainerStyle = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
ALL PROJECTS COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function ProjectsAll() {
    /* //////////////////////////////////////////////////
    STATE
    ////////////////////////////////////////////////// */
    const [activeTab, setActiveTab] = useState("All projects");

    function handleActiveTab(tab) {
        setActiveTab(tab);
    };

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <section className={projectsContainerStyle}>
            <div className={projectsContainerTitleContainerStyle}>
                <h2 className={projectsContainerTitleStyle}>All my <span className={projectsContainerTitleSpanStyle}>Projects</span></h2>
                <p className={projectsContainerPhraseStyle}>Personal or guided projects from online courses by some of the best-rated instructors. Each project was essential in helping me learn and apply key concepts.</p>
            </div>
            
            <div className={projectsContainerMenuStyle}>
                <div className={projectsContainerMenuTabsStyle}>
                    <button id="all-category" className={activeTab === "All projects" ? projectsContainerMenuTabActiveStyle : projectsContainerMenuTabInactiveStyle} onClick={() => handleActiveTab("All projects")}><TbDots /></button>
                    <button id="apps-category" className={activeTab === "Apps" ? projectsContainerMenuTabActiveStyle : projectsContainerMenuTabInactiveStyle} onClick={() => handleActiveTab("Apps")}><IoLayers /></button>
                    <button id="websites-category" className={activeTab === "Websites" ? projectsContainerMenuTabActiveStyle : projectsContainerMenuTabInactiveStyle} onClick={() => handleActiveTab("Websites")}><TbWorldWww /></button>
                    <button id="components-category" className={activeTab === "Components" ? projectsContainerMenuTabActiveStyle : projectsContainerMenuTabInactiveStyle} onClick={() => handleActiveTab("Components")}><FaPuzzlePiece /></button>
                    <button id="tools-category" className={activeTab === "Tools" ? projectsContainerMenuTabActiveStyle : projectsContainerMenuTabInactiveStyle} onClick={() => handleActiveTab("Tools")}><FaToolbox /></button>
                    <button id="games-category" className={activeTab === "Games" ? projectsContainerMenuTabActiveStyle : projectsContainerMenuTabInactiveStyle} onClick={() => handleActiveTab("Games")}><IoGameController /></button>
                    <button id="art-category" className={activeTab === "Creative" ? projectsContainerMenuTabActiveStyle : projectsContainerMenuTabInactiveStyle} onClick={() => handleActiveTab("Creative")}><FaPaintbrush /></button>
                </div>

                <h3 className={projectsContainerMenuTabSubtitleStyle}>{activeTab}</h3>
            </div>

            <div className={projectsGridContainerStyle}>
                {
                    projectsData.filter((proj) => proj.type.includes(activeTab)).map((proj, index) => {
                        return <Project key={index} {...proj} />
                    })
                }
            </div>
        </section>
    );
};

export default ProjectsAll;
