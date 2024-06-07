import { Button, Col, Row } from 'react-bootstrap';
import './App.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    return (
        <>
            <Row style={{ backgroundColor: 'rgb(228, 230, 235)', width: '100%' }}>
                <Col></Col>
                <Col md={5} className='mainPageText' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1>{t('mainTitle')}</h1>
                    <h3>{t('mainSubtitle')}</h3>
                </Col>
                <Col md={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image src="/image/challenges.webp" />
                </Col>
                <Col></Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col></Col>
                <Col style={{ margin: '50px', textAlign: 'center' }}>
                    <h1>{t('whatIsTimeWise')}</h1>
                    <h4>{t('timeWiseDescription')}</h4>
                </Col>
                <Col></Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col></Col>
                <Col md="auto">
                    <Row>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('workingTimeMeasurementTitle')}</Card.Title>
                                <Card.Text>{t('workingTimeMeasurementDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('projectTimeTrackingTitle')}</Card.Title>
                                <Card.Text>{t('projectTimeTrackingDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('dutyShiftPlanningTitle')}</Card.Title>
                                <Card.Text>{t('dutyShiftPlanningDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('orderPlanningTitle')}</Card.Title>
                                <Card.Text>{t('orderPlanningDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('timeTrackingSmartphoneTitle')}</Card.Title>
                                <Card.Text>{t('timeTrackingSmartphoneDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('integrationInterfacesTitle')}</Card.Title>
                                <Card.Text>{t('integrationInterfacesDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('timeRecordingTabletTitle')}</Card.Title>
                                <Card.Text>{t('timeRecordingTabletDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('expensesControlTitle')}</Card.Title>
                                <Card.Text>{t('expensesControlDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '400px' }}>
                            <Card.Body>
                                <Card.Title>{t('timeClocksTerminalsTitle')}</Card.Title>
                                <Card.Text>{t('timeClocksTerminalsDescription')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col></Col>
                <Col style={{ margin: '50px', textAlign: 'center' }}>
                    <h2>{t('whyTimeWise')}</h2>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md="auto">
                    <Row>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard1.svg" />
                            <Card.Body>
                                <Card.Title>{t('transparentClearTitle')}</Card.Title>
                                <Card.Text>{t('transparentClearDescription')}</Card.Text>
                                <Button variant="primary">{t('goSomewhere')}</Button>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard2.svg" />
                            <Card.Body>
                                <Card.Title>{t('simpleFlexibleTitle')}</Card.Title>
                                <Card.Text>{t('simpleFlexibleDescription')}</Card.Text>
                                <Button variant="primary">{t('goSomewhere')}</Button>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard3.svg" />
                            <Card.Body>
                                <Card.Title>{t('fullCostControlTitle')}</Card.Title>
                                <Card.Text>{t('fullCostControlDescription')}</Card.Text>
                                <Button variant="primary">{t('goSomewhere')}</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard4.svg" />
                            <Card.Body>
                                <Card.Title>{t('quickImplementationTitle')}</Card.Title>
                                <Card.Text>{t('quickImplementationDescription')}</Card.Text>
                                <Button variant="primary">{t('goSomewhere')}</Button>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard5.svg" />
                            <Card.Body>
                                <Card.Title>{t('availableOnlineTitle')}</Card.Title>
                                <Card.Text>{t('availableOnlineDescription')}</Card.Text>
                                <Button variant="primary">{t('goSomewhere')}</Button>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1', height: '600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard6.svg" />
                            <Card.Body>
                                <Card.Title>{t('scalableCompanySizeTitle')}</Card.Title>
                                <Card.Text>{t('scalableCompanySizeDescription')}</Card.Text>
                                <Button variant="primary">{t('goSomewhere')}</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col></Col>
                <Col style={{ margin: '50px', textAlign: 'center' }}>
                    <h2>{t('viewsExamples')}</h2>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md={8}>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <Image src="\image\monthlyReport.png" fluid style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                            <Carousel.Caption style={{ backgroundColor: 'white', color: 'black', opacity: '0.8' }}>
                                <h3>{t('slideLabel')}</h3>
                                <p>{t('slideDescription')}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="\image\monthlyReport.png" fluid style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                            <Carousel.Caption style={{ backgroundColor: 'white', color: 'black', opacity: '0.8' }}>
                                <h3>{t('slideLabel')}</h3>
                                <p>{t('slideDescription')}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="\image\monthlyReport.png" fluid style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                            <Carousel.Caption style={{ backgroundColor: 'white', color: 'black', opacity: '0.8' }}>
                                <h3>{t('slideLabel')}</h3>
                                <p>{t('slideDescription')}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="\image\monthlyReport.png" fluid style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                            <Carousel.Caption style={{ backgroundColor: 'white', color: 'black', opacity: '0.8' }}>
                                <h3>{t('slideLabel')}</h3>
                                <p>{t('slideDescription')}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
}

export default App;
