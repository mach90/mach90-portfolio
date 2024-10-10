/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { ReactLenis, useLenis } from 'lenis/react'
import './index.css'
import Header from './components/Header';
import Projects from './components/Projects';
import Stacks from './components/Stacks';
import Footer from './components/Footer';
import Nav from './components/Nav';
// import MultiLayerParallax from './components/MultiLayerParallax';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
APP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
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
          {/* <MultiLayerParallax /> */}
          <Nav handleTheme={handleTheme} theme={theme} />
          <Header />
          <Projects />
          <Stacks />
          <Footer />
      </div>
    </ReactLenis>
  )
}
