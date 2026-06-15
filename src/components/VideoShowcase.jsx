import heroVideo from '../assets/hero_video2.mp4'
import './VideoShowcase.css'

export default function VideoShowcase() {
  return (
    <section className="video-showcase" aria-label="Our technology in action">
      <div className="video-showcase__frame">
        <video
          className="video-showcase__video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  )
}
