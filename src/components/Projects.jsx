import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from './Project';
import ProjectGrid from './ProjectGrid';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS FOR PROJECTS IMAGES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import TravelFormGeneratorImg1 from "../img/projects/perso/P0316-travel-plan-form.avif";
import TravelFormGeneratorImg2 from "../img/projects/perso/P0316-travel-plan-form-mobile.avif";
import BentoEnviroImg1 from "../img/projects/perso/P0330-bento-enviro.avif";
import BentoEnviroImg2 from "../img/projects/perso/P0330-bento-enviro-mobile.avif";
import PrimusImg1 from "../img/projects/perso/prime-lite-plus.webflow.io.avif";
import PrimusImg2 from "../img/projects/perso/prime-lite-plus.webflow.io-mobile.avif";
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
    src1: TravelFormGeneratorImg1,
    src2: TravelFormGeneratorImg2,
    link: "https://travelformgenerator.netlify.app/",
    github: "https://github.com/mach90/TFgen",
  },
  {
    title: "Bento Enviro",
    status: "In development",
    version: "0.1.0",
    description: "Aggregating diverse weather and environmental data from multiple APIs and presenting it through a concise Bento-style UI.",
    techs: ["React", "Tailwind"],
    src1: BentoEnviroImg1,
    src2: BentoEnviroImg2,
    link: "https://bento-enviro.netlify.app/",
    github: "https://github.com/mach90/bento-enviro",

  },
  {
    title: "Primus stove showcase",
    status: "In development",
    version: "0.1.0",
    description: "Transformed a Primus stove e-commerce product page into a product showcase on Webflow, preserving the brand's visual identity while enhancing the presentation.",
    techs: ["Figma", "Webflow", "Spline", "Blender"],
    src1: PrimusImg1,
    src2: PrimusImg2,
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
      className={"hover:text-accent ease-in-out duration-300 text-textlight absolute top-[50%] left-[-20px] z-10 text-xl font-bold bg-dark rounded-full py-2 px-2"}
      onClick={onClick}
    ><AiFillLeftCircle /></button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={"hover:text-accent ease-in-out duration-300 text-textlight absolute top-[50%] right-[-20px] z-10 text-xl font-bold bg-dark rounded-full py-2 px-2"}
      onClick={onClick}
    ><AiFillRightCircle /></button>
  );
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROJECTS COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function Projects() {
  const projectsContainerStyle = "mx-4 lg:mx-[10%] xl:mx-[20%] my-8 flex flex-col gap-16 justify-center items-center p-12 bg-light shadow-md border border-dark rounded-md";

  const projectsContainerTitleContainerStyle = "gap-2 items-center grid grid-cols-3 bg-red-600";
  const projectsContainerTitleStyle = "text-5xl xl:text-6xl font-black uppercase font-heading text-textdark col-span-full md:col-span-1 bg-blue-600";
  const projectsContainerTitleSpanStyle = "text-textlight bg-dark";
  const projectsContainerPhraseStyle = "text-2xl font-default font-normal text-justify col-span-full md:col-span-2 bg-green-600";

  const projectsSliderContainerStyle = "slider-container w-full border-l border-r border-medium";
  const projectsGridContainerStyle = "grid grid-cols-full md:grid-cols-2 xl:grid-cols-3 gap-8";

  const personalProjectsSliderSettings = { //https://react-slick.neostack.com/docs/example/
    dots: true,
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
        <main id="main" className={projectsContainerStyle}>

          <div className={projectsContainerTitleContainerStyle}>
            <h2 className={projectsContainerTitleStyle}>Personal <span className={projectsContainerTitleSpanStyle}>Projects</span></h2>
            <p className={projectsContainerPhraseStyle}>A selection of web projects I've developed recently, showcasing various skills and interests</p>
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

          <div className={projectsContainerTitleContainerStyle}>
            <h2 className={projectsContainerTitleStyle}>Tutored <span className={projectsContainerTitleSpanStyle}>Projects</span></h2>
            <p className={projectsContainerPhraseStyle}>Projects made during learning</p>
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
