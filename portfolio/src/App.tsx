import { useRef, useState } from 'react'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import About from './Components/About';
import 'animate.css'
import { BackgroundBeams } from './components/ui/background-beams';
import {TracingBeamScrollbar} from './components/ui/tracing-beam'

function App() {

  return (
    <div>
      <BackgroundBeams className="fixed top-0 left-0 w-full h-full -z-10" />
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <TracingBeamScrollbar />
    </div>
  )
}

export default App
