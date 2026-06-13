import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "E-Commerce Experience",
    description: "A modern, high-conversion shopping platform with seamless checkout and inventory management.",
    link: "https://example.com/ecommerce",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#e2e8f0"
  },
  {
    id: 2,
    name: "SaaS Analytics Dashboard",
    description: "Real-time data visualization and management tool for enterprise metrics and user analytics.",
    link: "https://example.com/saas",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#dbeafe"
  },
  {
    id: 3,
    name: "Corporate Brand Platform",
    description: "A stunning corporate identity website featuring dynamic animations and responsive design.",
    link: "https://example.com/corporate",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#f3e8ff"
  }
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".portfolio-panel");
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          
          end: () => "+=" + wrapperRef.current.offsetWidth
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="portfolio-section" ref={sectionRef} id="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Our Clients</h2>
      </div>

      <div className="portfolio-wrapper" ref={wrapperRef}>
        {projects.map((project, index) => (
          <div className="portfolio-panel" key={project.id}>
            <div className="portfolio-content-horizontal">

              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.name} className="portfolio-image" />
              </div>

              <div className="portfolio-details">
                <span className="portfolio-number">0{index + 1}</span>
                <h3 className="portfolio-name">{project.name}</h3>
                <p className="portfolio-desc">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="portfolio-link">
                  <span>View Live Site</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
