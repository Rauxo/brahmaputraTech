import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: "Rahul Saikia",
    company: "TechNova Pvt Ltd",
    position: "CEO",
    text: "Brahmaputra Tech transformed our entire digital presence. The team delivered beyond expectations — our app is stunning, fast, and our users love it. Truly world-class work.",
    date: "March 12, 2025"
  },
  {
    id: 2,
    name: "Sanjib Borah",
    company: "GreenLeaf Solutions",
    position: "Founder",
    text: "I've worked with many agencies, but none come close to the quality and professionalism of this team. They built our web platform from scratch and it works flawlessly.",
    date: "January 5, 2025"
  },
  {
    id: 3,
    name: "Aanisha Devi",
    company: "StyleHive",
    position: "Marketing Director",
    text: "The e-commerce platform they built for us increased our sales by 3x within the first month. Exceptional design, smooth animations, and rock-solid performance.",
    date: "April 20, 2025"
  },
  {
    id: 4,
    name: "Ranjit Kalita",
    company: "NorthEast Logistics",
    position: "CTO",
    text: "Our internal dashboard is now a joy to use. The attention to detail and code quality is outstanding. Brahmaputra Tech is our go-to partner for all things digital.",
    date: "February 28, 2025"
  }
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        const fromLeft = i % 2 === 0
        gsap.fromTo(card,
          { x: fromLeft ? -80 : 80, opacity: 0, y: 20 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 60%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="testimonials-section" id="testimonials" ref={sectionRef}>
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-sub">Real feedback from the people who trust us with their vision.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="testimonial-card"
              ref={el => cardsRef.current[i] = el}
            >
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-meta">{t.position}, {t.company}</span>
                </div>
                <span className="testimonial-date">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
