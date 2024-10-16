/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import Carousel from "./Carousel";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const projectsContainerStyle = "px-[10%] xl:px-[20%] py-40 flex flex-col gap-40 justify-center items-center bg-lightSecondary dark:bg-darkSecondary border-y border-lightSecondaryBorder dark:border-darkSecondaryBorder overflow-x-hidden";

const projectsContainerTitleContainerStyle = "gap-2 flex flex-col md:flex-row w-full gap-4 md:gap-12 md:items-start";
const projectsContainerTitleStyle = "text-5xl xl:text-6xl font-black uppercase font-heading text-lightText dark:text-darkText flex flex-col";
const projectsContainerTitleSpanStyle = "text-lightHeading dark:text-darkHeading";
const projectsContainerPhraseStyle = "text-xl md:text-2xl font-default font-normal italic text-lightText dark:text-darkText";

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
