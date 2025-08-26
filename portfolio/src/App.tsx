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
import { BackgroundStars } from './components/ui/background-stars';
import { RocketCursor } from './components/ui/rocket-cursor';
import BackToTop from './Components/BackToTop';
import { SpaceToastProvider } from './components/ui/space-toast';
import { Analytics } from '@vercel/analytics/next';


function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
      <TracingBeamScrollbar />
      <BackgroundStars />
      <RocketCursor></RocketCursor>
      <BackToTop></BackToTop>
      <SpaceToastProvider></SpaceToastProvider>

      <Analytics />
    </div>
  )
}

export default App
