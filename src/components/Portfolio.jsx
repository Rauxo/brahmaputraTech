import React from "react";
import "./Portfolio.css";

import time8 from "../assets/time8.jpg";
import ask from "../assets/ask.webp";

const projects = [
  {
    id: 1,
    name: "Pride East Entertainment",
    subtitle: "News Portal Development",
    image: time8,
    link: "#"
  },
  {
    id: 2,
    name: "ASK ENGINEERINGS",
    subtitle: "Industrial Website Development",
    image: ask,
    link: "#"
  },
  {
    id: 3,
    name: "Future Project",
    subtitle: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

function Portfolio() {
  return (
    <section className="portfolio">

      <h2 className="portfolio-heading">
        Our Portfolio
      </h2>

      <div className="portfolio-wrapper">

        {/* Left Arrow */}
        <button className="portfolio-arrow">‹</button>

        <div className="portfolio-grid">

          {projects.map((project) => (
            <div className="portfolio-card" key={project.id}>

              <img
                src={project.image}
                alt={project.name}
                className="portfolio-image"
              />

              <div className="portfolio-content">

                <h3>{project.name}</h3>

                <p>{project.subtitle}</p>

                <a href={project.link}>
                  View Case Study →
                </a>

              </div>

            </div>
          ))}

        </div>

        {/* Right Arrow */}
        <button className="portfolio-arrow">›</button>

      </div>

    </section>
  );
}

export default Portfolio;