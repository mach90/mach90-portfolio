/* ////////////////////////////////////////////////////////////////////////////////////////////////////
LOGOS IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import LogoJavascript from '../img/techlogos/techlogos_js.png';
import LogoReact from '../img/techlogos/techlogos_react.png';
import LogoWebflow from '../img/techlogos/techlogos_webflow.png';
import LogoFigma from '../img/techlogos/techlogos_figma.png';
import LogoPhotoshop from '../img/techlogos/techlogos_ps.png';
import LogoIllustrator from '../img/techlogos/techlogos_ai.png';
import LogoBlender from '../img/techlogos/techlogos_blender.png';
import LogoSubstancePainter from '../img/techlogos/techlogos_pt.png';
import LogoSpline from '../img/techlogos/techlogos_spline.png';
import LogoSolidworks from '../img/techlogos/techlogos_3ds.png';
import LogoRive from '../img/techlogos/techlogos_rive.png';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
TECHNOS COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
function Technos() {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const technosContainerStyle = "px-8 lg:px-[10%] xl:px-[20%] py-12 flex flex-col xl:flex-col gap-12 justify-between my-20";
    const technosTitleStyle = "font-heading text-textlight bg-dark rounded-md p-2 uppercase text-center text-5xl font-black shadow-md";
    const technosListsContainerStyle = "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-8 justify-center w-full";
    const technosListContainerStyle = "flex flex-col gap-2 w-full p-4 bg-light border border-dark rounded-md shadow-md"
    const technosListTitleStyle = "uppercase font-heading font-black text-xl text-textme border-b border-alternatelight px-2";
    const technosListStyle = "text-text font-normal font-light flex flex-col gap-2 text-sm sm:text-lg lg:text-2xl";
    const technosListItemStyle = "flex flex-row gap-2 items-center px-2 hover:bg-medium hover:bg-opacity-50";
    const technosListItemLogoStyle = "text-textlight w-4 grayscale brightness-0";
    
    /* //////////////////////////////////////////////////
    TECHNOS LIST
    ////////////////////////////////////////////////// */
    const technosLists = [
        {
            listTitle: "DEV",
            technos: [
                { technoName: "JavaScript", technoLogo: LogoJavascript },
                { technoName: "React", technoLogo: LogoReact },
                { technoName: "Webflow", technoLogo: LogoWebflow },
            ]
        },
        {
            listTitle: "UI & PAO",
            technos: [
                { technoName: "Figma", technoLogo: LogoFigma },
                { technoName: "Photoshop", technoLogo: LogoPhotoshop },
                { technoName: "Illustrator", technoLogo: LogoIllustrator },
                { technoName: "Rive", technoLogo: LogoRive },
            ]
        },
        {
            listTitle: "3D & CAO",
            technos: [
                { technoName: "Blender", technoLogo: LogoBlender },
                { technoName: "Painter", technoLogo: LogoSubstancePainter },
                { technoName: "Spline", technoLogo: LogoSpline },
                { technoName: "Solidworks", technoLogo: LogoSolidworks },
            ]
        },
        {
            listTitle: "????????",
            technos: [
                { technoName: "??????", technoLogo: LogoJavascript },
                { technoName: "??????", technoLogo: LogoJavascript },
                { technoName: "??????", technoLogo: LogoJavascript },
                { technoName: "??????", technoLogo: LogoJavascript },
            ]
        },
    ]

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <aside id="technos" className={technosContainerStyle}>
            <h2 className={technosTitleStyle}>Technos</h2>
            <div className={technosListsContainerStyle}>
                {technosLists.map((list, index) => (
                    <div className={technosListContainerStyle} key={index}>
                        <h3 className={technosListTitleStyle}>{list.listTitle}</h3>
                        <div className={technosListStyle}>
                            {list.technos.map((techno, techIndex) => (
                                <div className={technosListItemStyle} key={techIndex}>
                                    <img src={techno.technoLogo} alt={techno.technoName} className={technosListItemLogoStyle} />
                                    <p>{techno.technoName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Technos;
