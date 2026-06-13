import './Footer.css'

const FOOTER_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'Services',     href: '#services' },
  { label: 'Technology',   href: '#technology' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

const SERVICES = [
  'Android / iOS Apps',
  'Web Applications',
  'Desktop Apps',
  'UI / UX Design',
  'E-Commerce',
  'SaaS Development',
]

const handleNav = (e, href) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (!target) return
  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset: 0, duration: 1.4, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
  } else {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleNav(e, '#home')}>
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#2563EB"/>
                <path d="M8 22 L16 10 L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M11.5 17.5 H20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>BRAHMAPUTRA TECH</span>
            </a>
            <p className="footer-brand-desc">
              We build stunning, scalable digital products — from mobile apps to enterprise web platforms — powered by cutting-edge technologies.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-col-links">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={(e) => handleNav(e, href)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-col-links">
              {SERVICES.map(s => (
                <li key={s}><a href="#services" onClick={(e) => handleNav(e, '#services')}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 8.81 19.79 19.79 0 01.91 2.18 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +91 98765 43210
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hello@brahmaputratech.com
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Guwahati, Assam, India
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Brahmaputra Tech. All rights reserved.</p>
          <p>Built with passion in Northeast India 🇮🇳</p>
        </div>

      </div>
    </footer>
  )
}
