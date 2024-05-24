import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './features.css'; // Make sure this CSS file is imported

export function Features() {
  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="justify-content-md-center my-4">
        <Col style={{ textAlign: 'center', marginTop: '5px' }} md={10}>
          <h1>
            Discover Our DeskTime Features for Enhanced Team Efficiency
          </h1>
          <p>
            Uncover how our app's time tracking capabilities can boost productivity, streamline workflows, and ultimately save you time and money.
          </p>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4} className="image-col">
          <Image src="/image/challenges.webp" className="feature-image" />
        </Col>
        <Col md={4}>
          <h2>Efficient Task Management</h2>
          <p>
            Manage your tasks seamlessly with DeskTime's intuitive task management system. Suitable for both small teams and large enterprises.
          </p>
          <ul>
            <li>Create and assign tasks easily</li>
            <li>Track task progress in real-time</li>
            <li>Integrate with your favorite tools</li>
          </ul>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4}>
          <h2>Detailed Performance Analytics</h2>
          <p>
            Gain insights into your team's productivity with our comprehensive performance analytics.
          </p>
          <ul>
            <li>Track individual and team performance</li>
            <li>Identify productivity trends</li>
            <li>Generate detailed reports</li>
          </ul>
        </Col>
        <Col md={4} className="image-col">
          <Image src="image/DetailedPerformanceAnalitics.webp" className="feature-image" />
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4} className="image-col">
          <Image src="image/EffitientTaskMenagment.webp" className="feature-image" />
        </Col>
        <Col md={4}>
          <h2>Seamless Integrations</h2>
          <p>
            Connect DeskTime with the tools you already use to ensure a smooth workflow.
          </p>
          <ul>
            <li>Integrate with project management tools</li>
            <li>Sync with your calendar</li>
            <li>Use our API for custom integrations</li>
          </ul>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4}>
          <h2>Advanced Time Tracking</h2>
          <p>
            Utilize advanced time tracking features to monitor work hours accurately.
          </p>
          <ul>
            <li>Track time on PC and mobile devices</li>
            <li>Use automated time tracking</li>
            <li>Set up customizable notifications</li>
          </ul>
        </Col>
        <Col md={4} className="image-col">
          <Image src="/image/Advanced.webp" className="feature-image" />
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4} className="image-col">
          <Image src="image/Security.webp" className="feature-image" />
        </Col>
        <Col md={4}>
          <h2>Robust Security Features</h2>
          <p>
            Keep your data secure with our robust security features.
          </p>
          <ul>
            <li>Data encryption</li>
            <li>Regular security audits</li>
            <li>Access control mechanisms</li>
          </ul>
        </Col>
        <Col md={2}></Col>
      </Row>

      {/* Additional Content */}
      {/* Testimonials Section */}
      <Row className="testimonial-row my-5">
        <Col md={2}></Col>
        <Col md={8}>
          <h2>What Our Clients Say</h2>
          <p>
            Hear from our satisfied clients about how DeskTime has transformed their work processes.
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row className="testimonial-row my-4">
        <Col md={2}></Col>
        <Col md={8} className="testimonial-col">
          <blockquote className="testimonial">
            "DeskTime has significantly improved our team's productivity and efficiency. The detailed analytics and seamless integrations are a game-changer!"
            <footer>- Alex Johnson, CEO of Tech Solutions</footer>
          </blockquote>
          <blockquote className="testimonial">
            "The advanced time tracking features have helped us monitor our work hours accurately and save a lot of time. Highly recommended!"
            <footer>- Sarah Williams, Project Manager at Creative Agency</footer>
          </blockquote>
        </Col>
        <Col md={2}></Col>
      </Row>

      {/* FAQs Section */}
      <Row className="faq-row my-5">
        <Col md={2}></Col>
        <Col md={8}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to some of the most commonly asked questions about DeskTime.
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row className="faq-row my-4">
        <Col md={2}></Col>
        <Col md={8}>
          <div className="faq">
            <h4>How does DeskTime improve productivity?</h4>
            <p>
              DeskTime provides detailed analytics and time tracking features that help identify productivity trends and areas for improvement.
            </p>
          </div>
          <div className="faq">
            <h4>Can DeskTime integrate with other tools?</h4>
            <p>
              Yes, DeskTime seamlessly integrates with various project management tools, calendars, and more to ensure a smooth workflow.
            </p>
          </div>
          <div className="faq">
            <h4>Is my data secure with DeskTime?</h4>
            <p>
              Absolutely. DeskTime uses robust security features, including data encryption, regular security audits, and access control mechanisms, to keep your data safe.
            </p>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>

      {/* Call-to-Action Section */}
      <Row className="cta-row my-5">
        <Col md={2}></Col>
        <Col md={8} className="cta-col">
          <h2>Ready to Boost Your Team's Efficiency?</h2>
          <p>
            Start your free trial today and discover how DeskTime can transform your work processes.
          </p>
          <button className="cta-button">Start Free Trial</button>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}
