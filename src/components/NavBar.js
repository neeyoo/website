import { useEffect, useState } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import logo from '../assets/img/yz-futuristic-logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/github-icon.svg';
import scholarIcon from '../assets/img/google-scholar-icon.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setSrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setSrolled(true);
            } else {
                setSrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}> Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}> Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/yang-zhang66/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/neeyoo" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a>
                            <a href="https://scholar.google.com/citations?user=0YZbqOQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><img src={scholarIcon} alt="GoogleScholar" /></a>
                        </div>
                        <a href="#connect">
                            <button className="vvd" onClick={() => onUpdateActiveLink('connect')}><span>Let's Connect</span></button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
