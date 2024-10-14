/* ////////////////////////////////////////////////////////////////////////////////////////////////////
LOGOS IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import LogoJavascript from '../img/techlogos/techlogo-js.png';
import LogoReact from '../img/techlogos/techlogo-react.png';
import LogoWebflow from '../img/techlogos/techlogo-webflow.png';
import LogoFigma from '../img/techlogos/techlogo-figma.png';
import LogoTailwind from '../img/techlogos/techlogo-tailwind.png';
import LogoSupabase from '../img/techlogos/techlogo-supabase.png';
import LogoNodejs from '../img/techlogos/techlogo-nodejs.png';
import LogoMongodb from '../img/techlogos/techlogo-mongodb.png';
import LogoPhotoshop from '../img/techlogos/techlogo-ps.png';
import LogoIllustrator from '../img/techlogos/techlogo-ai.png';
import LogoBlender from '../img/techlogos/techlogo-blender.png';
import LogoSubstancePainter from '../img/techlogos/techlogo-pt.png';
import LogoSpline from '../img/techlogos/techlogo-spline.png';
import LogoSolidworks from '../img/techlogos/techlogo-3ds.png';
import LogoRive from '../img/techlogos/techlogo-rive.png';
import LogoThreejs from '../img/techlogos/techlogo-threejs.png';
import LogoGsap from '../img/techlogos/techlogo-gsap.png';
import { GiDiploma } from 'react-icons/gi';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STACKS COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
function Stacks() {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const stacksContainerStyle = "px-[10%] xl:px-[20%] py-40 flex flex-col xl:flex-col gap-12 justify-center items-center bg-lightSecondary dark:bg-darkSecondary bg-opacity-100 dark:bg-opacity-100 border-b border-lightSecondaryBorder dark:border-darkSecondaryBorder";
    const stacksTitleStyle = "font-heading px-6 py-2 rounded-full border-4 border-lightSecondaryBorder dark:border-darkSecondaryBorder uppercase text-center text-5xl font-black text-lightSubheading dark:text-darkSubheading w-max";
    const stacksSubtitleStyle = "font-default font-medium text-lg text-lightText dark:text-darkText";
    const stacksListsContainerStyle = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center w-full";
    const stacksListContainerStyle = "flex flex-col gap-2 w-full p-4 bg-lightPrimary dark:bg-darkPrimary shadow-sm border-0 border-lightSecondaryBorder dark:border-darkSecondaryBorder rounded-lg hover:scale-105 duration-300"
    const stacksListTitleStyle = "text-lightSubheading dark:text-darkSubheading uppercase font-heading font-black text-xl border-b border-lightSecondaryBorder dark:border-darkSecondaryBorder px-2 pb-2 text-center";
    const stacksListStyle = "text-lightSubheading dark:text-darkSubheading font-default font-medium flex flex-col gap-2 text-sm sm:text-lg lg:text-xl";
    const stacksListItemStyle = "flex flex-row gap-2 items-center px-2";
    const stacksListItemLogoStyle = "text-textlight w-4";
    
    /* //////////////////////////////////////////////////
    STACKS LIST
    ////////////////////////////////////////////////// */
    const stacksLists = [
        {
            listTitle: "Frontend",
            stacks: [
                { techName: "JavaScript", techLogo: LogoJavascript, certification: "https://www.udemy.com/certificate/UC-07d3470b-9f2c-416e-80e9-6244111b06ff/" },
                { techName: "React", techLogo: LogoReact, certification: "https://www.udemy.com/certificate/UC-ffc4b354-ce02-4a70-9c58-20282f38b957/" },
                { techName: "Webflow", techLogo: LogoWebflow, certification: false },
                { techName: "Threejs", techLogo: LogoThreejs },
                { techName: "GSAP", techLogo: LogoGsap },
            ]
        },
        {
            listTitle: "UI & PAO",
            stacks: [
                { techName: "Figma", techLogo: LogoFigma, certification: false },
                { techName: "Tailwind", techLogo: LogoTailwind, certification: false },
                { techName: "Photoshop", techLogo: LogoPhotoshop, certification: false },
                { techName: "Illustrator", techLogo: LogoIllustrator, certification: false },
                { techName: "Rive", techLogo: LogoRive },
            ]
        },
        {
            listTitle: "Backend",
            stacks: [
                { techName: "Supabase", techLogo: LogoSupabase, certification: false },
                { techName: "NodeJS", techLogo: LogoNodejs, certification: false },
                { techName: "MongoDB", techLogo: LogoMongodb, certification: false },
            ]
        },
        {
            listTitle: "3D & CAO",
            stacks: [
                { techName: "Blender", techLogo: LogoBlender, certification: false },
                { techName: "Painter", techLogo: LogoSubstancePainter, certification: false },
                { techName: "Spline", techLogo: LogoSpline, certification: false },
                { techName: "Solidworks", techLogo: LogoSolidworks, certification: false },
            ]
        },
        {
            listTitle: "????????",
            stacks: [
                { techName: "??????", techLogo: LogoJavascript, certification: false },
                { techName: "??????", techLogo: LogoJavascript, certification: false },
                { techName: "??????", techLogo: LogoJavascript, certification: false },
                { techName: "??????", techLogo: LogoJavascript, certification: false },
            ]
        },
        {
            listTitle: "????????",
            stacks: [
                { techName: "??????", techLogo: LogoJavascript, certification: false },
                { techName: "??????", techLogo: LogoJavascript, certification: false },
                { techName: "??????", techLogo: LogoJavascript, certification: false },
                { techName: "??????", techLogo: LogoJavascript, certification: false },
            ]
        },
    ]

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <aside id="stacks" className={stacksContainerStyle}>
            <h2 className={stacksTitleStyle}>Stacks</h2>
            <p className={stacksSubtitleStyle}>I use popular and reknown modern technologies and tools</p>
            <div className={stacksListsContainerStyle}>
                {stacksLists.map((list, index) => (
                    <div className={stacksListContainerStyle} key={index}>
                        <h3 className={stacksListTitleStyle}>{list.listTitle}</h3>
                        <div className={stacksListStyle}>
                            {list.stacks.map((tech, techIndex) => (
                                <div className={stacksListItemStyle} key={techIndex}>
                                    <img src={tech.techLogo} alt={tech.techName} className={stacksListItemLogoStyle} />
                                    <p>{tech.techName}</p> 
                                    {tech.certification && <a href={tech.certification} target='_blank'><GiDiploma /></a>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Stacks;
