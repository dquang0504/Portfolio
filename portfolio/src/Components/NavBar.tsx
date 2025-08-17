import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavIcon1 from '../assets/images/nav-icon1.svg'
import NavIcon2 from '../assets/images/nav-icon2.svg'
import NavIcon3 from '../assets/images/nav-icon3.svg'
import '../assets/css/navbar.css';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value: string)=>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={`${scrolled ? 'scrolled' : ''}`}>
            <Container>
                {/* <Navbar.Brand href="#home">
                <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    color: '#FFDD57',
                    letterSpacing: '1px',
                }}>
                    Duy Quang
                </span>
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href='#about' className={activeLink === 'about' ? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/duy-quang-dang-8a668b294/"><img src={NavIcon1} alt="li" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="#"><img src={NavIcon2} alt="tw" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="#"><img src={NavIcon3} alt="yt" /></a>
                    </div>
                    <button className='vvd' onClick={()=>console.log("connect")}>
                        <span>Let's Connect</span>
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;