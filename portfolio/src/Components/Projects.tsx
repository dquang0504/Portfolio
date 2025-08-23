"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import VideoCarousel from '../components/ui/video-carousel'
import "../assets/css/projects.css";


const projects = [
    {
        title: "E-commerce Website for Food ordering and Delivery",
        description:
            "Developed a full-featured e-commerce website with order, payment, review, and admin management.\nIntegrated Vertex AI chatbot for smart ordering (voice-based natural language order creation), and intelligent product search via voice & image recognition (TensorFlow).\nSupported multiple payment methods (COD, VNPAY, PayPal).\nImplemented AI-powered review filtering (toxic/NSFW detection) and sentiment analysis (positive, negative, neutral, mixed) for actionable insights in admin dashboard.",
        video: ["https://c5untoriejse3yvf.public.blob.vercel-storage.com/ordering%20demo.mp4","https://c5untoriejse3yvf.public.blob.vercel-storage.com/managing%20demo.mp4"],
        tech: ["React", "Typescript", "Golang", "PostgreSQL", "Docker", "Python", "Tensorflow", "Hugging face", "Natural Language Processing"],
        github: "",
        demo: "https://github.com/yourusername/ecommerce",
    },
    {
        title: "Front-end for E-commerce Website GoodFood",
        description:
            "Chatbot thời gian thực sử dụng Node.js, WebSocket và OpenAI API. Có khả năng trò chuyện, trả lời câu hỏi và hỗ trợ khách hàng tự động.",
        image:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2023/09/Docsbot-Homepage-August-2023.jpg",
        tech: ["Node.js", "OpenAI", "WebSocket"],
        github: "https://github.com/yourusername/ai-chatbot",
        demo: "",
    },
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
                        {/* Image or Videos */}
                        <Col md={10} className="mb-3 mb-md-0">
                            <div className="project-image-container">
                                {project.video ? (
                                    <VideoCarousel videos={project.video}></VideoCarousel>
                                    ) : (
                                    <img src={project.image} alt={project.title} className="w-100 rounded shadow" />
                                )}
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
