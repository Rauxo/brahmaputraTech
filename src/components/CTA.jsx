import React from "react";
import "./CTA.css";
import rocket from "../assets/rocket.png";   

function CTA() {
  return (
    <section className="cta-section" id="contact">

      <div className="cta-container">

        {/* left */}

        <div className="cta-content">

          <h2>
            Ready to Transform Your Business?
          </h2>

          <p>
            Let’s discuss how technology can help your business attract more customers,
            streamline operations, and grow efficiently.
          </p>

          <div className="cta-buttons">

            <button className="cta-btn primary">
              Book Free Consultation
            </button>

            <button className="cta-btn secondary">
              Talk To An Expert
            </button>

          </div>

        </div>

        {/* right */}

        <div className="cta-image-wrapper">
          <img src={rocket} alt="Rocket" />
        </div>

      </div>

    </section>
  );
}

export default CTA;