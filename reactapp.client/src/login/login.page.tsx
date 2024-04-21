import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <Container fluid className='containerClass'>
            <Row style={{marginTop:'50px'}}>
                <Col xs={4}>
                    <Card style={{ width: '18rem', marginBottom:'20px' }}>
                        <Card.Img variant="top" src="image/card1.webp" />
                        <Card.Body>
                            <Card.Title>Task Scheduler</Card.Title>
                            <Card.Text>
                                Organize your day with a powerful task scheduler that allows you to set priorities, 
                                due dates, and reminders for your tasks.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', marginBottom:'20px' }}>
                        <Card.Img variant="top" src="image/card2.webp" />
                        <Card.Body>
                            <Card.Title>Time Tracker</Card.Title>
                            <Card.Text>
                                Keep track of how much time you spend on each task with an 
                                intuitive time tracker
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} className="mb-3">
                    <Card style={{ width: '18rem', marginBottom:'20px' }}>
                        <Card.Img variant="top" src="image/card3.webp" />
                        <Card.Body>
                            <Card.Title>Calendar Integration</Card.Title>
                            <Card.Text>
                                Sync your schedules seamlessly with your existing calendar to get a comprehensive view of your commitments
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' ,marginBottom:'20px' }}>
                        <Card.Img variant="top" src="image/card4.webp" />
                        <Card.Body>
                            <Card.Title>Analytics Dashboard</Card.Title>
                            <Card.Text>
                                Gain insights into your time management with detailed analytics and reporting features
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='login-form'>
                <Form>
                    <div className='login-form-image'>
                        <Image src = "image/logo.webp" className="logo" />
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicCompany">
                        <Form.Control type="text" placeholder="Enter companyId" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='button-container'>
                        <Link to="/timeRecording" className="d-block">
                            <Button variant="primary" type="submit" >
                                Login
                            </Button>
                        </Link>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
                </Col>
            </Row>
        </Container>
    );
}