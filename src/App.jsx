import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    function updateLenis(time) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)

    gsap.ticker.lagSmoothing(0)
    
    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateLenis)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App
