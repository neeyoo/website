import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/yz-futuristic-logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github-icon.svg";
import scholarIcon from "../assets/img/google-scholar-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yang-zhang66/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/neeyoo" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a>
              <a href="https://scholar.google.com/citations?user=0YZbqOQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><img src={scholarIcon} alt="GoogleScholar" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()} | Yang Zhang | Robotics Engineer. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
