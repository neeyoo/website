import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Education</h2>
                  <p>My academic background in engineering</p>
                  <div className="education-timeline">
                    <div className="education-item">
                      <div className="education-content">
                        <h3>Ph.D in Mechanical Engineering</h3>
                        <h5>Institut National des Sciences Appliquées (INSA) de Rennes, France</h5>
                        <h6>November 2015 - April 2019</h6>
                        <p>Thesis title: Design and Synthesis of Mechanical Systems with Coupled Units</p>
                        <p>Ph.D advisor: Vigen Arakelian</p>
                      </div>
                    </div>
                    <div className="education-item">
                      <div className="education-content">
                        <h3>M.Sc in Solid Mechanics</h3>
                        <h5>Northwestern Polytechnical University, Xi'an, China</h5>
                        <h6>September 2012 - March 2015</h6>
                        <p>Thesis title: Coupled Dynamic Modeling of Offshore Wind Turbine and its Structural Control</p>
                        <p>Master advisor: Erming He</p>
                        <p>Major courses: Principle of aeroelasticity, Fundamental and application of finite element method, Advanced structural dynamics, Computational fluid dynamics</p>
                      </div>
                    </div>
                    <div className="education-item">
                      <div className="education-content">
                        <h3>B.Sc in Aircraft Design and Engineering</h3>
                        <h5>Northwestern Polytechnical University, Xi'an, China</h5>
                        <h6>September 2008 - June 2012</h6>
                        <p>Major courses: Calculus, Probability theory and statistics, Linear algebra, Numerical calculation, Theoretical mechanics, Machinery design, Aerodynamics, Computer programming, Automatic control theory</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
