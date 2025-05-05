import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of my technical skills and expertise in robotics engineering.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Programming" />
                  <h5>Programming</h5>
                  <p>C/C++, Python, Matlab</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Robotics Software" />
                  <h5>Robotics Software</h5>
                  <p>ROS/ROS2, Orocos RTT/eTaSL, Pinocchio, MoveIt!, OpenRMF</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Simulation" />
                  <h5>Simulation</h5>
                  <p>Gazebo, Isaac Sim, Visual Component, Simscape, MSC. Adams</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="Real-Time Control" />
                  <h5>Real-Time Control</h5>
                  <p>EtherCAT, Simulink Realtime, Speedgoat, TwinCAT</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Machine Learning & CV" />
                  <h5>Machine Learning & CV</h5>
                  <p>Tensorflow, PyTorch, Scikit-learn, Open3D, OpenCV, YOLO</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Robot Experience" />
                  <h5>Robot Experience</h5>
                  <p>Kuka iiwa, UR10, Staubli Tx90, EvoRobot, Mir, Mirokai</p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
