import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  "Android / iOS App Development",
  "Web Application Development",
  "Desktop App Development",
  "UI / UX Design",
  "E-Commerce Development",
  "SaaS Product Development",
  "Other"
]

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const leftRef = useRef(null)

  const [form, setForm] = useState({ name: '', phone: '', service: '', description: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
      gsap.fromTo(formRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', service: '', description: '' })
  }

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-inner">

        <div className="contact-left" ref={leftRef}>
          <h2 className="contact-title">Let's Build Something<br /><span className="contact-accent">Great Together</span></h2>
          <p className="contact-desc">Have a project in mind? Tell us about it and we'll get back to you within 24 hours.</p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 8.81 19.79 19.79 0 01.91 2.18 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">+91 98765 43210</span>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">hello@brahmaputratech.com</span>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Guwahati, Assam, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper" ref={formRef}>
          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you! We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Rahul Saikia"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Contact Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="e.g. +91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="service">Select Service</label>
                <div className="form-select-wrapper">
                  <select
                    id="service"
                    name="service"
                    className="form-select"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Choose a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <svg className="select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="description">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-textarea"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  value={form.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
