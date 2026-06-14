import heroVideo from '../assets/hero_video2.mp4'
import { TrackingService } from '../utils/TrackingService'
import { useState } from 'react'
import ConsultationModal from './ConsultationModal'
import './Hero.css'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConsultationClick = (e) => {
    e.preventDefault();
    TrackingService.consultationClick('Hero Section');
    TrackingService.pushEvent('hero_consultation_click');
    setIsModalOpen(true);
  }

  const handleTalkExpertClick = () => {
    TrackingService.whatsappClick('Hero Talk To An Expert');
    TrackingService.pushEvent('hero_whatsapp_click');
    window.open('https://wa.me/917002776479', '_blank');
  }

  return (
    <>
      <section className="hero" id="home" aria-label="Hero section">

        <div className="hero__video-wrapper" aria-hidden="true">
          <video
            className="hero__video"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content hero__content--centered">

          <h1 className="hero__heading" style={{ fontSize: '3rem', maxWidth: '800px', margin: '0 auto 20px' }}>
            Helping Northeast Businesses <span className="hero__heading-accent">Grow Through Technology</span>
          </h1>

          <p className="hero__subtext" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
            Building Digital Infrastructure for Northeast Businesses. From professional websites to AI solutions, we help organizations transform.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" onClick={handleConsultationClick} className="hero__btn hero__btn--primary">
              <span>Book Free Consultation</span>
              <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <button onClick={handleTalkExpertClick} className="hero__btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>
              <span>Talk To An Expert</span>
            </button>
          </div>
          
          <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
            Trusted by businesses across Northeast India.
          </p>

        </div>

      </section>

      {isModalOpen && <ConsultationModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
