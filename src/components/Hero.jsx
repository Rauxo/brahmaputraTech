import { TrackingService } from '../utils/TrackingService'
import { useState } from 'react'
import ConsultationModal from './ConsultationModal'
import './Hero.css'
import img from "../assets/her_com.png"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConsultationClick = (e) => {
    e.preventDefault()
    TrackingService.consultationClick('Hero Section')
    TrackingService.pushEvent('hero_consultation_click')
    setIsModalOpen(true)
  }

  const handleTalkExpertClick = () => {
    TrackingService.whatsappClick('Hero Talk To An Expert')
    TrackingService.pushEvent('hero_whatsapp_click')
    window.open('https://wa.me/917002776479', '_blank')
  }

  return (
    <>
      <section className="hero" id="home">

        {/* Right Side Computer Image */}
        <div className="hero__image-wrapper">
          <img
            className="hero__image"
            src={img}
            alt="Technology Illustration"
          />
        </div>

        {/* Left Content */}
        <div className="hero__content">

          <div className="hero__bottom">

            <h1 className="hero__heading">
              Helping Northeast <br />
              Businesses Grow <br />
              Through Technology
            </h1>

            <p className="hero__subtext">
              Websites, Software, Lead Generation, Automation <br />
              and AI Solutions designed to help businesses build <br />
              credibility, improve efficiency and accelerate growth.
            </p>

            <div className="hero__buttons">

              <a
                href="#"
                onClick={handleConsultationClick}
                className="hero__btn hero__btn--primary"
              >
                Book Free Consultation
              </a>

              <button
                onClick={handleTalkExpertClick}
                className="hero__btn hero__btn--secondary"
              >
                Talk To An Expert
              </button>

            </div>

            {/* Trust Section */}
            {/* <div className="hero__trust-section">

              <div className="hero__trust-avatars">
                <img src="https://avatars.githubusercontent.com/u/16860528" alt="" />
                <img src="https://avatars.githubusercontent.com/u/20110627" alt="" />
                <img src="https://avatars.githubusercontent.com/u/106103625" alt="" />
                <img src="https://avatars.githubusercontent.com/u/59228569" alt="" />
                <img src="https://avatars.githubusercontent.com/u/59442788" alt="" />
                <div className="hero__trust-more">+99</div>
              </div>

              <div className="hero__trust-rating">
                <svg viewBox="0 0 24 24" fill="#FFD700" width="18">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>

                <span>4.95</span>
                <span className="dot">•</span>
                <span>1.28k reviews</span>
              </div>

            </div> */}

          </div>
        </div>

      </section>

      {isModalOpen && (
        <ConsultationModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}