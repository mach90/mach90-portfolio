/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
LOGOS PNG
////////////////////////////////////////////////// */
import LogoJavascript from '../img/techlogos/techlogo-js.png';
import LogoReact from '../img/techlogos/techlogo-react.png';
import LogoWebflow from '../img/techlogos/techlogo-webflow.png';
import LogoFigma from '../img/techlogos/techlogo-figma.png';
import LogoTailwind from '../img/techlogos/techlogo-tailwind.png';
import LogoSupabase from '../img/techlogos/techlogo-supabase.png';
import LogoNodejs from '../img/techlogos/techlogo-nodejs.png';
import LogoExpressjs from '../img/techlogos/techlogo-expressjs.png';
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

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STACKS LIST DATA
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const stacksLists = [
    {
        listTitle: "Frontend",
        stacks: [
            { techName: "JavaScript", techLogo: LogoJavascript, certification: "https://www.udemy.com/certificate/UC-07d3470b-9f2c-416e-80e9-6244111b06ff/" },
            { techName: "React", techLogo: LogoReact, certification: "https://www.udemy.com/certificate/UC-ffc4b354-ce02-4a70-9c58-20282f38b957/" },
            { techName: "Webflow", techLogo: LogoWebflow, certification: false },
            // { techName: "Threejs", techLogo: LogoThreejs },
            // { techName: "GSAP", techLogo: LogoGsap },
        ]
    },
    {
        listTitle: "UI & DTP",
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
            { techName: "NodeJS", techLogo: LogoNodejs, certification: "https://www.udemy.com/certificate/UC-a7743a64-2ab1-4e3e-844a-7605d9d7c08a/" },
            { techName: "Express", techLogo: LogoExpressjs, certification: "https://www.udemy.com/certificate/UC-a7743a64-2ab1-4e3e-844a-7605d9d7c08a/" },
            { techName: "Supabase", techLogo: LogoSupabase, certification: false },
            { techName: "MongoDB", techLogo: LogoMongodb, certification: false },
        ]
    },
    {
        listTitle: "3D & CAD",
        stacks: [
            { techName: "Blender", techLogo: LogoBlender, certification: false },
            { techName: "Painter", techLogo: LogoSubstancePainter, certification: false },
            { techName: "Spline", techLogo: LogoSpline, certification: false },
            { techName: "Solidworks", techLogo: LogoSolidworks, certification: false },
        ]
    },
    // {
    //     listTitle: "????????",
    //     stacks: [
    //         { techName: "??????", techLogo: LogoJavascript, certification: false },
    //         { techName: "??????", techLogo: LogoJavascript, certification: false },
    //         { techName: "??????", techLogo: LogoJavascript, certification: false },
    //         { techName: "??????", techLogo: LogoJavascript, certification: false },
    //     ]
    // },
    // {
    //     listTitle: "????????",
    //     stacks: [
    //         { techName: "??????", techLogo: LogoJavascript, certification: false },
    //         { techName: "??????", techLogo: LogoJavascript, certification: false },
    //         { techName: "??????", techLogo: LogoJavascript, certification: false },
    //         { techName: "??????", techLogo: LogoJavascript, certification: false },
    //     ]
    // },
]

export default stacksLists;