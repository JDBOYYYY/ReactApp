import { Container, Row, Col, Button, Card, Form, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useConfig } from '../ConfigContext';
import './Login.css'; // Ensure you have corresponding CSS if needed

export function Login() {
    const { t } = useTranslation();
    const { primaryColor, logoUrl, companyName } = useConfig();
    const navigate = useNavigate();
    const { client } = useParams<{ client: string }>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/${client}/timeRecording`);
    };

    return (
        <Container fluid className='containerClass'>
            <Row style={{ marginTop: '50px' }}>
                <Col xs={4}>
                    <Card className="custom-card">
                        <Card.Img variant="top" src="/image/card1.webp" />
                        <Card.Body>
                            <Card.Title>{t('taskScheduler')}</Card.Title>
                            <Card.Text>
                                {t('taskSchedulerDescription')}
                            </Card.Text>
                            <Button variant={primaryColor}>{t('readMore')}</Button>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img variant="top" src="/image/card2.webp" />
                        <Card.Body>
                            <Card.Title>{t('timeTracker')}</Card.Title>
                            <Card.Text>
                                {t('timeTrackerDescription')}
                            </Card.Text>
                            <Button variant={primaryColor}>{t('readMore')}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card className="custom-card">
                        <Card.Img variant="top" src="/image/card3.webp" />
                        <Card.Body>
                            <Card.Title>{t('calendarIntegration')}</Card.Title>
                            <Card.Text>
                                {t('calendarIntegrationDescription')}
                            </Card.Text>
                            <Button variant={primaryColor}>{t('readMore')}</Button>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img variant="top" src="/image/card4.webp" />
                        <Card.Body>
                            <Card.Title>{t('analyticsDashboard')}</Card.Title>
                            <Card.Text>
                                {t('analyticsDashboardDescription')}
                            </Card.Text>
                            <Button variant={primaryColor}>{t('readMore')}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='login-form'>
                    <Form onSubmit={handleSubmit}>
                        <div className='login-form-image'>
                            <Image src={logoUrl} className="logo" />
                        </div>
                        <h2 className="company-name">{companyName}</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder={t('enterEmail')} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder={t('enterPassword')} />
                        </Form.Group>
                        <div className='button-container'>
                            <Button variant={primaryColor} type="submit">
                                {t('login')}
                            </Button>
                            <Button variant={primaryColor} type="submit">
                                {t('register')}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
