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
import ProjectsShowcase from './components/ProjectsShowcase';
import ProjectsAll from './components/ProjectsAll';
import Stacks from './components/Stacks';
import Footer from './components/Footer';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
APP COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function App() {
  const [theme, setTheme] = useLocalStorageState([], "theme");

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  function handleTheme() {
    if(theme !== "dark") setTheme("dark");
    if(theme === "dark") setTheme("light");
  }

  return (
    <ReactLenis root>
      <div className={theme === "dark" ? "dark" : ""}>
          <MultiLayerParallax />
          <Nav handleTheme={handleTheme} theme={theme} />
          <Header />
          <main>
            <ProjectsShowcase />
            <ProjectsAll />
            <Stacks />
          </main>
          <Footer />
      </div>
    </ReactLenis>
  )
}
