/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import './index.css'
import Header from './components/Header';
import Projects from './components/Projects';
import Technos from './components/Technos';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { ReactLenis, useLenis } from 'lenis/react'

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
APP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      <div className='bg-background0 bg-opacity-100 pt-6 bg-contain bg-bottom bg-no-repeat'>
        <Nav />
        <Header />
        <Projects />
        <Technos />
        <Footer />
      </div>
    </ReactLenis>
  )
}
