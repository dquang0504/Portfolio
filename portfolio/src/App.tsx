import { useState } from 'react'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'
import Banner from './Components/Banner';
import Skills from './Components/Skills';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  )
}

export default App
