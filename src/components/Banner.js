import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Robotics Engineer", "Control Systems Specialist", "Research Engineer"];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // Track the current position in the text
    const [text, setText] = useState('');
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            // Text is complete, start deleting
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            // Move to next text in rotation
            setDelta(500);
        } else {
            // Continue typing or deleting
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Yang Zhang `}<span className="wrap">{text}</span></h1>
                        <p>I'm a Senior Robotic Software Engineer with expertise in control algorithms, real-time systems, and robotics software development. With a Ph.D. in Mechanical Engineering and experience across research and industry, I specialize in developing advanced control systems for robotic manipulators, exoskeletons, and industrial automation solutions.</p>
                        <button onClick={() => console.log('connect')}>Let’s connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}