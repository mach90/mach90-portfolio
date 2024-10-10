import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from './Project';
import ProjectGrid from './ProjectGrid';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS FOR PROJECTS IMAGES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import TravelFormGeneratorImg from "../img/projects/perso/P0316-travel-plan-form.avifs";
import BentoEnviroImg from "../img/projects/perso/P0330-bento-enviro.avifs";
import PrimusImg from "../img/projects/perso/prime-lite-plus.webflow.io.avifs";
import PigGame from "../img/projects/formation/P0202-pig-game.avif";
import UnderscoreToCamel from "../img/projects/formation/P0203-underscore2camel.avif";
import GuessMyNumber from "../img/projects/formation/P0208-guess-my-number.avif" 
import Bankist from "../img/projects/formation/P0210-bankist.avif" 
import PizzaMenu from "../img/projects/formation/P0301-pizza-menu.avif" 
import TravelList from "../img/projects/formation/P0305-travel-list.avif" 
import TipCalculator from "../img/projects/formation/P0308-tip-calculator.avif" 
import EatNSplit from "../img/projects/formation/P0309-eat-n-split.avif" 
import UsePopcorn from "../img/projects/formation/P0310-usepopcorn.avif" 
import ReactQuiz from "../img/projects/formation/P0317-react-quiz.avif" 
import Worldwise from "../img/projects/formation/P0319-worldwise.avif" 
import FastReactPizza from "../img/projects/formation/P0323-fast-react-pizza.avif" 

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS DATA
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const personalProjectsList = [
  {
    title: "Travel Form Generator",
    status: "In development",
    version: "0.1.0",
    description: "A web form that converts user input into a formatted and printable Travel Form (.pdf) using React-pdf library.",
    techs: ["React", "Tailwind", "React-pdf", "Spline", "Blender"],
    src1: TravelFormGeneratorImg,
    link: "https://travelformgenerator.netlify.app/",
    github: "https://github.com/mach90/TFgen",
  },
  {
    title: "Bento Enviro",
    status: "In development",
    version: "0.1.0",
    description: "Aggregating diverse weather and environmental data from multiple APIs and presenting it through a concise Bento-style UI.",
    techs: ["React", "Tailwind"],
    src1: BentoEnviroImg,
    link: "https://bento-enviro.netlify.app/",
    github: "https://github.com/mach90/bento-enviro",

  },
  {
    title: "Primus stove showcase",
    status: "In development",
    version: "0.1.0",
    description: "Transformed a Primus stove e-commerce product page into a product showcase on Webflow, preserving the brand's visual identity while enhancing the presentation.",
    techs: ["Figma", "Webflow", "Spline", "Blender"],
    src1: PrimusImg,
    link: "https://prime-lite-plus.webflow.io/",
    github: "",
  },
]

const tutoredProjectsList = [
  {
    title: "Pig Game",
    status: "Finished",
    version: "0.1.0",
    description: "A simple pig game.",
    techs: ["JavaScript"],
    src1: PigGame,
    link: "",
    github: "",
  },
  {
    title: "Underscore to camelCase",
    status: "Finished",
    version: "0.1.0",
    description: "under_score to camelCase converter.",
    techs: ["JavaScript"],
    src1: UnderscoreToCamel,
    link: "",
    github: "",
  },
  {
    title: "Guess my number",
    status: "Finished",
    version: "0.1.0",
    description: "Classic Guess my number game.",
    techs: ["JavaScript"],
    src1: GuessMyNumber,
    link: "",
    github: "",
  },
  {
    title: "Bankist",
    status: "Finished",
    version: "0.1.0",
    description: "Bank account interface with transactions.",
    techs: ["JavaScript"],
    src1: Bankist,
    link: "",
    github: "",
  },
  {
    title: "Pizza Menu",
    status: "Finished",
    version: "0.1.0",
    description: "Pizza menu depending on hour and availability of meal.",
    techs: ["React"],
    src1: PizzaMenu,
    link: "",
    github: "",
  },
  {
    title: "Travel List",
    status: "Finished",
    version: "0.1.0",
    description: "",
    techs: ["React"],
    src1: TravelList,
    link: "",
    github: "",
  },
  {
    title: "Tip Calculator",
    status: "Finished",
    version: "0.1.0",
    description: "",
    techs: ["React"],
    src1: TipCalculator,
    link: "",
    github: "",
  },
  {
    title: "Eat'n'Split",
    status: "Finished",
    version: "0.1.0",
    description: "",
    techs: ["React"],
    src1: EatNSplit,
    link: "",
    github: "",
  },
  {
    title: "usePopcorn",
    status: "Finished",
    version: "0.1.0",
    description: "",
    techs: ["React"],
    src1: UsePopcorn,
    link: "",
    github: "",
  },
  {
    title: "React Quiz",
    status: "Finished",
    version: "0.1.0",
    description: "",
    techs: ["React"],
    src1: ReactQuiz,
    link: "",
    github: "",
  },
  {
    title: "Worldwise",
    status: "Finished",
    version: "0.1.0",
    description: "",
    techs: ["React"],
    src1: Worldwise,
    link: "",
    github: "",
  },
  {
    title: "Fast React Pizza",
    status: "Finished",
    version: "0.1.0",
    description: "",
    techs: ["React"],
    src1: FastReactPizza,
    link: "",
    github: "",
  },
]

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
SLIDERS CUSTOM ARROWS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={"ease-in-out duration-300 absolute top-[50%] left-[-30px] z-10 text-xl font-bold bg-[#cecece] hover:bg-[#b4b4b4] dark:bg-[#494949] dark:hover:bg-[#6c6c6c] text-[#6a6a6a] hover:text-[#4f4f4f] dark:text-[#828282] dark:hover:text-[#a0a0a0] rounded-full p-1"}
      onClick={onClick}
    ><AiFillLeftCircle /></button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={"ease-in-out duration-300 absolute top-[50%] right-[-30px] z-10 text-xl font-bold bg-[#cecece] hover:bg-[#b4b4b4] dark:bg-[#494949] dark:hover:bg-[#6c6c6c] text-[#6a6a6a] hover:text-[#4f4f4f] dark:text-[#828282] dark:hover:text-[#a0a0a0] rounded-full p-1"}
      onClick={onClick}
    ><AiFillRightCircle /></button>
  );
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROJECTS COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function Projects() {
  const projectsContainerStyle = "px-[10%] xl:px-[20%] py-12 flex flex-col gap-16 justify-center items-center bg-lightSecondary dark:bg-darkSecondary border-y border-lightSecondaryBorder dark:border-darkSecondaryBorder overflow-x-hidden";

  const projectsContainerTitleContainerStyle = "gap-2 flex flex-col md:flex-row w-full gap-4 md:gap-12 md:items-center";
  const projectsContainerTitleStyle = "text-5xl xl:text-6xl font-black uppercase font-heading text-lightText dark:text-darkText flex flex-col";
  const projectsContainerTitleSpanStyle = "text-lightHeading dark:text-darkHeading";
  const projectsContainerPhraseStyle = "text-xl md:text-2xl font-default font-normal italic text-lightText dark:text-darkText";

  const projectsSliderContainerStyle = "slider-container w-full cursor-grab shadow-lg";
  const projectsGridContainerStyle = "flex flex-row w-max gap-8";

  const projectsSpacerStyle = "h-4 w-full border-b border-lightSecondaryBorder dark:border-darkSecondaryBorder";

  const personalProjectsSliderSettings = { //https://react-slick.neostack.com/docs/example/
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
      <>
        <main id="projects" className={projectsContainerStyle}>

          <div className={projectsContainerTitleContainerStyle}>
            <h2 className={projectsContainerTitleStyle}>Personal <span className={projectsContainerTitleSpanStyle}>Projects</span></h2>
            <p className={projectsContainerPhraseStyle}>A selection of web projects I've developed recently on my own, each one created to test my abilities and showcase my skills and personal interests.</p>
          </div>

          <div className={projectsSliderContainerStyle}>
            <Slider {...personalProjectsSliderSettings}>
              {
                personalProjectsList.map((proj, index) => {
                    return <Project key={index} {...proj} />
                })
              }
            </Slider>
          </div>
          
          <div className={projectsSpacerStyle}></div>

          <div className={projectsContainerTitleContainerStyle}>
            <h2 className={projectsContainerTitleStyle}>Guided <span className={projectsContainerTitleSpanStyle}>Projects</span></h2>
            <p className={projectsContainerPhraseStyle}>A few guided projects from online courses by some of the best-rated instructors. Each project was essential in helping me learn and apply key concepts.</p>
          </div>

          <div className={projectsGridContainerStyle}>
                {
                  tutoredProjectsList.map((proj, index) => {
                    return <ProjectGrid key={index} {...proj} />
                  })
                }
          </div>

        </main>
      </>
  );
};

export default Projects;
