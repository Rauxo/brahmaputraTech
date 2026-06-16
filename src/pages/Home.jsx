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
import TrustSection from '../components/TrustSection'
import Industries from '../components/Industries'
import WhyChooseUs from '../components/WhyChooseUs'
import OurProcess from '../components/OurProcess'

export default function Home() {
  useEffect(() => {
    TrackingService.pageView(window.location.pathname);
  }, []);

  return (
    <main>
      <Hero />
      <TrustSection/>
      <Services/>
      <Industries/>
      <WhyChooseUs/>
      <OurProcess/>
      <Portfolio/>
    </main>
  )
}
