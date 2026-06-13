import React from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    name: "E-Commerce Experience",
    description: "A modern, high-conversion shopping platform with seamless checkout and inventory management.",
    link: "https://example.com/ecommerce",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "SaaS Analytics Dashboard",
    description: "Real-time data visualization and management tool for enterprise metrics and user analytics.",
    link: "https://example.com/saas",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Corporate Brand Platform",
    description: "A stunning corporate identity website featuring dynamic animations and responsive design.",
    link: "https://example.com/corporate",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Mobile Banking App",
    description: "A sleek, secure mobile banking application with real-time transactions and smart analytics.",
    link: "https://example.com/banking",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Healthcare Platform",
    description: "A comprehensive digital healthcare platform streamlining appointments and patient records.",
    link: "https://example.com/healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Our Clients</h2>
      </div>

      <div className="marquee-outer">
        <div className="marquee-track">
          {[...projects, ...projects].map((project, index) => (
            <div className="portfolio-content-horizontal" key={index}>
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.name} className="portfolio-image" />
              </div>
              <div className="portfolio-details">
                <span className="portfolio-number">0{(index % projects.length) + 1}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
