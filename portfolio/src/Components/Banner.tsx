import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import HeaderImg from '../assets/images/header-img.png';
import '../assets/css/banner.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [`fmt.Println("Golang Developer")`, `fmt.Println("Backend Engineer")`, `fmt.Println("API Designer")`];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className='banner go-banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>
                                        Welcome to my Go Portfolio
                                    </span>

                                    {/* Khối code Go */}
                                    <SyntaxHighlighter
                                        language="go"
                                        style={vscDarkPlus}
                                        customStyle={{
                                            borderRadius: '10px',
                                            fontSize: '1rem',
                                            padding: '20px',
                                            marginTop: '20px'
                                        }}
                                    >
{`package main

import "fmt"

func main() {
    fmt.Println("Hi, I'm Duy Quang")
    ${text}
    fmt.Println("Love building APIs & scalable systems")
}`}
                                    </SyntaxHighlighter>

                                    <button                               
                                        style={{ marginTop: '20px' }}
                                        onClick={() => console.log('connect')}
                                    >
                                        <span className='d-flex justify-content-center'>
                                            <ArrowRightCircle className='mx-2' size={25}/> Let's Connect
                                        </span>
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} className='text-center'>
                        <img src={HeaderImg} alt="Header Img" className="floating-img" />

                        {/* Job title */}
                        <h3 className='job-title'>Fullstack Developer</h3>
                        <p className="job-subtitle">Go • Web Development • Scalable Systems</p>

                        {/* Action Buttons */}
                        <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
                            <a
                                href="/cv.pdf" // link tới file CV của bạn
                                download
                                className="btn-custom"
                            >
                                📄 Download CV
                            </a>
                            <a
                                href="#contact" // link tới section liên hệ
                                className="btn-custom secondary"
                            >
                                <DotLottieReact
                                    src="https://lottie.host/e68b5504-1198-4a9e-aec9-75a3f43e082d/JUXE4RerqT.lottie"
                                    loop
                                    autoplay
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                        marginRight: "6px"
                                    }}
                                /> Contact Me
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
