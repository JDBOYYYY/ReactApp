import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './settings.css';

export const Settings = () => {
  return (
    <Container fluid className="settings-page-container">
      <h2 className="my-4">Settings</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Profile Settings</h4>
              <Form>
                <Form.Group controlId="profileName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="profileEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="profilePhone" className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter your phone number" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Account Settings</h4>
              <Form>
                <Form.Group controlId="accountUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group controlId="accountPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Notification Settings</h4>
              <Form>
                <Form.Check
                  type="switch"
                  id="emailNotifications"
                  label="Email Notifications"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="smsNotifications"
                  label="SMS Notifications"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="pushNotifications"
                  label="Push Notifications"
                  className="mb-3"
                />
                <Button variant="primary" type="submit">
                  Save Notifications
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Privacy Settings</h4>
              <Form>
                <Form.Check
                  type="switch"
                  id="profileVisibility"
                  label="Profile Visibility"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="searchVisibility"
                  label="Search Visibility"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="dataSharing"
                  label="Data Sharing"
                  className="mb-3"
                />
                <Button variant="primary" type="submit">
                  Save Privacy
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Security Settings</h4>
              <Form>
                <Form.Group controlId="securityQuestion" className="mb-3">
                  <Form.Label>Security Question</Form.Label>
                  <Form.Control type="text" placeholder="Enter your security question" />
                </Form.Group>
                <Form.Group controlId="securityAnswer" className="mb-3">
                  <Form.Label>Security Answer</Form.Label>
                  <Form.Control type="text" placeholder="Enter your security answer" />
                </Form.Group>
                <Form.Group controlId="twoFactorAuth" className="mb-3">
                  <Form.Label>Two-Factor Authentication</Form.Label>
                  <Form.Check type="switch" id="enableTwoFactorAuth" label="Enable 2FA" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Security
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Language Settings</h4>
              <Form>
                <Form.Group controlId="languageSelect" className="mb-3">
                  <Form.Label>Preferred Language</Form.Label>
                  <Form.Control as="select">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Chinese</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Language
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Subscription Settings</h4>
              <Form>
                <Form.Group controlId="subscriptionPlan" className="mb-3">
                  <Form.Label>Subscription Plan</Form.Label>
                  <Form.Control as="select">
                    <option>Free</option>
                    <option>Basic</option>
                    <option>Premium</option>
                    <option>Enterprise</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Subscription
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Theme Settings</h4>
              <Form>
                <Form.Check
                  type="switch"
                  id="darkMode"
                  label="Dark Mode"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="highContrastMode"
                  label="High Contrast Mode"
                  className="mb-3"
                />
                <Button variant="primary" type="submit">
                  Save Theme
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
