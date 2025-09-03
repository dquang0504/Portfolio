"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import VideoCarousel from '../components/ui/video-carousel'
import "../assets/css/projects.css";
import feCover from '../assets/images/project imgs/GoodFood-FE-cover.png'
import beCover from '../assets/images/project imgs/GoodFood-BE-cover.png'
import aiCover from '../assets/images/project imgs/GoodFood-MS-cover.png'
import portfolio from '../assets/images/project imgs/portfolio.png'

const projects = [
    {
        title: "E-commerce Website for Food ordering and Delivery",
        description:
            "Developed a full-featured e-commerce website with order, payment, review, and admin management.\nIntegrated Vertex AI chatbot for smart ordering (voice-based natural language order creation), and intelligent product search via voice & image recognition (TensorFlow).\nSupported multiple payment methods (COD, VNPAY, PayPal).\nImplemented AI-powered review filtering (toxic/NSFW detection) and sentiment analysis (positive, negative, neutral, mixed) for actionable insights in admin dashboard.\nOptimized performance with Redis cache and goroutines for faster data fetching.",
        video: ["https://c5untoriejse3yvf.public.blob.vercel-storage.com/ordering%20demo.mp4", "https://c5untoriejse3yvf.public.blob.vercel-storage.com/managing%20demo.mp4", "https://c5untoriejse3yvf.public.blob.vercel-storage.com/reviewProduct.mp4"],
        tech: ["React", "Typescript", "Golang", "PostgreSQL", "Redis", "Docker", "Python", "Tensorflow", "Hugging face", "Natural Language Processing"],
        github: "",
        demo: "https://github.com/dquang0504/GoodFood-FE",
    },
    {
        title: "Front-end for E-commerce Website GoodFood",
        description: "Developed the front-end for GoodFood, an e-commerce website for online food ordering and delivery. Implemented features such as product browsing, shopping cart, checkout, and order tracking with a responsive and user-friendly UI.",
        image: feCover,
        tech: ["React", "TypeScript", "Tailwind CSS", "React Bootstrap", "Framer Motion", "Redux", "SockJS", "Lightbox", "Firebase", "OAuth/Google"],
        github: "https://github.com/dquang0504/GoodFood-FE",
        demo: ""
    },
    {
        title: "Backend for E-commerce Website GoodFood",
        description:
            "Implemented the backend system for GoodFood, handling core business logic, database management, and secure APIs. Built with Golang and PostgreSQL for high performance and scalability.\nIntegrated VNPAY and PayPal payment gateways.\nEnhanced speed with Redis cache for product pages, product details, and review analytics.\nDeployed using Docker for maintainability.",
        image: beCover,
        tech: ["Golang", "PostgreSQL", "Fiber", "Resty", "Docker", "REST API", "JWT", "OAuth", "Websocket", "SQL Boiler", "TensorFlow", "Redis"],
        github: "https://github.com/dquang0504/GoodFood-BE",
        demo: ""
    },

    {
        title: "AI Microservice for E-commerce Website GoodFood",
        description:
            "Developed a dedicated AI microservice with Python Flask to handle intelligent content analysis for the GoodFood system. \nImplemented toxic speech filtering, sentiment analysis (positive, negative, neutral, mixed), and NSFW content detection using TensorFlow and Hugging Face models. \nDesigned the microservice to be fully decoupled from the main backend, communicating via REST APIs for scalability and modularity. \nPackaged and deployed with Docker for easy integration into the overall system.",
        image: aiCover,
        tech: ["Python", "Flask", "TensorFlow", "Hugging Face", "REST API", "Docker", "NLP"],
        github: "https://github.com/dquang0504/GoodFood-Microservice",
        demo: ""
    },

    {
        title: "Portfolio Website",
        description:
            "A personal portfolio website showcasing my background, skills, and projects. Built with React and TypeScript, enhanced by Framer Motion for smooth animations and an engaging user experience.",
        image:
            portfolio,
        tech: ["React", "TypeScript", "Framer Motion", "Node.js", "Vercel", "Aceternity UI"],
        github: "https://github.com/dquang0504/Portfolio",
        demo: "https://portfolio-showcase-william.vercel.app/",
    },
    // {
    //     title: "AI Chatbot",
    //     description:
    //         "Chatbot thời gian thực sử dụng Node.js, WebSocket và OpenAI API. Có khả năng trò chuyện, trả lời câu hỏi và hỗ trợ khách hàng tự động.",
    //     image:
    //         "https://www.elegantthemes.com/blog/wp-content/uploads/2023/09/Docsbot-Homepage-August-2023.jpg",
    //     tech: ["Node.js", "OpenAI", "WebSocket"],
    //     github: "https://github.com/yourusername/ai-chatbot",
    //     demo: "",
    // },
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
                                        style={{ cursor: 'none' }}
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
                                        style={{ cursor: 'none' }}
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
