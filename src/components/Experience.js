import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Work Experience</h2>
                  <p>My professional journey in robotics engineering</p>
                  <Carousel responsive={responsive} infinite={true} className="experience-slider" autoPlay={false} autoPlaySpeed={5000}>
                    <div className="item">
                      <h3>Senior Robotic Software Engineer</h3>
                      <h5>Enchanted Tools, Paris, France</h5>
                      <h6>June 2024 - Present</h6>
                      <ul>
                        <li>Lead the grasping team developing control algorithms for the dual arm of the Mirokai robot</li>
                        <li>Implemented torque/impedance control, gravity compensation, and QP-based task control</li>
                        <li>Work in a soft/hardware cross-functional role to set up hardware requirements</li>
                        <li>Conduct proof-of-concept design & testing, and testbench design</li>
                      </ul>
                    </div>
                    <div className="item">
                      <h3>Research Engineer</h3>
                      <h5>Flanders Make, Kortrijk, Belgium</h5>
                      <h6>October 2022 - June 2024</h6>
                      <ul>
                        <li>Worked as both researcher and project leader in multiple research projects</li>
                        <li>Focused on flexible robotic assembly tasks, mobile robot assembly line feeding</li>
                        <li>Developed skill-based robotic programming and force-based robotic manipulator control</li>
                        <li>Simplified robot programming for non-expert users and tackled non-repetitive reconfigurable robotic tasks</li>
                      </ul>
                    </div>
                    <div className="item">
                      <h3>Postdoctoral Researcher and Temporary Lecturer</h3>
                      <h5>HEI - JUNIA, Lille, France</h5>
                      <h6>June 2019 - October 2022</h6>
                      <ul>
                        <li>Participated in the European INTERREG Project - MOTION (7 million euros funding)</li>
                        <li>Led the design of a lower-limb exoskeleton prototype for children with neurological disorders</li>
                        <li>Responsible for mechanical design, actuation unit, and software development</li>
                        <li>Taught Machine Learning and Robotics courses</li>
                      </ul>
                    </div>
                  </Carousel>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="Background" />
    </section>
  );
};
