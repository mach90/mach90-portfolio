/* ////////////////////////////////////////////////////////////////////////////////////////////////////
LOGOS IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import LogoJavascript from '../img/techlogos_js.png';
import LogoReact from '../img/techlogos_react.png';
import LogoWebflow from '../img/techlogos_webflow.png';
import LogoFigma from '../img/techlogos_figma.png';
import LogoPhotoshop from '../img/techlogos_ps.png';
import LogoIllustrator from '../img/techlogos_ai.png';
import LogoBlender from '../img/techlogos_blender.png';
import LogoSubstancePainter from '../img/techlogos_pt.png';
import LogoSpline from '../img/techlogos_spline.png';
import LogoSolidworks from '../img/techlogos_3ds.png';
import LogoRive from '../img/techlogos_rive.png';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
TECHNOS COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
function Technos() {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const technosContainerStyle = "px-4 lg:px-[10%] xl:px-[20%] py-12 bg-grainyMedium flex flex-col xl:flex-row gap-12 justify-between";
    const technosTitleStyle = "font-heading text-alternatelight uppercase text-5xl font-black";
    const technosListsContainerStyle = "flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24";
    const technosListContainerStyle = "flex flex-col gap-2"
    const technosListTitleStyle = "uppercase font-heading font-semibold text-xl text-alternatelight border-b border-alternatelight";
    const technosListStyle = "text-textlight font-default font-light flex flex-col gap-2 text-sm sm:text-lg lg:text-2xl";
    const technosListItemStyle = "flex flex-row gap-2 items-center hover:bg-dark hover:bg-opacity-40 cursor-default";
    const technosListItemLogoStyle = "text-textlight w-4";
    // const technosListItemLogoStyle = "text-textlight w-4 grayscale brightness-50";
    
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
                { technoName: "Substance Painter", technoLogo: LogoSubstancePainter },
                { technoName: "Spline", technoLogo: LogoSpline },
                { technoName: "Solidworks", technoLogo: LogoSolidworks },
            ]
        },
    ]

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <aside id="side" className={technosContainerStyle}>
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
