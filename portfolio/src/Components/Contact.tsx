"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import '../assets/css/contact.css'
import { SpaceToast } from "@/components/ui/space-toast";

const Contact = () => {

    const [form,setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async()=>{
        try {
            const res = await fetch("/api/contact",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form),
            });
            if (res.ok){
                SpaceToast.success("Message sent to the galaxy!")
                setForm({name: '',email: '',message: ''})
            }else{
                SpaceToast.error("Signal lost in space!")
            }
        } catch (error) {
            console.log("❌ Something went wrong: ",error);
        }
    }

    return (
        <section id="contact" className="py-5">
            <Container>
                {/* Title */}
                <motion.h2
                    className="text-center mb-5 section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Reach Out To Me
                </motion.h2>
                <p className="section-subtitle mb-2">Discuss about anything you want with me or just simply say hello!</p>
                <motion.div className="d-flex justify-center">
                    <DotLottieReact
                        src="https://lottie.host/5d64fdfb-bcbc-43e2-9daa-709ec70b71e5/CWxJoYInmO.lottie"
                        loop
                        autoplay
                        style={{
                            width: "24px",
                            height: "24px",
                            display: "inline-block",
                            verticalAlign: "middle",
                            marginRight: "6px",
                            background: '#fff',
                            border: '1px solid white',
                            borderRadius: '50%'
                        }}
                    />
                    <p className="section-subtitle">Response time: 24 hours</p>
                </motion.div>

                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <motion.div
                            className="p-4 rounded-3 bg-dark shadow-lg"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Form onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label className="text-white">Your Name</Form.Label>
                                    <Form.Control
                                        value={form.name}
                                        required
                                        onChange={(e)=>setForm({...form,name: e.target.value})}
                                        type="text"
                                        placeholder="What should I call you ?"
                                        className="bg-transparent text-white border-secondary custom-input"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="text-white">Email</Form.Label>
                                    <Form.Control
                                        value={form.email}
                                        required
                                        onChange={(e)=>setForm({...form,email: e.target.value})}
                                        type="email"
                                        placeholder="No spam, I promise (maybe 😏)"
                                        className="bg-transparent text-white border-secondary custom-input"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label className="text-white">Message</Form.Label>
                                    <Form.Control
                                        value={form.message}
                                        required
                                        onChange={(e)=>setForm({...form,message: e.target.value})}
                                        as="textarea"
                                        rows={4}
                                        placeholder="Tell me what’s on your mind 💡"
                                        className="bg-transparent text-white border-secondary custom-input"
                                    />
                                </Form.Group>

                                {/* Animated button */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Button
                                            type="submit"
                                            variant="warning"
                                            className="w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
                                        >
                                            <FaPaperPlane /> Send Message
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </Form>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
