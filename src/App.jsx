/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { useState } from 'react';
// import { ReactLenis, useLenis } from 'lenis/react'
import './index.css'
import Header from './components/Header';
import Projects from './components/Projects';
import Technos from './components/Technos';
import Footer from './components/Footer';
import Nav from './components/Nav';
import MultiLayerParallax from './components/MultiLayerParallax';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
APP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })

  function handleDarkmode() {
    // setDarkMode(!darkMode);
    setDarkMode(false);
  }

  return (
    // <ReactLenis root>
      <div className={darkMode ? "dark" : "" + "cursor-dot"}>
          <MultiLayerParallax />
          <Nav handleDarkmode={handleDarkmode} darkMode={darkMode} />
          <Header />
          <Projects />
          <Technos />
          <Footer />
      </div>
    // </ReactLenis>
  )
}
