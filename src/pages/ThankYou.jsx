import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TrackingService } from '../utils/TrackingService'
import { gsap } from 'gsap'

export default function ThankYou() {
  useEffect(() => {
    // Fire the lead_generated event when this page loads
    TrackingService.leadGenerated('Contact Form');
    TrackingService.pageView(window.location.pathname);

    // Simple animation
    gsap.fromTo(".thankyou-container", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="thankyou-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 20px' }}>
      <div className="thankyou-container" style={{ maxWidth: '600px', background: 'rgba(255, 255, 255, 0.03)', padding: '50px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '24px' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: '700', color: '#fff' }}>Thank You!</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '32px', lineHeight: '1.6' }}>
          We have received your message. Our team will get back to you within 24 hours to discuss your project in detail.
        </p>
        <Link to="/" style={{ display: 'inline-block', padding: '14px 32px', background: '#fff', color: '#000', textDecoration: 'none', borderRadius: '50px', fontWeight: '600', transition: 'transform 0.3s ease' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Return to Home
        </Link>
      </div>
    </section>
  )
}
