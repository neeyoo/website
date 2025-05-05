import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Symbolic-level Robot Programming",
      description: "Skill-based Framework & World Modeling",
      imgUrl: projImg1,
    },
    {
      title: "Flexible Assembly Infrastructure",
      description: "Heavy & Large Products",
      imgUrl: projImg2,
    },
    {
      title: "Decision Support for Part Feeding",
      description: "Flexible Assembly Systems",
      imgUrl: projImg3,
    },
    {
      title: "Mechanised Orthosis for Children",
      description: "Neurological Disorders",
      imgUrl: projImg1,
    },
    {
      title: "Mechanical System Coupling",
      description: "Hand Operated Manipulator with Cobot",
      imgUrl: projImg2,
    },
    {
      title: "Gravity Balancer for Robotic Manipulator",
      description: "Design & Synthesis",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Robotics Projects</h2>
                  <p>Here are some of the robotics projects I've developed. Each project demonstrates my expertise in different areas of robotics engineering, from autonomous navigation to machine learning integration.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Research Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Industrial Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Open Source</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>At Flanders Make, I led projects focused on flexible assembly infrastructure for heavy and large products. This involved implementing AGV/AMR for logistics tasks, deploying fleet management systems for heterogeneous mobile robots, and creating virtual simulation models with Nvidia Isaac Sim. I also worked on decision support for part feeding of flexible assembly systems, developing models to estimate key factors of resources' process time and intralogistics resources operational unitary cost.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>During my time at HEI-JUNIA, I participated in the European INTERREG Project - MOTION, designing a scalable exoskeleton for children with neurological disorders. This involved selecting suitable motors and speed reducers, designing reference gaits and balancing control, developing dynamic models for simulation, and implementing a real-time control system using EtherCAT protocol. I also conducted experimental tests with dummy devices and pilots.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
