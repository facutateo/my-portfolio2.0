import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Proyects from './sections/proyects'
import Contact from './sections/contact'
import Footer from './components/footer'
import Scene from './components/scene'
import { useActiveSection } from './hooks/useActiveSection'


function App() {
  const active = useActiveSection(["home","about", "skills", "projects", "contact"]);
  return (
    <>
    <div className=' w-screen'>
      <Navbar/>
    <section id='home'>
      <Home/>
    </section>
    <main className={`w-full block md:grid md:grid-cols-[25%_75%] ${active === "home" ? "animate-fade-out-up" : "animate-fade-in-down"}`}>
      <div className="hidden md:block md:col-start-1 sticky top-0 w-full md:h-170 pointer-events-none z-40 pt-40 ml-10">
        <Scene />
      </div>
      <div className='w-full md:col-start-2 z-10'>
    <section id='about' className="w-full min-h-screen px-4 mx-auto flex flex-col justify-center">
      <About/>
      </section>
      <section id='skills' className="w-full min-h-screen px-4 mx-auto flex flex-col justify-center">
      <Skills/>
      </section>
      <section id='projects' className="w-full min-h-screen px-4 mx-auto flex flex-col justify-center">
      <Proyects/>
      </section>
      <section id='contact'className="w-full min-h-screen px-4 mx-auto flex flex-col justify-center" >
      <Contact/>
      </section>
      </div>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App
