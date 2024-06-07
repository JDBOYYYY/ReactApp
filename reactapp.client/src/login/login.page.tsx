import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Login() {
    const { t } = useTranslation();

    return (
        <Container fluid className='containerClass'>
            <Row style={{ marginTop: '50px' }}>
                <Col xs={4}>
                    <Card style={{ width: '18rem', marginBottom: '20px' }}>
                        <Card.Img variant="top" src="image/card1.webp" />
                        <Card.Body>
                            <Card.Title>{t('taskScheduler')}</Card.Title>
                            <Card.Text>
                                {t('taskSchedulerDescription')}
                            </Card.Text>
                            <Button variant="primary">{t('readMore')}</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', marginBottom: '20px' }}>
                        <Card.Img variant="top" src="image/card2.webp" />
                        <Card.Body>
                            <Card.Title>{t('timeTracker')}</Card.Title>
                            <Card.Text>
                                {t('timeTrackerDescription')}
                            </Card.Text>
                            <Button variant="primary">{t('readMore')}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ width: '18rem', marginBottom: '20px' }}>
                        <Card.Img variant="top" src="image/card3.webp" />
                        <Card.Body>
                            <Card.Title>{t('calendarIntegration')}</Card.Title>
                            <Card.Text>
                                {t('calendarIntegrationDescription')}
                            </Card.Text>
                            <Button variant="primary">{t('readMore')}</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', marginBottom: '20px' }}>
                        <Card.Img variant="top" src="image/card4.webp" />
                        <Card.Body>
                            <Card.Title>{t('analyticsDashboard')}</Card.Title>
                            <Card.Text>
                                {t('analyticsDashboardDescription')}
                            </Card.Text>
                            <Button variant="primary">{t('readMore')}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='login-form'>
                    <Form>
                        <div className='login-form-image'>
                            <Image src="image/logo.webp" className="logo" />
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicCompany">
                            <Form.Control type="text" placeholder={t('enterCompanyId')} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder={t('enterEmail')} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder={t('enterPassword')} />
                        </Form.Group>
                        <div className='button-container'>
                            <Link to="/timeRecording" className="d-block">
                                <Button variant="primary" type="submit">
                                    {t('login')}
                                </Button>
                            </Link>
                            <Button variant="primary" type="submit">
                                {t('register')}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
