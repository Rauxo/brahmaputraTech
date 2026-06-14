import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TrackingService } from '../utils/TrackingService'
import { gsap } from 'gsap'

export default function ConsultationModal({ onClose }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', industry: '', requirement: '' })
  const [hasStarted, setHasStarted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    gsap.fromTo(".modal-content", 
      { opacity: 0, scale: 0.9, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
    );
    gsap.fromTo(".modal-overlay", 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3 }
    );
  }, []);

  const handleChange = e => {
    if (!hasStarted) {
      setHasStarted(true);
      TrackingService.formStart('Consultation Modal');
    }
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    
    TrackingService.formSubmit('Consultation Modal', { industry: form.industry });

    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          description: `Company: ${form.company} | Industry: ${form.industry} | Req: ${form.requirement}`,
          eventName: 'form_submit',
          url: window.location.href
        })
      });

      if (response.ok) {
        onClose();
        navigate('/thank-you');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.warn('Backend is offline. Running in Inspection Mode. Redirecting to Thank You page.');
      // Fallback for inspection without backend
      onClose();
      navigate('/thank-you');
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-overlay" style={overlayStyle} onClick={onClose}>
      <div className="modal-content" style={contentStyle} onClick={e => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose}>×</button>
        <h2 style={{ marginBottom: '10px', fontSize: '2rem' }}>Book Free Consultation</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>Let's discuss how technology can accelerate your growth.</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required style={inputStyle} />
            <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required style={inputStyle} />
          </div>
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required style={inputStyle} />
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} style={inputStyle} />
            <input type="text" name="industry" placeholder="Industry (e.g. Healthcare)" value={form.industry} onChange={handleChange} style={inputStyle} />
          </div>
          
          <textarea name="requirement" placeholder="Brief Requirement..." value={form.requirement} onChange={handleChange} required rows={3} style={{...inputStyle, resize: 'none'}} />
          
          <button type="submit" disabled={isSubmitting} style={submitBtnStyle}>
            {isSubmitting ? 'Submitting...' : 'Book Consultation'}
          </button>
        </form>
      </div>
    </div>
  )
}

const overlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  zIndex: 9999
}

const contentStyle = {
  background: '#111', border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '600px',
  position: 'relative', color: '#fff'
}

const closeBtnStyle = {
  position: 'absolute', top: '20px', right: '20px',
  background: 'transparent', border: 'none', color: '#fff',
  fontSize: '1.5rem', cursor: 'pointer', opacity: 0.7
}

const inputStyle = {
  width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px',
  color: '#fff', fontSize: '1rem', outline: 'none'
}

const submitBtnStyle = {
  width: '100%', padding: '16px', background: '#fff', color: '#000',
  border: 'none', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold',
  cursor: 'pointer', marginTop: '10px'
}
