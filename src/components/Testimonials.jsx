import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Brahmaputra Tech understood our requirements perfectly and delivered beyond expectations. Highly professional team with great support.",
    name: "Rahul Saikia",
    company: "TechNova Pvt Ltd"
  },
  {
    text: "Amazing development quality and smooth communication throughout the project. The final result exceeded our expectations.",
    name: "Sanjib Borah",
    company: "GreenLeaf Solutions"
  },
  {
    text: "Professional, fast and highly skilled team. Our website and automation system now runs flawlessly.",
    name: "Aanisha Devi",
    company: "StyleHive"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials" id="testimonials">

      <h2 className="testimonials-heading">
        What Our Clients Say
      </h2>

      <div className="testimonial-box">

        <span className="quote-left">❝</span>

        <div className="testimonial-content">

          <p className="testimonial-text">
            {testimonials[current].text}
          </p>

          <h4>
            — {testimonials[current].name}, {testimonials[current].company}
          </h4>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={current === index ? "dot active" : "dot"}
              />
            ))}
          </div>

        </div>

        <span className="quote-right">❞</span>

      </div>

    </section>
  );
}