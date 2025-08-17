"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../assets/css/projects.css";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "Personal website built with React, TypeScript and Framer Motion. Đây là nơi giới thiệu bản thân, kỹ năng, và các dự án của tôi với hiệu ứng animation mượt mà.",
        image:
            "https://i.ytimg.com/vi/Dtb3DdSvYRY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_HELxfEWp-yMsKFNTjbbCyF00Mg",
        tech: ["React", "TypeScript", "Framer Motion"],
        github: "https://github.com/yourusername/portfolio",
        demo: "https://your-portfolio.com",
    },
    {
        title: "E-commerce Platform",
        description:
            "Một nền tảng thương mại điện tử fullstack với backend Golang và PostgreSQL. Hỗ trợ đăng ký người dùng, giỏ hàng, thanh toán và quản lý đơn hàng.",
        image: "https://cmsmart.net/images/community/8382/banner.jpg",
        tech: ["Golang", "PostgreSQL", "Docker"],
        github: "https://github.com/yourusername/ecommerce",
        demo: "",
    },
    {
        title: "AI Chatbot",
        description:
            "Chatbot thời gian thực sử dụng Node.js, WebSocket và OpenAI API. Có khả năng trò chuyện, trả lời câu hỏi và hỗ trợ khách hàng tự động.",
        image:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2023/09/Docsbot-Homepage-August-2023.jpg",
        tech: ["Node.js", "OpenAI", "WebSocket"],
        github: "https://github.com/yourusername/ai-chatbot",
        demo: "",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-5">
            <Container>
                <h2 className="text-center mb-5 section-title">My Projects</h2>
                {projects.map((project, idx) => (
                    <Row
                        key={idx}
                        className={`justify-content-center align-items-center mb-5 project-row `}
                    >
                        {/* Image */}
                        <Col md={10} className="mb-3 mb-md-0">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </Col>

                        {/* Info */}
                        <Col md={10}>
                            <h3 className="text-white">{project.title}</h3>
                            <p className="text-white">{project.description}</p>
                            <div className="mb-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="badge bg-secondary me-1">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="d-flex gap-2">
                                {project.github && (
                                    <Button
                                        variant="outline-light"
                                        size="sm"
                                        href={project.github}
                                        target="_blank"
                                        className="d-flex justify-content-center align-items-center"
                                        style={{cursor: 'none'}}
                                    >
                                        <FaGithub className="me-2" /> Code
                                    </Button>
                                )}
                                {project.demo && (
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        href={project.demo}
                                        target="_blank"
                                        className="d-flex justify-content-center align-items-center"
                                        style={{cursor: 'none'}}
                                    >
                                        <FaExternalLinkAlt className="me-1" /> Live
                                    </Button>
                                )}
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};

export default Projects;
