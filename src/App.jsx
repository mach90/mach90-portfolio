/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
DEPENDENCIES
////////////////////////////////////////////////// */
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { ReactLenis, useLenis } from 'lenis/react'

/* //////////////////////////////////////////////////
STYLES
////////////////////////////////////////////////// */
import './index.css'

/* //////////////////////////////////////////////////
COMPONENTS
////////////////////////////////////////////////// */
import MultiLayerParallax from './components/MultiLayerParallax';
import Nav from './components/Nav';
import Header from './components/Header';
import Intro from './components/Intro';
import ProjectsShowcase from './components/ProjectsShowcase';
import ProjectsAll from './components/ProjectsAll';
import Stacks from './components/Stacks';
import Footer from './components/Footer';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
APP COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function App() {
  /* //////////////////////////////////////////////////
  DARKMODE STATE AND FUNCTION
  ////////////////////////////////////////////////// */
  const [theme, setTheme] = useLocalStorageState([], "theme");

  function handleTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  /* //////////////////////////////////////////////////
  LENIS SMOOTH SCROLL
  ////////////////////////////////////////////////// */
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <ReactLenis root>
      <div className={theme === "dark" ? "dark" : ""}>
          <MultiLayerParallax />
          <Nav handleTheme={handleTheme} theme={theme} />
          <Header />
          <main>
            <Intro />
            <ProjectsShowcase />
            <ProjectsAll />
            <Stacks />
          </main>
          <Footer />
      </div>
    </ReactLenis>
  )
}
