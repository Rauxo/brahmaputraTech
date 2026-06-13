import heroVideo from '../assets/hero_video2.mp4'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero section">

      {/* ── Video Background ── */}
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

      {/* ── Main Content ── */}
      <div className="hero__content hero__content--centered">

        <h1 className="hero__heading">
          Step into the digital<br />world with <span className="hero__heading-accent">Us</span>
        </h1>

        <p className="hero__subtext">
          Empowering businesses with smart, scalable software.
        </p>

        <a href="#contact" className="hero__btn hero__btn--primary">
          <span>GET STARTED</span>
          <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

      </div>

    </section>
  )
}
