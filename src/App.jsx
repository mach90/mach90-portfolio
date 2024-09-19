/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Logo from '../public/logo.svg'
import './index.css'
import Project from './components/Project';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS FOR PROJECTS IMAGES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import TravelFormGeneratorImg1 from "./img/projects/travelformgenerator1a.jpg";
import TravelFormGeneratorImg2 from "./img/projects/travelformgenerator1b.jpg";
import BentoEnviroImg1 from "./img/projects/bentoenviro1a.jpg";
import BentoEnviroImg2 from "./img/projects/bentoenviro1b.jpg";
import PortfolioImg1 from "./img/projects/portfolio1a.jpg";
import PortfolioImg2 from "./img/projects/portfolio1b.jpg";
import JsImg1 from "./img/projects/js1a.jpg";
import JsImg2 from "./img/projects/js1b.jpg";
import PrimusImg1 from "./img/projects/primusliteplus1a.jpg";
import PrimusImg2 from "./img/projects/primusliteplus1b.jpg";
import BlankImg1 from "./img/projects/blank1a.jpg";
import BlankImg2 from "./img/projects/blank1b.jpg";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS DATA
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projects = [
  {
    title: "Travel Form Generator",
    status: "In development",
    version: "0.1.0",
    description: "Create a Travel Form .pdf via a user friendly web form and React PDF.",
    techs: ["React", "Tailwind", "React-pdf"],
    src1: TravelFormGeneratorImg1,
    src2: TravelFormGeneratorImg2,
    link: "https://travelformgenerator.netlify.app/",
    github: "https://github.com/mach90/TFgen",
  },
  {
    title: "Bento Enviro",
    status: "In development",
    version: "0.1.0",
    description: "Essential weather info and more about your area in a Bento UI layout.",
    techs: ["React", "Tailwind"],
    src1: BentoEnviroImg1,
    src2: BentoEnviroImg2,
    link: "https://bento-enviro.netlify.app/",
    github: "https://github.com/mach90/bento-enviro",

  },
  // {
  //   title: "Porfolio",
  //   status: "In development",
  //   version: "0.1.0",
  //   description: "This portfolio.",
  //   techs: ["React", "Tailwind", "Spline", "GSAP", "Lenis", "Blender"],
  //   src1: BlankImg1,
  //   src2: BlankImg2,
  //   link: "https://mach-portfolio.netlify.app/",
  //   github: "https://github.com/mach90/portfolio",
  // },
  {
    title: "JavaScript experiments",
    status: "",
    version: "",
    description: "Exploring JavaScript programming and algorithms by coding games, converters, and more through Udemy courses and Codewars exercises.",
    techs: ["JavaScript"],
    src1: JsImg1,
    src2: JsImg2,
    link: "",
    github: "",
  },
  {
    title: "Primus product page",
    status: "In development",
    version: "0.1.0",
    description: "Primus product page adaptation on Webflow",
    techs: ["Webflow", "GSAP", "Spline", "Blender"],
    src1: PrimusImg1,
    src2: PrimusImg2,
    link: "",
    github: "",
  },
  // {
  //   title: "Secret Project",
  //   status: "Concept",
  //   version: "0.0.0",
  //   description: "Project I've been wanting to work on for a while.",
  //   techs: ["React"],
  //   src1: BlankImg1,
  //   src2: BlankImg2,
  //   link: "",
  //   github: "",
  // },
]

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
APP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function App() {
  const projectsListContainerStyle = "flex flex-col gap-12 mt-12";

  return (
    <>

      <div className='m-4 p-4 border border-black flex flex-col justify-center items-center'>
        <img src={Logo} alt="Mach logo" />
        <h1 className="text-8xl font-black uppercase font-heading text-customColor1">Portfolio</h1>
        <p className="text-xl font-light font-regular text-customColor1">Is being updated</p>
      </div>

      <div className='m-4 p-4 border border-black flex flex-col justify-center items-center'>
        <h2 className="text-5xl font-black uppercase font-heading text-customColor1">Projects</h2>

        <div id='projectsContainer'>
          <div id="projectsList" className={projectsListContainerStyle}>
            {
              projects.map((project, index) => {
                return <Project key={index} {...project} />
              })
            }
          </div>
        </div>
        
      </div>
    </>

  )
}
