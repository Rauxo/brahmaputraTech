import React from "react";
import {
  FiBookOpen,
  FiHeart,
  FiHome,
  FiTrendingUp,
  FiImage,
  FiBriefcase,
} from "react-icons/fi";
import "./Industries.css";

const industries = [
  {
    icon: <FiBookOpen />,
    title: "Education",
  },
  {
    icon: <FiHeart />,
    title: "Healthcare",
  },
  {
    icon: <FiHome />,
    title: "Construction & Real Estate",
  },
  {
    icon: <FiTrendingUp />,
    title: "Manufacturing",
  },
  {
    icon: <FiImage />,
    title: "Hospitality",
  },
  {
    icon: <FiBriefcase />,
    title: "SMEs & Professional Services",
  },
];

function Industries() {
  return (
    <section className="industries">
      <h2 className="industries-heading">Industries We Work With</h2>
      <div className="industries-container">
        {industries.map((item, index) => (
          <div
            className={`industry-card ${
              index !== industries.length - 1 ? "industry-border" : ""
            }`}
            key={index}
          >
            <div className="industry-icon">{item.icon}</div>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Industries;
