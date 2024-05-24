import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './aboutUs.css'; // Make sure this CSS file is imported

export function AboutUs() {
    return (
        <Container fluid>
            <Row className="justify-content-md-center my-4">
                <Col style={{ textAlign: 'center', marginTop: '5px' }} md={10}>
                    <h1>About Us</h1>
                    <p>Learn more about our company, our mission, and the team behind our success.</p>
                </Col>
            </Row>

        <Row className="mission-row my-5">
            <Col md={2}></Col>
            <Col md={8}>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to provide innovative time tracking and productivity solutions that help businesses and teams work more efficiently and effectively. We are committed to delivering high-quality software that meets the evolving needs of our clients.
                </p>
            </Col>
            <Col md={2}></Col>
        </Row>

        <Row className="history-row my-5">
            <Col md={2}></Col>
            <Col md={8}>
                <h2>Our History</h2>
                <p>
                    Founded in 2023, our company has grown from a small startup to a leading provider of productivity solutions. Over the years, we have expanded our offerings and continuously improved our software to meet the demands of our diverse clientele.
                </p>
            </Col>
            <Col md={2}></Col>
        </Row>

        <Row className="team-row my-5">
            <Col md={2}></Col>
            <Col md={8}>
                <h2>Meet the Team</h2>
                <p>
                    Our team is comprised of talented professionals dedicated to providing the best service and support to our clients. Get to know the people who make our company great.
                </p>
            </Col>
            <Col md={2}></Col>
        </Row>
        <Row className="team-photos my-4">
            <Col md={2}></Col>
            <Col md={2}>
                <Image src="image/team_member1.webp" className="team-photo" />
                <p className="team-name">Alex Johnson</p>
                <p className="team-role">CEO</p>
            </Col>
            <Col md={2}>
                <Image src="image/team_member2.webp" className="team-photo" />
                <p className="team-name">Sarah Williams</p>
                <p className="team-role">Project Manager</p>
            </Col>
            <Col md={2}>
                <Image src="image/team_member3.webp" className="team-photo" />
                <p className="team-name">David Brown</p>
                <p className="team-role">Lead Developer</p>
            </Col>
            <Col md={2}>
                <Image src="image/team_member4.webp" className="team-photo" />
                <p className="team-name">Emily Clark</p>
                <p className="team-role">Designer</p>
            </Col>
            <Col md={2}></Col>
        </Row>
    </Container>
    );
}
