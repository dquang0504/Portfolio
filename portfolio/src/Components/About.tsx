import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/about.css';
import { FaBirthdayCake, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';


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
          <Col xs={12} md={6}>
            <h3>Hello! I'm <span className="highlight">Duy Quang</span></h3>
            <p>
              I'm a backend engineer specialized in Golang. I love designing RESTful APIs,
              optimizing database queries, and building scalable systems.
            </p>

            {/* Personal Info Cards */}
            <Row className="g-3 mt-4">
              <Col sm={6}>
                <div className="info-card">
                  <FaBirthdayCake className="info-icon" />
                  <span>01 Jan 2000</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="info-card">
                  <FaPhoneAlt className="info-icon" />
                  <span>+84 123 456 789</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="info-card">
                  <FaEnvelope className="info-icon" />
                  <span>duyquang@example.com</span>
                </div>
              </Col>
              <Col sm={6}>
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
              <TrackVisibility once>
                {({ isVisible }) => (
                  <div className={`timeline-item ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>FPT University</h4>
                      <small>2020 - Present</small>
                      <p>Bachelor of Software Engineering – Specialized in backend development, system design, and cloud deployment.</p>
                    </div>
                  </div>
                )}
              </TrackVisibility>

              <TrackVisibility once>
                {({ isVisible }) => (
                  <div className={`timeline-item ${isVisible ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}`}>
                    <div className="timeline-dot"></div>
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
