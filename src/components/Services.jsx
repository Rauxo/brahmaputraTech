import React from "react";
import {
  FiGlobe,
  FiTarget,
  FiSettings,
  FiMonitor,
  FiCpu,
  FiHeart
} from "react-icons/fi";
import "./Services.css";

const services = [
  {
    icon: <FiGlobe />,
    title: "Digital Presence Solutions",
    items: [
      "Corporate Websites",
      "E-Commerce Websites",
      "Portals",
      "Landing Pages"
    ]
  },
  {
    icon: <FiTarget />,
    title: "Lead Generation Systems",
    items: [
      "Meta Ads",
      "Google Ads",
      "Landing Pages",
      "CRM Integration"
    ]
  },
  {
    icon: <FiSettings />,
    title: "Business Automation",
    items: [
      "Whatsapp Automation",
      "CRM Systems",
      "Workflow Automation"
    ]
  },
  {
    icon: <FiMonitor />,
    title: "Custom Software Development",
    items: [
      "ERP",
      "CRM",
      "School Management",
      "Hospital Management"
    ]
  },
  {
    icon: <FiCpu />,
    title: "AI Solutions",
    items: [
      "AI Chatbots",
      "AI Assistants",
      "AI Automation"
    ]
  },
  {
    icon: <FiHeart />,
    title: "Branding & Creative Solutions",
    items: [
      "Brand Identity",
      "Graphics Design",
      "UI/UX Design",
      "Content Creation"
    ]
  }
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <h2 className="services-heading">
          Technology Solutions That Drive Business Growth
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}