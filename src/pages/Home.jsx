import React from 'react'
import Hero from '../components/Hero'
import VideoShowcase from '../components/VideoShowcase'
import Services from '../components/Services'
import Technologies from '../components/Technologies'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { TrackingService } from '../utils/TrackingService'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    TrackingService.pageView(window.location.pathname);
  }, []);

  return (
    <main>
      <Hero />
      <VideoShowcase />
      <Services />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  )
}
