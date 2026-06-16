import React from "react";
import {
  FiMapPin,
  FiShield,
  FiTrendingUp,
  FiLayers,
  FiTarget,
  FiLifeBuoy
} from "react-icons/fi";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: <FiMapPin />,
    title: "Deep Understanding of Northeast India"
  },
  {
    icon: <FiShield />,
    title: "5+ Years Industry Experience"
  },
  {
    icon: <FiTrendingUp />,
    title: "Growth-Focused Approach"
  },
  {
    icon: <FiLayers />,
    title: "Scalable Technology Solutions"
  },
  {
    icon: <FiTarget />,
    title: "Business-Centric Thinking"
  },
  {
    icon: <FiLifeBuoy />,
    title: "Reliable Support"
  }
];

function WhyChooseUs() {
  return (
    <section className="whychoose">

      <h2 className="whychoose-heading">
        Why Choose Us
      </h2>

      <div className="whychoose-container">

        {reasons.map((item, index) => (
          <div
            key={index}
            className={`why-card ${
              index !== reasons.length - 1 ? "why-border" : ""
            }`}
          >
            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default WhyChooseUs;