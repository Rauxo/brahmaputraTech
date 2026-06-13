import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiJavascript } from 'react-icons/si';
import './Technologies.css';

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Set initial positions of the second and third cards completely off-screen to the left
      gsap.set(".card-2", { x: "-100vw" });
      gsap.set(".card-3", { x: "-100vw" });

      // Create the pinning timeline
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // Scroll distance for 2 cards to slide in
          pin: true,
          scrub: 1, // Smooth scrub effect
        }
      });

      // Animate Card 2 sliding in from the left, stacking on top of Card 1
      tl.to(".card-2", {
        x: 0,
        ease: "none"
      })
      // Animate Card 3 sliding in from the left, stacking on top of Card 2
      .to(".card-3", {
        x: 0,
        ease: "none"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="tech-section-wrapper" ref={sectionRef}>
      <div className="tech-container">
        <h2 className="tech-title">Technologies We Use</h2>
        <p className="tech-subtitle">We leverage modern, scalable tech stacks to deliver premium solutions.</p>
        
        <div className="tech-cards-container">
          
          {/* Card 1: Frontend (Base Layer) */}
          <div className="tech-card card-1">
            <h3>Frontend</h3>
            <div className="tech-icons">
              <div className="tech-item"><FaReact color="#61DAFB" /><span>React</span></div>
              <div className="tech-item"><FaVuejs color="#4FC08D" /><span>Vue.js</span></div>
              <div className="tech-item"><FaAngular color="#DD0031" /><span>Angular</span></div>
              <div className="tech-item"><SiJavascript color="#F7DF1E" /><span>JavaScript</span></div>
              <div className="tech-item"><FaHtml5 color="#E34F26" /><span>HTML5</span></div>
              <div className="tech-item"><FaCss3Alt color="#1572B6" /><span>CSS3</span></div>
            </div>
          </div>

          {/* Card 2: Backend (Slides in and covers Card 1) */}
          <div className="tech-card card-2">
            <h3>Backend</h3>
            <div className="tech-icons">
              <div className="tech-item"><FaNodeJs color="#339933" /><span>Node.js</span></div>
              <div className="tech-item"><FaPython color="#3776AB" /><span>Python</span></div>
              <div className="tech-item"><FaJava color="#007396" /><span>Java</span></div>
              <div className="tech-item"><FaPhp color="#777BB4" /><span>PHP</span></div>
            </div>
          </div>

          {/* Card 3: Database (Slides in and covers Card 2) */}
          <div className="tech-card card-3">
            <h3>Database</h3>
            <div className="tech-icons">
              <div className="tech-item"><SiMongodb color="#47A248" /><span>MongoDB</span></div>
              <div className="tech-item"><SiPostgresql color="#4169E1" /><span>PostgreSQL</span></div>
              <div className="tech-item"><SiMysql color="#4479A1" /><span>MySQL</span></div>
              <div className="tech-item"><SiFirebase color="#FFCA28" /><span>Firebase</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;
