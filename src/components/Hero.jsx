
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
          <picture>
            <source media="(max-width: 540px)" srcSet="/Back Cover mobile.png" />
            <img
              className="hero__image"
              src="/Back Cover 2 .png"
              alt=""
            />
          </picture>
        </div>

        <div className="hero__content hero__content--centered" >

          <div className="hero__bottom">
          <h1 className="hero__heading">
            Helping Northeast<span className="hero__mobile-break"><br /></span>{' '}
            Businesses Grow<span className="hero__mobile-break"><br /></span>{' '}
            Through Technology
          </h1>

          {/* <p className="hero__subtext" style={{ maxWidth: '600px', margin: '0 auto 70px' }}>
            Building Digital Infrastructure for Northeast Businesses. From professional websites to AI solutions, we help organizations transform.
          </p> */}

          <div className="hero__buttons">
            <a href="#" onClick={handleConsultationClick} className="hero__btn hero__btn--primary">
              <span>Book Free Consultation</span>
              <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <button onClick={handleTalkExpertClick} className="hero__btn hero__btn--secondary">
              <span>Talk To An Expert</span>
            </button>
          </div>
          <div className="hero__trust-section">
            <div className="hero__trust-avatars">
              <img src="https://avatars.githubusercontent.com/u/16860528" alt="User 1" />
              <img src="https://avatars.githubusercontent.com/u/20110627" alt="User 2" />
              <img src="https://avatars.githubusercontent.com/u/106103625" alt="User 3" />
              <img src="https://avatars.githubusercontent.com/u/59228569" alt="User 4" />
              <img src="https://avatars.githubusercontent.com/u/59442788" alt="User 5" />
              <div className="hero__trust-more">+99</div>
            </div>
            <div className="hero__trust-rating">
              <svg className="hero__trust-star" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="hero__trust-score">4.95</span>
              <span className="hero__trust-dot">•</span>
              <span className="hero__trust-reviews">1.28k reviews</span>
            </div>
          </div>
          </div>
        </div>

      </section>

      {isModalOpen && <ConsultationModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
