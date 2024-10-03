/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import './index.css'
import Header from './components/Header';
import Projects from './components/Projects';
import Technos from './components/Technos';
import Footer from './components/Footer';
import Spline from '@splinetool/react-spline';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
APP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function App() {
  return (
    <div className='bg-opacity-0'>
      <Spline scene="https://prod.spline.design/sSZn4e4qTqxKeBso/scene.splinecode" className='fixed z-[-10]'/>
      <Header />
      <Projects />
      <Technos />
      <Footer />
    </div>

  )
}
