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
          GET STARTED
        </a>

      </div>

    </section>
  )
}
