import React from "react";
import {
  FiSearch,
  FiEdit3,
  FiCode,
  FiUploadCloud,
  FiTrendingUp
} from "react-icons/fi";
import "./OurProcess.css";

const processSteps = [
  {
    icon: <FiSearch />,
    title: "Discovery",
    subtitle: "Understand your business and goals"
  },
  {
    icon: <FiEdit3 />,
    title: "Strategy",
    subtitle: "Plan the right solution for growth"
  },
  {
    icon: <FiCode />,
    title: "Development",
    subtitle: "Build with quality and scalability"
  },
  {
    icon: <FiUploadCloud />,
    title: "Deployment",
    subtitle: "Deliver, test and go live"
  },
  {
    icon: <FiTrendingUp />,
    title: "Growth & Support",
    subtitle: "Continuous support for long term growth"
  }
];

function OurProcess() {
  return (
    <section className="process">

      <h2 className="process-heading">
        Our Process
      </h2>

      <div className="process-container">

        {processSteps.map((step, index) => (
          <React.Fragment key={index}>

            <div className="process-card">
              <div className="process-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.subtitle}</p>
            </div>

            {/* Arrow between cards */}
            {index !== processSteps.length - 1 && (
              <div className="process-arrow">→</div>
            )}

          </React.Fragment>
        ))}

      </div>

    </section>
  );
}

export default OurProcess;