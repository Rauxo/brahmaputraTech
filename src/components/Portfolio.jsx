import React from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    name: "E-Commerce Experience",
    description:
      "A modern, high-conversion shopping platform with seamless checkout and inventory management.",
    link: "https://example.com/ecommerce",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
    size: "large",
  },

  {
    id: 2,
    name: "SaaS Analytics Dashboard",
    description:
      "Real-time data visualization and management tool for enterprise metrics and user analytics.",
    link: "https://example.com/saas",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    size: "wide",
  },

  {
    id: 3,
    name: "Corporate Brand Platform",
    description:
      "A stunning corporate identity website featuring dynamic animations and responsive design.",
    link: "https://example.com/corporate",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
];
const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 style={{color:"#000"}}>Our Clients</h2>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className={`card ${project.size}`}>
            {project.image && (
              <img src={project.image} alt={project.name} />
            )}

            <p>{project.description}</p>

            <div className="client">
              <div className="avatar">
                {project.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <span>{project.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;