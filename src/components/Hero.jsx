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
      <div className="hero__content">
        <div className="hero__left">

          {/* Heading */}
          <h1 className="hero__heading">
            Building Software<br />
            That Powers<br />
            <span className="hero__heading-accent">The Future</span>
          </h1>

          {/* Subtext */}
          <p className="hero__subtext">
            We design and develop scalable web platforms,
            high-performance applications, and production-ready
            digital systems engineered for modern businesses.
          </p>

        </div>
      </div>

    </section>
  )
}
