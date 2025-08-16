import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/about.css';
import { FaBirthdayCake, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';
import { motion } from "motion/react";


const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        {/* Title */}
        <Row>
          <Col>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              A quick overview of my personal info & education
            </p>
          </Col>
        </Row>

        {/* Intro */}
        <Row className="align-items-center mb-5">
          <Col xs={6} md={6}>
            <h3>
              Hi, I'm <span className="highlight">Đặng Duy Quang</span>
            </h3>
            <p>
              I'm a Fullstack Developer based in Can Tho, Viet Nam.
              I specialize in backend development with <strong>Golang</strong> and API design,
              and I also work on the front-end side when needed.
            </p>
            <p>
              I build high-performance and scalable web applications, focusing on clean architecture
              and maintainable code. My skill set includes Go, RESTful API design, SQL optimization, data caching
              and modern front-end frameworks like React.
            </p>
            <p>
              Whether it's designing robust backend systems or delivering seamless user experiences,
              I’m passionate about turning complex problems into simple, effective digital solutions.
            </p>



            {/* Personal Info Cards */}
            {/* <Row className="g-3 mt-4">
              
            </Row> */}
          </Col>
          <Col md={6}>
            <Row className='g-3'>
              <Col xs={6}>
                <div className="info-card">
                  <FaBirthdayCake className="info-icon" />
                  <span>01 Jan 2000</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="info-card">
                  <FaPhoneAlt className="info-icon" />
                  <span>+84 123 456 789</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="info-card">
                  <FaEnvelope className="info-icon" />
                  <span>duyquang@example.com</span>
                </div>
              </Col>
              <Col xs={6}>
                <div className="info-card">
                  <FaMapMarkerAlt className="info-icon" />
                  <span>Can Tho, Viet Nam</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Education Timeline */}
        <Row>
          <Col>
            <h3 className="section-subtitle">Education</h3>
            <div className="timeline">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`timeline-item ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`}>
                    <motion.div 
                      className="timeline-dot"
                      animate={{scale: [1, 1.3, 1]}}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                    <div className="timeline-content">
                      <h4>FPT Polytechnic College</h4>
                      <small>2022 - 2024</small>
                      <p>College Diploma in Software Development – Specialized in backend development, system design, and cloud deployment.</p>
                    </div>
                  </div>
                )}
              </TrackVisibility>

              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`timeline-item ${isVisible ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}`}>
                    <motion.div 
                      className="timeline-dot"
                      animate={{scale: [1, 1.3, 1]}}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                    <div className="timeline-content">
                      <h4>Self-learning & Certifications</h4>
                      <small>Ongoing</small>
                      <p>Google Cloud, Docker & Kubernetes, Advanced Golang Patterns, and system scalability.</p>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
