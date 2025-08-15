import React from 'react';
import { Container } from 'react-bootstrap';
import { FaDocker, FaCloud, FaGitAlt } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiPostgresql, SiKubernetes, SiRedis, SiReact, SiTypescript } from 'react-icons/si';
import '../assets/css/skills.css';
import { css, docker, flask, git, golang, googlecloud, html, huggingface, jwt, kubernetes, postgresql, react, redis, tensorflow, typescript, vertexai } from '../Services/imports';


const Skills = () => {
    const skills = [
        { icon: golang, name: "Golang" },
        { icon: postgresql, name: "PostgreSQL" },
        { icon: redis, name: "Redis" },
        { icon: docker, name: "Docker" },
        { icon: kubernetes, name: "Kubernetes" },
        { icon: googlecloud, name: "Google Cloud" },
        { icon: react, name: "React" },
        { icon: typescript, name: "TypeScript" },
        { icon: git, name: "Git" },
        { icon: html, name: "HTML5" },
        { icon: css, name: "CSS" },
        { icon: vertexai, name: "Vertex AI" },
        { icon: jwt, name: "JWT" },
        { icon: tensorflow, name: "Tensorflow" },
        { icon: flask, name: "Flask" },
        { icon: huggingface, name: "Hugging face" },
    ];

    return (
        <section className="skills-section" id="skills">
            <Container>
                <h2 className="section-title">Tech Stack</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-icon">
                                <img src={skill.icon} alt="" />
                            </div>
                            <div className="skill-name">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills;
