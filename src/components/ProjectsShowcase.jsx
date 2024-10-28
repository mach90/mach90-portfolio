/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import Carousel from "./Carousel";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const projectsContainerStyle = "px-[10%] xl:px-[20%] py-40 flex flex-col gap-40 justify-center items-center bg-lightSecondary dark:bg-darkSecondary border-y border-lightSecondaryBorder dark:border-darkSecondaryBorder overflow-x-hidden";

const projectsContainerTitleContainerStyle = "gap-2 flex flex-col md:flex-col w-full gap-4 md:gap-12 items-center";
const projectsContainerTitleStyle = "text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase font-heading text-lightText dark:text-darkText flex flex-col text-center";
const projectsContainerTitleSpanStyle = "text-lightHeading dark:text-darkHeading";
const projectsContainerPhraseStyle = "text-xl md:text-3xl lg:text-4xl xl:text-4xl max-w-3xl font-default font-normal italic text-lightText dark:text-darkText mb-16";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROJECTS COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function ProjectsShowcase() {
  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
      <>
        <section id="projects-showcase" className={projectsContainerStyle}>

          <div className={projectsContainerTitleContainerStyle}>
            <h2 className={projectsContainerTitleStyle}>Showcased <span className={projectsContainerTitleSpanStyle}>Projects</span></h2>
            <p className={projectsContainerPhraseStyle}>A selection of web projects I've developed recently on my own, each one created to test my abilities and showcase my skills and personal interests.</p>
          </div>

          <Carousel />
          
        </section>
      </>
  );
};

export default ProjectsShowcase;
