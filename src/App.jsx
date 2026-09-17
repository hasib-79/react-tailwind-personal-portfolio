import Navbar from "./layout/Navbar"
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Highlights from './sections/Highlights'
import Contact from './sections/Contact'
import Footer from "./layout/Footer"
import Expertise from "./sections/Expertise"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Expertise />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
