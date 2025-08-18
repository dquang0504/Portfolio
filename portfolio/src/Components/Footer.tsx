"use client";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../assets/css/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="mb-4 footer-top justify-content-center align-items-center">
          {/* Branding / About */}
          <Col md={4} className="mb-3">
            <motion.h3
              className="footer-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Quang
            </motion.h3>
            <motion.p
              className="footer-tagline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building scalable systems & APIs
            </motion.p>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-3">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Social / Contact */}
          <Col md={5} className="mb-3">
            <h5 className="footer-heading">Get in touch</h5>
            <div className="footer-social d-flex gap-3">
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:you@example.com"
                className="social-icon"
                whileHover={{ scale: 1.2 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
            <motion.p
              className="mt-3 small"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              © {year} Quang · All rights reserved
            </motion.p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
