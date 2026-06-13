import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'Services',     href: '#services' },
  { label: 'Technology',   href: '#technology' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    close()
    const target = document.querySelector(href)
    if (!target) return
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: 0, duration: 1.4, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    } else {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} id="navbar">

      <a href="#home" className="navbar__logo" aria-label="Brahmaputra Tech Home" onClick={(e) => handleNav(e, '#home')}>
        <span className="navbar__logo-icon" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#2563EB"/>
            <path d="M8 22 L16 10 L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M11.5 17.5 H20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="navbar__logo-text">BRAHMAPUTRA TECH</span>
      </a>

      <nav className="navbar__links" role="navigation" aria-label="Main navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="navbar__link" onClick={(e) => handleNav(e, href)}>{label}</a>
        ))}
      </nav>

      <a href="#contact" className="navbar__cta" id="navbar-cta-btn" onClick={(e) => handleNav(e, '#contact')}>
        <span>Let's Talk</span>
        <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      <button
        className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        id="hamburger-btn"
      >
        <span className="navbar__bar" />
        <span className="navbar__bar" />
        <span className="navbar__bar" />
      </button>

      <div
        className={`navbar__backdrop${menuOpen ? ' is-open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <nav
        className={`navbar__drawer${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        
        <div className="navbar__drawer-header">
          <div className="navbar__drawer-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#2563EB"/>
              <path d="M8 22 L16 10 L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M11.5 17.5 H20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>BRAHMAPUTRA TECH</span>
          </div>
        </div>

        <div className="navbar__drawer-links">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className="navbar__drawer-link"
              style={{ '--i': i }}
              onClick={(e) => handleNav(e, href)}
            >
              <span className="navbar__drawer-link-num">0{i + 1}</span>
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="navbar__drawer-cta" onClick={(e) => handleNav(e, '#contact')}>
          <span>Let's Talk</span>
          <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <p className="navbar__drawer-footer">Digital Product Engineering</p>
      </nav>

    </header>
  )
}
