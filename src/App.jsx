import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Lenis from 'lenis'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  )
}

export default App
