import { useRef, useState } from 'react'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import About from './Components/About';
import 'animate.css'

function App() {

  return (
    <div >
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
    </div>
  )
}

export default App
