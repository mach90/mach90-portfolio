import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from './Project';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS FOR PROJECTS IMAGES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import TravelFormGeneratorImg1 from "../img/projects/travelformgenerator1a.png";
import TravelFormGeneratorImg2 from "../img/projects/travelformgenerator1b.png";
import BentoEnviroImg1 from "../img/projects/bentoenviro1a.png";
import BentoEnviroImg2 from "../img/projects/bentoenviro1b.png";
import PortfolioImg1 from "../img/projects/portfolio1a.jpg";
import PortfolioImg2 from "../img/projects/portfolio1b.jpg";
import JsImg1 from "../img/projects/js1a.jpg";
import JsImg2 from "../img/projects/js1b.jpg";
import PrimusImg1 from "../img/projects/primusliteplus1a.png";
import PrimusImg2 from "../img/projects/primusliteplus1b.png";
import BlankImg1 from "../img/projects/blank1a.jpg";
import BlankImg2 from "../img/projects/blank1b.jpg";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS DATA
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectsList = [
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
  //   techs: ["React", "Tailwind", "Lenis", "React Slick", "Figma"],
  //   src1: BlankImg1,
  //   src2: BlankImg2,
  //   link: "https://mach-portfolio.netlify.app/",
  //   github: "https://github.com/mach90/portfolio",
  // },
  // {
  //   title: "JavaScript experiments",
  //   status: "",
  //   version: "",
  //   description: "Exploring JavaScript programming and algorithms by coding games, converters, and more through Udemy courses and Codewars exercises.",
  //   techs: ["JavaScript"],
  //   src1: JsImg1,
  //   src2: JsImg2,
  //   link: "",
  //   github: "",
  // },
  {
    title: "Primus product page",
    status: "In development",
    version: "0.1.0",
    description: "Primus product page adaptation on Webflow",
    techs: ["Webflow", "Figma", "Spline", "Blender"],
    src1: PrimusImg1,
    src2: PrimusImg2,
    link: "https://prime-lite-plus.webflow.io/",
    github: "",
  },
]

function Projects() {
  const projectsContainerStyle = "mx-96 my-16 flex flex-col gap-12 justify-center items-center";
  const projectsContainerTitleContainerStyle = "gap-2 items-center grid grid-cols-3";
  const projectsContainerTitleStyle = "text-6xl font-black uppercase font-heading text-textdark";
  const projectsContainerTitleSpanStyle = "text-textmedium";
  const projectsContainerPhraseStyle = "text-2xl font-default font-normal text-justify col-span-2";
  const projectsSliderContainerStyle = "slider-container w-full";

  const settings = { //https://react-slick.neostack.com/docs/example/
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
      <>
        <div className={projectsContainerStyle}>

          <div className={projectsContainerTitleContainerStyle}>
            <h2 className={projectsContainerTitleStyle}>Personal <span className={projectsContainerTitleSpanStyle}>Projects</span></h2>
            <p className={projectsContainerPhraseStyle}>A selection of web projects I've developed recently, showcasing various skills and interests</p>
          </div>

          <div className={projectsSliderContainerStyle}>
            <Slider {...settings}>
              {
                projectsList.map((proj, index) => {
                    return <Project key={index} {...proj} />
                })
              }
            </Slider>
          </div>
        </div>
      </>
  );
};

export default Projects;
