import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDatabase, FaDocker, FaCloud, FaGitAlt } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiPostgresql, SiKubernetes, SiRedis, SiReact, SiTypescript } from 'react-icons/si';
import '../assets/css/skills.css';

const Skills = () => {
    const skills = [
        { icon: <FaGolang />, name: "Golang" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <FaCloud />, name: "Google Cloud" },
        { icon: <SiReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaGitAlt />, name: "Git / GitHub" },
    ];

    return (
        <section className='skills-section' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title">Skills</h2>
                        <p className="section-subtitle">
                            My tech stack and tools for building robust applications
                        </p>
                    </Col>
                </Row>

                {/* Marquee effect */}
                <div className="skills-marquee">
                    <div className="skills-track">
                        {skills.concat(skills).map((skill, index) => (
                            <div key={index} className="skill-pill">
                                <span className='skill-icon'>{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;
