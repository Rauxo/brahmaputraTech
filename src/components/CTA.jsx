import React, { useState } from "react";
import "./CTA.css";
import rocket from "../assets/rocket.png";
import { TrackingService } from "../utils/TrackingService";
import ConsultationModal from "./ConsultationModal";

function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConsultationClick = (e) => {
    e.preventDefault();
    TrackingService.consultationClick("Hero Section");
    TrackingService.pushEvent("hero_consultation_click");
    setIsModalOpen(true);
  };

  const handleTalkExpertClick = () => {
    TrackingService.whatsappClick("Hero Talk To An Expert");
    TrackingService.pushEvent("hero_whatsapp_click");
    window.open("https://wa.me/917002776479", "_blank");
  };
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        {/* left */}

        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>

          <p>
            Let’s discuss how technology can help your business attract more
            customers, streamline operations, and grow efficiently.
          </p>

          <div className="cta-buttons">
            <button
              className="cta-btn primary"
              onClick={handleConsultationClick}
            >
              Book Free Consultation
            </button>

            <button
              className="cta-btn secondary"
              onClick={handleTalkExpertClick}
            >
              Talk To An Expert
            </button>
          </div>
        </div>

        {/* right */}

        <div className="cta-image-wrapper">
          <img src={rocket} alt="Rocket" />
        </div>
      </div>
      {isModalOpen && (
        <ConsultationModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}

export default CTA;
