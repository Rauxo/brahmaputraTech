import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const phoneTexts = ['Innovative UI/UX', 'Seamless Performance', 'Cross-Platform', 'Native Experience'];
const laptopTexts = ['Custom Web Apps', 'Enterprise Software', 'Scalable Architecture', 'Responsive Design'];

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Services = () => {
  const [phoneTextIndex, setPhoneTextIndex] = useState(0);
  const [laptopTextIndex, setLaptopTextIndex] = useState(0);

  useEffect(() => {
    const phoneInterval = setInterval(() => {
      setPhoneTextIndex((prev) => (prev + 1) % phoneTexts.length);
    }, 2000);

    const laptopInterval = setInterval(() => {
      setLaptopTextIndex((prev) => (prev + 1) % laptopTexts.length);
    }, 2500);

    return () => {
      clearInterval(phoneInterval);
      clearInterval(laptopInterval);
    };
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="service-row">
          <motion.div 
            className="service-content"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="service-title">Android/IOS Apps</h2>
            <p className="service-desc">
              Our expert in-house team uses cutting edge technologies to build IOS and Android Apps that are stunning, robust and scalable.
            </p>
          </motion.div>
          
          <motion.div 
            className="service-visual"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="changing-text-container">
                  <span className="changing-text" key={`phone-${phoneTextIndex}`}>
                    {phoneTexts[phoneTextIndex]}
                  </span>
                </div>
              </div>
              <div className="phone-home-btn"></div>
            </div>
          </motion.div>
        </div>

        <div className="service-row reverse">
          <motion.div 
            className="service-content"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="service-title">Web-Apps/Desktop Apps</h2>
            <p className="service-desc">
              Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning, robust and scalable.
            </p>
          </motion.div>
          
          <motion.div 
            className="service-visual"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="laptop-mockup">
              <div className="laptop-screen">
                <div className="laptop-display">
                  <div className="changing-text-container">
                    <span className="changing-text" key={`laptop-${laptopTextIndex}`}>
                      {laptopTexts[laptopTextIndex]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="laptop-keyboard">
                <div className="laptop-trackpad"></div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;
