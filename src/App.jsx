import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import Internships from './components/Internships'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <Services />
        <Projects />
        <Expertise />
        <Internships />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
