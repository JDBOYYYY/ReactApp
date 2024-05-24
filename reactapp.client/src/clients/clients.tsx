import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './clients.css';

export function Clients() {
    return (
    <Container fluid>
        <Row className="justify-content-md-center my-4">
            <Col style={{ textAlign: 'center', marginTop: '5px' }} md={10}>
            <h1>
                Our Valued Clients
            </h1>
            <p>
                We are proud to partner with a diverse range of clients who trust our software to enhance their productivity and efficiency.
            </p>
            </Col>
        </Row>

        <Row className="clients-row my-5">
            <Col md={2}></Col>
            <Col md={8}>
                <h2>Clients</h2>
                <p>
                    Here are some of the esteemed clients we have worked with.
                </p>
            </Col>
            <Col md={2}></Col>
        </Row>
        <Row className="clients-logos my-4">
            <Col md={2}></Col>
            <Col md={2}>
                <Image src="image/client1_logo.webp" className="client-logo" />
            </Col>
            <Col md={2}>
                <Image src="image/client2_logo.webp" className="client-logo" />
            </Col>
            <Col md={2}>
                <Image src="image/client3_logo.webp" className="client-logo" />
            </Col>
            <Col md={2}>
                <Image src="image/client4_logo.webp" className="client-logo" />
            </Col>
            <Col md={2}></Col>
        </Row>

        <Row className="testimonial-row my-5">
            <Col md={2}></Col>
            <Col md={8}>
                <h2>What Our Clients Say</h2>
                <p>
                    Hear from our satisfied clients about how our software has transformed their work processes.
                </p>
            </Col>
            <Col md={2}></Col>
        </Row>
        <Row className="testimonial-row my-4">
            <Col md={2}></Col>
            <Col md={8} className="testimonial-col">
                <blockquote className="testimonial">
                    "Our software has significantly improved our team's productivity and efficiency. The detailed analytics and seamless integrations are a game-changer!"
                    <footer>- Alex Johnson, CEO of Tech Solutions</footer>
                </blockquote>
                <blockquote className="testimonial">
                    "The advanced time tracking features have helped us monitor our work hours accurately and save a lot of time. Highly recommended!"
                    <footer>- Sarah Williams, Project Manager at Creative Agency</footer>
                </blockquote>
            </Col>
            <Col md={2}></Col>
        </Row>

        <Row className="case-studies-row my-5">
            <Col md={2}></Col>
            <Col md={8}>
                <h2>Case Studies</h2>
                <p>
                    Learn how our software has made a significant impact on our clients' businesses.
                </p>
            </Col>
            <Col md={2}></Col>
        </Row>
        <Row className="case-studies-row my-4">
            <Col md={2}></Col>
            <Col md={4} className="case-study-col">
                <h4>Case Study 1: Tech Solutions</h4>
                <p>
                    Tech Solutions experienced a 30% increase in productivity after implementing our software. Their team was able to streamline workflows and improve project tracking.
                </p>
            </Col>
            <Col md={4} className="case-study-col">
                <h4>Case Study 2: Creative Agency</h4>
                <p>
                    Creative Agency reduced time spent on administrative tasks by 40%, allowing their team to focus more on creative projects and client work.
                </p>
            </Col>
            <Col md={2}></Col>
        </Row>

        <Row className="cta-row my-5">
            <Col md={2}></Col>
            <Col md={8} className="cta-col">
                <h2>Join Our Growing List of Satisfied Clients</h2>
                <p>
                    Start your free trial today and discover how our software can transform your work processes.
                </p>
                <button className="cta-button">Start Free Trial</button>
            </Col>
            <Col md={2}></Col>
        </Row>
    </Container>
    );
}
