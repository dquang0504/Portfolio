"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "motion/react";
import {
  css,
  docker,
  fiber,
  flask,
  git,
  golang,
  googlecloud,
  html,
  huggingface,
  java,
  javascript,
  jwt,
  kubernetes,
  postgresql,
  python,
  react,
  redis,
  spring,
  tensorflow,
  typescript,
  vertexai,
  vite,
} from "../Services/imports";
import "../assets/css/skills.css";

const Skills = () => {
  const categories: Record<
    string,
    { icon: string; name: string }[]
  > = {
    Languages: [
      { icon: golang, name: "Golang" },
      {icon: java, name: "Java"},
      {icon: python, name: "Python"},
      {icon: javascript, name: "Javascript"},
      { icon: html, name: "HTML5" },
      { icon: css, name: "CSS" },
      { icon: typescript, name: "TypeScript" },
    ],
    "Frameworks/Libraries": [
      { icon: react, name: "React" },
      { icon: flask, name: "Flask" },
      { icon: fiber, name: "Fiber" },
      { icon: spring, name: "Spring Boot"},
      { icon: vite, name: "Vite" },
    ],
    "ML/Data": [
      { icon: tensorflow, name: "Tensorflow" },
      { icon: huggingface, name: "Hugging Face" },
      { icon: vertexai, name: "Vertex AI" },
    ],
    "Cloud/DevOps": [
      { icon: docker, name: "Docker" },
      { icon: kubernetes, name: "Kubernetes" },
      { icon: googlecloud, name: "Google Cloud" },
      { icon: redis, name: "Redis" },
      { icon: postgresql, name: "PostgreSQL" },
    ],
    Concepts: [
      { icon: git, name: "Git" },
      { icon: jwt, name: "JWT" },
    ],
  };

  const [activeTab, setActiveTab] = useState<keyof typeof categories>("Languages");

  return (
    <section className="skills-section" id="skills">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My expertise across various technologies and tools
        </motion.p>

        {/* Nav Tabs */}
        <div className="skills-tabs">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat as keyof typeof categories)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Skills */}
        <div className="skills-grid">
          {categories[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card neon-border"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.div
                className="skill-icon"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.6 }}
              >
                <img src={skill.icon} alt={skill.name} />
              </motion.div>
              <div className="skill-name">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
