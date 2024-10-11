/* ////////////////////////////////////////////////////////////////////////////////////////////////////
LOGOS IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import LogoJavascript from '../img/techlogos/techlogo-js.png';
import LogoReact from '../img/techlogos/techlogo-react.png';
import LogoWebflow from '../img/techlogos/techlogo-webflow.png';
import LogoFigma from '../img/techlogos/techlogo-figma.png';
import LogoTailwind from '../img/techlogos/techlogo-tailwind.png';
import LogoSupabase from '../img/techlogos/techlogo-supabase.png';
import LogoPhotoshop from '../img/techlogos/techlogo-ps.png';
import LogoIllustrator from '../img/techlogos/techlogo-ai.png';
import LogoBlender from '../img/techlogos/techlogo-blender.png';
import LogoSubstancePainter from '../img/techlogos/techlogo-pt.png';
import LogoSpline from '../img/techlogos/techlogo-spline.png';
import LogoSolidworks from '../img/techlogos/techlogo-3ds.png';
import LogoRive from '../img/techlogos/techlogo-rive.png';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STACKS COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
function Stacks() {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const stacksContainerStyle = "px-[10%] xl:px-[20%] py-40 flex flex-col xl:flex-col gap-24 justify-center items-center bg-lightSecondary dark:bg-darkSecondary";
    const stacksTitleStyle = "font-heading px-6 py-2 rounded-full border-4 border-lightSecondaryBorder dark:border-darkSecondaryBorder uppercase text-center text-5xl font-black text-lightSubheading dark:text-darkSubheading w-max";
    const stacksListsContainerStyle = "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 justify-center w-full";
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
                { techName: "JavaScript", techLogo: LogoJavascript },
                { techName: "React", techLogo: LogoReact },
                { techName: "Webflow", techLogo: LogoWebflow },
            ]
        },
        {
            listTitle: "UI & PAO",
            stacks: [
                { techName: "Figma", techLogo: LogoFigma },
                { techName: "Tailwind", techLogo: LogoTailwind },
                { techName: "Photoshop", techLogo: LogoPhotoshop },
                { techName: "Illustrator", techLogo: LogoIllustrator },
                // { techName: "GSAP", techLogo: LogoGSAP },
                // { techName: "Rive", techLogo: LogoRive },
            ]
        },
        {
            listTitle: "Backend",
            stacks: [
                { techName: "Supabase", techLogo: LogoSupabase },
            ]
        },
        {
            listTitle: "3D & CAO",
            stacks: [
                { techName: "Blender", techLogo: LogoBlender },
                { techName: "Painter", techLogo: LogoSubstancePainter },
                { techName: "Spline", techLogo: LogoSpline },
                { techName: "Solidworks", techLogo: LogoSolidworks },
            ]
        },
        {
            listTitle: "????????",
            stacks: [
                { techName: "??????", techLogo: LogoJavascript },
                { techName: "??????", techLogo: LogoJavascript },
                { techName: "??????", techLogo: LogoJavascript },
                { techName: "??????", techLogo: LogoJavascript },
            ]
        },
        {
            listTitle: "????????",
            stacks: [
                { techName: "??????", techLogo: LogoJavascript },
                { techName: "??????", techLogo: LogoJavascript },
                { techName: "??????", techLogo: LogoJavascript },
                { techName: "??????", techLogo: LogoJavascript },
            ]
        },
    ]

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <aside id="stacks" className={stacksContainerStyle}>
            <h2 className={stacksTitleStyle}>Stacks</h2>
            <div className={stacksListsContainerStyle}>
                {stacksLists.map((list, index) => (
                    <div className={stacksListContainerStyle} key={index}>
                        <h3 className={stacksListTitleStyle}>{list.listTitle}</h3>
                        <div className={stacksListStyle}>
                            {list.stacks.map((tech, techIndex) => (
                                <div className={stacksListItemStyle} key={techIndex}>
                                    <img src={tech.techLogo} alt={tech.techName} className={stacksListItemLogoStyle} />
                                    <p>{tech.techName}</p>
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
