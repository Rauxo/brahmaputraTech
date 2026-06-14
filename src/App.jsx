import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'
import WhatsAppButton from './components/WhatsAppButton'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis()
    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    function updateLenis(time) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)
    
    return () => {
      lenis.destroy()
      window.__lenis = null
      gsap.ticker.remove(updateLenis)
    }
  }, [location.pathname]) // re-init lenis on route change if needed

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
