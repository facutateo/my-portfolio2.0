import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Proyects from './sections/proyects'
import Contact from './sections/contact'
import Footer from './components/footer'
import { useActiveSection } from './hooks/useActiveSection'

// Three.js (~800 KB) solo se descarga en pantallas grandes, donde el personaje se muestra.
const Scene = lazy(() => import('./components/scene'))
const desktopQuery = '(min-width: 768px)'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(desktopQuery).matches)
  useEffect(() => {
    const mq = window.matchMedia(desktopQuery)
    const onChange = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return isDesktop
}

function App() {
  const active = useActiveSection();
  const isDesktop = useIsDesktop();
  return (
    <div className='w-full'>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] btn btn-primary">Skip</a>
      <Navbar/>
      <section id='home'>
        <Home/>
      </section>
      <main className={`w-full block md:grid md:grid-cols-[25%_75%] ${active === "home" ? "animate-fade-out-up" : "animate-fade-in-down"}`}>
        <div className="hidden md:block md:col-start-1 sticky top-0 w-full md:h-170 pointer-events-none z-40 pt-40 ml-10" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-64 h-64 rounded-full bg-(--glow) blur-3xl" />
          {isDesktop && (
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          )}
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
          <section id='contact' className="w-full min-h-screen px-4 mx-auto flex flex-col justify-center">
            <Contact/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
