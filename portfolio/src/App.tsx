import { useRef, useState } from 'react'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import About from './Components/About';
import 'animate.css'
import {TracingBeamScrollbar} from './components/ui/tracing-beam'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import StarsBackground from './components/ui/background-stars';

function App() {

  return (
    <div>
      <StarsBackground className="w-full h-full" />
      <NavBar></NavBar>
      <Banner></Banner>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
      <TracingBeamScrollbar />
    </div>
  )
}

export default App
